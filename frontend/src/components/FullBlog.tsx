import { CircleAvatar } from "./BlogCard";

const FullBlog = ({
  title,
  date,
  content,
  username,
  bio,
}: {
  title: string;
  date: string;
  content: string;
  username: string;
  bio: string;
}) => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-8">
        <div className="text-5xl pb-5 font-bold">{title}</div>
        <div className="pb-10 text-slate-500">Posted on {date}</div>
        <div className="">{content}</div>
      </div>
      <div className="col-span-4">
        <div className="pb-5 font-semibold">Author</div>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-1">
            <CircleAvatar name={username} />
          </div>
          <div className="col-span-11 ml-3">
            <div className="text-2xl font-bold pb-2">{username}</div>
            <div>{bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
