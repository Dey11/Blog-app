import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {
  signinInput,
  signupInput,
  createBlogInput,
  updateBlogInput,
} from "@dey11/blog";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use(
  "/*",
  cors({
    origin: ["http://localhost:5173", "https://dey-blog.vercel.app"],
  })
);
app.get("/", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.json({ message: "Hello Hono!" });
});

app.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid input" });
  }

  try {
    const findUserInDb = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (findUserInDb) {
      return c.json({ message: "User already exists" });
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      message: "Registration successful",
      token: jwt,
      data: user,
    });
  } catch (err) {
    // c.status(411);
    console.log(err);
    return c.json({ message: "There was an error signing up" });
  }
});

app.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid input" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return c.json({ message: "Invalid username or password" });
    }

    if (body.password != user.password) {
      return c.json({ message: "Invalid username or password" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      message: "Logged in successfully",
      token: jwt,
      data: user,
    });
  } catch (err) {
    return c.json({ message: "Error logging in" });
  }
});

// middleware

app.use("/blog/*", async (c, next) => {
  try {
    const jwt = c.req.header("Authorization");

    if (!jwt) {
      c.status(401);
      return c.json({ message: "Unauthorized" });
    }

    const decodedToken = await verify(jwt, c.env.JWT_SECRET);

    if (!decodedToken) {
      c.status(401);
      return c.json({ message: "Invalid token" });
    }

    c.set("jwtPayload", decodedToken.id);
    await next();
  } catch (err) {
    c.status(400);
    return c.json({ message: "Server error" });
  }
});

app.post("/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid input" });
  }
  try {
    const userId = c.get("jwtPayload");

    const newBlog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({ message: "New blog created.", data: newBlog });
  } catch (err) {
    c.status(400);
    return c.json({ message: "Server error" });
  }
});

app.put("/blog/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid input" });
  }
  try {
    const userId = c.get("jwtPayload");
    const id = await c.req.param("id");
    const updatedBlog = await prisma.post.update({
      where: {
        id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      message: `Blog with id ${id} has been updated.`,
      data: updatedBlog,
    });
  } catch (err) {
    console.log(err);
    c.status(400);
    return c.json({ message: "Server error" });
  }
});

app.get("/blog/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      include: {
        author: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });
    return c.json({ message: "All blogs fetched", data: blogs });
  } catch (err) {
    c.status(400);
    return c.json({ message: "Server error" });
  }
});

app.get("/blog/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id = await c.req.param("id");
    const blog = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return c.json({
      message: `Blog with id ${id} has been fetched.`,
      data: blog,
    });
  } catch (err) {
    c.status(400);
    return c.json({ message: "Server error" });
  }
});

export default app;
