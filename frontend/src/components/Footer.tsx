import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-2 mt-5 text-slate-500 font-light">
      <div className="flex flex-row justify-between text-sm  py-5 ">
        <div>© 2024 Dey Blogs. All rights reserved.</div>
        <div className="flex flex-row gap-5">
          <div>
            <Link to="/">Terms of Service</Link>
          </div>
          <div>
            <Link to="/">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
