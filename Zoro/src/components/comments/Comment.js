import React from "react";

const Comment = () => {
  return (
    <div className=" bg-[#121315] w-[295px] h-[225px] ml-4 border-1 rounded-xl pl-4 pt-4 overflow-hidden justify-center">
      <div className=" flex pb-4">
        <img
          src="/img/rimuru.jpg"
          alt="slime"
          className=" w-12 h-12 rounded-full"
        />
        <div className=" pl-3">
          <h1 className=" text-white text-sm">Rimuru.tempest</h1>
          <p className=" text-xs text-gray-400">-time..</p>
        </div>
      </div>
      <h1 className=" justify-center text-white text-base">
        Peak fiction right here. Jin wo is Hi
      </h1>
    
    </div>
  );
};

export default Comment;
