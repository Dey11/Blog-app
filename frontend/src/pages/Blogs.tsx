import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
// import { BACKEND_URL } from "../config";
const BACKEND_URL = process.env.BACKEND_URL;

const Blogs = () => {
  const [_, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/blog/bulk`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });

      console.log(response.data);
      setBlogs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <BlogCard
        title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
        username="Shreyan Dey"
        content="No need to create a fancy and modern website with hundreds of pages to make money online. 
        - Making money online is the dream of man..."
      />
      <BlogCard
        title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
        username="Shreyan Dey"
        content="No need to create a fancy and modern website with hundreds of pages to make money online. 
        - Making money online is the dream of man..."
      />
      <BlogCard
        title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
        username="Shreyan Dey"
        content="No need to create a fancy and modern website with hundreds of pages to make money online. 
        - Making money online is the dream of man..."
      />
      <BlogCard
        title="How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
        username="Shreyan Dey"
        content="No need to create a fancy and modern website with hundreds of pages to make money online. 
        - Making money online is the dream of man..."
      />
    </div>
  );
};

export default Blogs;
