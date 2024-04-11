import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

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

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "Registration successful", data: jwt });
  } catch (err) {
    // c.status(411);
    return c.json({ message: "There was an error signing up" });
  }
});

app.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      return c.json({ message: "Invalid username or password" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "Logged in successfully", data: jwt });
  } catch (err) {
    return c.json({ message: "Error logging in" });
  }
});

app.post("/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.text("New blog created");
});

app.put("/blog/:id", (c) => {
  return c.text("edited blog");
});

app.get("/blog/:id", (c) => {
  return c.text("fetch all blogs of an user");
});

app.get("/blog/bulk", (c) => {
  return c.text("get all blogs for landing page");
});

export default app;
