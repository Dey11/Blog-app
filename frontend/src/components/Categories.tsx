const Categories = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="text-center pb-10">
        <button className="bg-slate-300 rounded-md px-2 pt-1">
          Blog Categories
        </button>
      </div>
      <div className="text-center">
        <h1 className="font-semibold text-5xl pb-6">
          Explore Our Content by Category
        </h1>
        <h4 className="text-xl text-slate-500 pb-10">
          Browse our diverse range of blog categories to find content that
          resonates with you.
        </h4>
      </div>
      <div>
        <CategoryCards />
      </div>
    </div>
  );
};

export default Categories;

const CategoryCards = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className=" w-72 h-80 grid grid-rows-12 rounded-md overflow-hidden shadow-lg border-2 items-center px-10">
        <div className=" row-span-4 items-center">
          <ActivityIcon
            className={
              "mx-auto h-24 w-24 text-gray-500 dark:text-gray-400 pt-8"
            }
          />
        </div>
        <div className="row-span-4 text-center text-xl">Lifestyle</div>
        <div className="text-center text-slate-500">
          Explore articles on health, wellness, and personal development.
        </div>
      </div>
      <div className=" w-72 h-80 grid grid-rows-12 rounded-md overflow-hidden shadow-lg border-2 items-center px-10">
        <div className=" row-span-4 items-center">
          <ComputerIcon
            className={
              "mx-auto h-24 w-24 text-gray-500 dark:text-gray-400 pt-8"
            }
          />
        </div>
        <div className="row-span-4 text-center text-xl">Technology</div>
        <div className="text-center text-slate-500">
          Stay up-to-date with the latest trends and innovations in tech.
        </div>
      </div>
      <div className=" w-72 h-80 grid grid-rows-12 rounded-md overflow-hidden shadow-lg border-2 items-center px-10">
        <div className=" row-span-4 items-center">
          <LuggageIcon
            className={
              "mx-auto h-24 w-24 text-gray-500 dark:text-gray-400 pt-8"
            }
          />
        </div>
        <div className="row-span-4 text-center text-xl">Travel</div>
        <div className="text-center text-slate-500">
          Discover inspiring stories and tips for your next adventure.
        </div>
      </div>
      <div className=" w-72 h-80 grid grid-rows-12 rounded-md overflow-hidden shadow-lg border-2 items-center px-10">
        <div className=" row-span-4 items-center">
          <BusIcon
            className={
              "mx-auto h-24 w-24 text-gray-500 dark:text-gray-400 pt-8"
            }
          />
        </div>
        <div className="row-span-4 text-center text-xl">Business</div>
        <div className="text-center text-slate-500">
          Explore insights and strategies for entrepreneurship and career
          growth.
        </div>
      </div>
    </div>
  );
};

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function BusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function ComputerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function LuggageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  );
}

function PenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}
