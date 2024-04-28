import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { BACKEND_URL, TINY_API_KEY } from "../config";
import { CreateBlogType } from "@dey11/blog";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL;
const TINY_API_KEY = process.env.TINY_API_KEY;

export default function CreateBlogs() {
  const [data, setData] = useState<CreateBlogType>({
    title: "",
    content: "",
  });
  const editorRef = useRef<null | string>(null);
  const log = () => {
    if (editorRef.current) {
      //@ts-ignore
      const content = editorRef.current.getContent();
      setData({ ...data, content: content });
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/blog`,
        { title: data.title, content: data.content },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="m-2">
      <h1 className="text-5xl font-bold">Create a new blog post...</h1>
      <p className="text-slate-500 pt-3 font-light">
        Fill in the details below to create your new blog post.
      </p>
      <input
        className="border-2 border-slate-300 rounded-lg p-2 w-full my-10 text-center text-2xl"
        type="text"
        placeholder="Title of your blog post"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />

      <Editor
        apiKey={TINY_API_KEY}
        //@ts-ignore
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Tell your story...</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        onClick={log}
        className="border-2 border-slate-400 my-10 p-2 w-full rounded-md font-light "
      >
        Publish Article
      </button>
    </div>
  );
}
