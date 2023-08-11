import React from "react";
import { useState } from "react";

const Verify = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" w-[100%] h-full ">
      <div className="  p-5">
        <h2 className=" text-white text-center text-[1.25rem] font-semibold">
          Send verification
        </h2>
        <form onSubmit={handleSubmit}>
          <div className=" relative w-[90%] h-[70px] mt-[20px] ml-[20px]">
            <label className=" text-[11px] font-medium uppercase text-white">
              Your EMAIL
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

          <button
            className=" bg-[#cae962] w-[85%] h-[40px] ml-6 text-[14px]"
            type="submit"
          >
            Submit
          </button>
          <div className="text-[.7rem] flex justify-center items-center pt-[50px]">
            <p className="text-white text-[14px]">
              Dont have an account?
              <a
                className=" text-[14px] text-[#cae962] reg-link cursor-pointer"
                onClick={() => props.onFormSwich("login")}
              >
                Back to sing-in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
