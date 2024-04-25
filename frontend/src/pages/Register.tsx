import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { SignupType } from "@dey11/blog";
import { useRecoilState } from "recoil";
import { authState } from "../recoil/atoms/authState";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/signup`, {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
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
          <h1 className=" font-bold text-3xl pt-10">Register</h1>
          <h3 className="text-slate-500 pb-3">
            Enter your details to Register to Blog.
          </h3>
          <label>
            <span className="block text-slate-600">Name</span>{" "}
            <input
              className=" border-2 rounded-md px-2 py-1"
              type="name"
              onChange={(e) => {
                setRegisterData({ ...registerData, name: e.target.value });
              }}
            />
          </label>
          <label>
            <span className="block text-slate-600">Email</span>{" "}
            <input
              className=" border-2 rounded-md px-2 py-1"
              type="email"
              onChange={(e) => {
                setRegisterData({ ...registerData, email: e.target.value });
              }}
            />
          </label>
          <label className="pb-2">
            <span className="block text-slate-600">Password</span>
            <input
              className="border-2 rounded-md px-2 py-1"
              type="password"
              onChange={(e) => {
                setRegisterData({ ...registerData, password: e.target.value });
              }}
            />
          </label>
          <button className="bg-black text-slate-50 mx-5 rounded-md py-1 font-light">
            Register
          </button>
          <h3 className=" underline font-light text-slate-600 pb-6 pt-5">
            Sign in to your account
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Register;
