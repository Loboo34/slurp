import React from "react";
import {useState} from "react";
import { useLogin } from "../../hooks/useLogin"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

  await login( email, password)
  };

  return (
    <>
      <div className=" w-[100%] ">
        <div className="  p-5">
          <h2 className=" text-white text-center text-[1.25rem] font-semibold">
            Welcome back!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className=" relative w-[90%] h-[70px] mt-[20px] ml-[20px]">
              <label className=" text-[11px] font-medium uppercase text-white">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                required
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" w-full h-[50%]"
              />
            </div>
            <div className=" relative w-[90%] h-[70px] mt-[20px] ml-[20px]">
              <label className=" text-[11px] font-medium uppercase text-white">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" w-full h-[50%] block"
              />
            </div>
            <div className=" text-[.7rem] flex justify-between mt-[15px] mb-[15px]">
              <label className=" text-white text-[14px] pl-4">
                <input type="checkbox" /> Remember me
              </label>
              <p className=" text-[14px] text-[#cae962] pr-10">
                Forgot password?
              </p>
            </div>
            <button
              className=" bg-[#cae962] w-[85%] h-[40px] ml-6 text-[14px]"
              type="submit"
              disabled={isLoading}
            >
              Login
            </button>
            <div className="text-[.7rem] flex justify-center items-center pt-[50px] ">
              <p className="text-white text-[14px]">
                Dont have an account?{" "}
                <span
                  className=" text-[14px] text-[#cae962] reg-link cursor-pointer"
                  onClick={() => props.onFormSwich("regester")}
                >
                  Register
                </span>{" "}
                {/* <span className=" text-[14px] text-[#cae962] cursor-pointer">
                verify
              </span> */}
              </p>
            </div>
            {error && <div className=" text-red-800">{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
