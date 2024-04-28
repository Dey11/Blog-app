import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import LandingImage from "../assets/landing.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-5">
      <div className="grid grid-cols-2 pb-20 ">
        <div className="pt-20">
          <LandingLeft />
        </div>
        <div>
          <LandingRight />
        </div>
      </div>
      <div className=" border-t-2 pt-20">
        <FeaturedPosts />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
};

export default Home;

const LandingLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <h1 className=" font-semibold text-6xl">
        Discover the Latest Trends in Blogging
      </h1>
      <div className="text-xl text-slate-500">
        Explore a diverse range of topics, from lifestyle and technology to
        personal growth and entertainment.
      </div>
      <button
        className="bg-black text-white px-5 font-thin py-2 rounded-md"
        onClick={() => {
          navigate("/blogs");
        }}
      >
        Explore the blog
      </button>
    </div>
  );
};

const LandingRight = () => {
  return (
    <div className="bg-red-500 text-center items-center">
      <img src={LandingImage}></img>
    </div>
  );
};
