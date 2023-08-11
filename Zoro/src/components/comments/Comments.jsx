import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import NewestComments from "./CommetSections/NewestComments";
import TopComments from "./CommetSections/TopComments";


const Comments = () => {

  return (
    <div className="  bg-[#313136] pb-20">
      <div className=" pb-5 w-full relative">
        <div className="flex pt-8 pb-4 commentsbtn">
          {/* <button
            className=" text-[10px] md:text-[15px]  pr-3 pl-3 pt-1 pb-1 rounded-2xl mt-10 ml-4 text-[white]  
           newbtn"
            // onClick={handleClick}
          >
            Newest Comment
          </button>
          <button
            className=" text-[10px] md:text-[15px] pr-3 pl-3 pt-1 pb-1 rounded-2xl mt-10 ml-4 text-[white] topbtn "
            // onClick={handleClick}
          >
            Top Comment
          </button> */}
          <nav className="">
            <NavLink className="text-[10px] md:text-[15px]  pr-3 pl-3 pt-1 pb-1 rounded-2xl mt-10 ml-4 text-[white]">
              Newest Comment
            </NavLink>
            <NavLink className="text-[10px] md:text-[15px]  pr-3 pl-3 pt-1 pb-1 rounded-2xl mt-10 ml-4 text-[white]">
              Top Comment
            </NavLink>
          </nav>
        </div>
        <div className=" flex absolute right-3 bottom-5">
          <h1 className=" text-white pr-3 max-md:hidden">Show Comments</h1>
          <button className=" text-[#cae962]">on</button>
        </div>
      </div>
      <div className=" overflow-hidden">
        <NewestComments />
     
      </div>
    </div>
  );
};

export default Comments;
