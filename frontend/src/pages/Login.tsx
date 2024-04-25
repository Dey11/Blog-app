import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { SigninType } from "@dey11/blog";
import { useRecoilState } from "recoil";
import { authState } from "../recoil/atoms/authState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [loginData, setLoginData] = useState<SigninType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/signin`, {
        email: loginData.email,
        password: loginData.password,
      });
      // console.log(res.data);
      const token = res.data.token;
      setAuth({
        id: res.data.id,
        name: res.data.name || "User",
        email: res.data.email,
      });
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="">
        <form
          className="mx-auto flex flex-col gap-5 border text-center max-w-96 rounded-md"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className=" font-bold text-3xl pt-10">Login</h1>
          <h3 className="text-slate-500 pb-5">
            Enter your email below to login to your account.
          </h3>
          <label>
            <span className="block text-slate-600">Email</span>{" "}
            <input
              className=" border-2 rounded-md px-2 py-1"
              type="email"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
          </label>
          <label className="pb-2">
            <span className="block text-slate-600">Password</span>
            <input
              className="border-2 rounded-md px-2 py-1"
              type="password"
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
          </label>
          <button className="bg-black text-slate-50 mx-5 rounded-md py-1 font-light">
            Login
          </button>
          <h3 className=" underline font-light text-slate-600 pb-10 pt-10">
            Sign up for an account
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
