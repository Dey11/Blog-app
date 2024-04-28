import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState } from "../recoil/atoms/authState";
import axios from "axios";
import { useEffect } from "react";

const BACKEND_URL = process.env.BACKEND_URL;
const Header = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth({
      id: null,
      name: null,
      email: null,
    });
  };

  const checkAuth = async () => {
    const user = localStorage.getItem("token");
    try {
      if (user) {
        const res = await axios.get(`${BACKEND_URL}/auth`, {
          headers: {
            Authorization: user,
          },
        });
        setAuth({
          id: res.data.data.id,
          name: res.data.data.name,
          email: res.data.data.email,
        });
        // console.log(auth);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="flex flex-row justify-between pt-5 pb-20 ">
      <div className="hover:underline">
        <Link to="/">Dey Blogs</Link>
      </div>
      <div className="flex flex-row gap-5">
        <div className="hover:underline">
          <Link to="/features">Features</Link>
        </div>
        <div className="hover:underline">
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="hover:underline">
          <Link to="/about">About</Link>
        </div>
        <div className="hover:underline">
          <Link to="/contact">Contact</Link>
        </div>
        {auth.id != null ? (
          <div className="hover:underline">
            <Link to="/blogs/create">
              Create Blog, {auth.name ? auth.name : "User"}
            </Link>
          </div>
        ) : (
          <div className="hover:underline">
            <Link to="/login">Login</Link>
          </div>
        )}

        {auth.id != null ? (
          <div className="hover:underline" onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </div>
        ) : (
          <div className="hover:underline">
            <Link to="/register">Signup</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
