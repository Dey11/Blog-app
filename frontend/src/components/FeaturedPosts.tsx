const FeaturedPosts = () => {
  return (
    <div className="pb-20 border-b-2">
      <div className="text-center pb-10">
        <button className="bg-slate-300 rounded-md px-2 pt-1">
          Featured Posts
        </button>
      </div>
      <div className="text-center">
        <h1 className="font-semibold text-5xl pb-6">
          Explore Our Latest Articles
        </h1>
        <h4 className="text-xl text-slate-500 pb-10">
          Dive into our curated selection of thought-provoking and engaging blog
          posts.
        </h4>
      </div>
      <div>
        {" "}
        <FeaturedBlogs />{" "}
      </div>
    </div>
  );
};

export default FeaturedPosts;

const FeaturedBlogs = () => {
  return (
    <div className="flex flex-row justify-between pt-5">
      <div className=" w-96 h-96 grid grid-rows-12 rounded-md overflow-hidden shadow-lg border-2">
        <div className="min-w-full row-span-8 p-1">Image</div>
        <div className="p-2 text-xl row-span-2">
          Unlocking the Power of Mindfulness
        </div>
        <div className="p-2 text-slate-500">
          Discover how mindfulness can transform your life and well-being.
        </div>
      </div>
      <div className=" w-96 h-96 grid grid-rows-12 rounded-md overflow-hidden shadow-lg border-2">
        <div className="min-w-full row-span-8 p-1">Image</div>
        <div className="p-2 text-xl row-span-2">
          The Future of Remote Work: Trends and Insights
        </div>
        <div className="p-2 text-slate-500">
          Explore the evolving landscape of remote work and its impact on the
          workforce.
        </div>
      </div>
      <div className=" w-96 h-96 grid grid-rows-12 rounded-md overflow-hidden shadow-lg border-2">
        <div className="min-w-full row-span-8 p-1">Image</div>
        <div className="p-2 text-xl row-span-2">
          The Art of Storytelling: Captivating Your Audience
        </div>
        <div className="p-2 text-slate-500">
          Learn the secrets of crafting compelling stories that engage and
          inspire.
        </div>
      </div>
    </div>
  );
};
