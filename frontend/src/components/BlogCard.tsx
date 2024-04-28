const BlogCard = ({
  username,
  title,
  content,
}: {
  username: string;
  title: string;
  content: string;
}) => {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto flex flex-col border-b-2 pb-3 mb-5">
        <div className="flex flex-row gap-5 items-center pb-2 text-slate-500">
          <div className="">
            <CircleAvatar name="Shreyan Dey" />
          </div>
          <div>{username}</div>
          <div>Date</div>
          <div>Public</div>
        </div>
        <div className="grid grid-cols-12">
          <div className=" col-span-9 mr-6">
            <div className="font-bold text-3xl pb-5">{title}</div>
            <div className="text-slate-600">{content}</div>
          </div>
          <div className="col-span-3 bg-slate-500 min-h-40">Img</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

export const CircleAvatar = ({ name }: { name: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
};
