import React from "react";
import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirm, setConfirm] = useState("");

  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register( name, email, password);
  };

  return (
    <div className=" w-[500px]">
      <div className=" p-5">
        <h2 className=" text-white text-center text-[1.25rem] font-semibold">
          Creeate an account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className=" relative w-[90%] h-[70px] mt-[20px] ml-[20px]">
            <label className=" text-[11px] font-medium uppercase text-white">
              User name
            </label>
            <input
              type="name"
              placeholder="User name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-full h-[50%]"
            />
          </div>
          <div className=" relative w-[90%] h-[70px] mt-[20px] ml-[20px]">
            <label className=" text-[11px] font-medium uppercase text-white">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full h-[50%] block"
            />
          </div>
          {/* <div className=" relative w-[90%] h-[70px] mt-[20px] ml-[20px] ">
            <label className=" text-[11px] font-medium uppercase text-white">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className=" w-full h-[50%] block"
            />
          </div> */}
          <button
            className=" bg-[#cae962] w-[90%] h-[40px] ml-6 text-[14px] mt-6"
            disabled={isLoading}
          >
            Register
          </button>
          <div className="text-[.7rem] flex justify-center items-center mt-[15px]">
            <p className="text-white text-[14px]">
              Have an account?
              <p
                className=" text-[14px] text-[#cae962] cursor-pointer pb-5 "
                onClick={() => props.onFormSwich("login")}
                disabled={isLoading}
              >
                Login
              </p>
            </p>
          </div>
          {error && <div className=" text-red-800">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;
