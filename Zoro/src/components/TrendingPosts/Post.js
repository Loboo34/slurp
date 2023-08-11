import React from "react";

const Post = () => {
  return (
    // <div className=' bg-[rgba(255,255,255,0.04)]  w-fit'>

    //   <div className=' flex '>
    //         <span className=' pr-3  text-[11px] text-[#4da6ff]'>#General</span>
    //         <span className=' text-[11px] font-bold text-[#aaa]'>.</span>
    //         <span className=' mr-4 pl-2 text-[11px] text-[#aaa]'>4 hours ago</span>
    //     </div>
    //     <h1 className=' text-[1.3em] text-[white] '>Join the community</h1>
    //     <h2 className=' text-[12px] text-[#aaa]'>Fax or cap</h2>
    //     <div className=' flex'>
    //     <img src="/img/rimuru.jpg" alt="slime" className=' w-10 h-10 rounded-full' />
    //     <h1 className=' text-[#ffb526] text-[12px]'>Rimuru.tempest</h1>
    //     </div>
    // </div>
    <div className="bg-[rgba(255,255,255,0.04)]  pt-2 pl-4 mr-4 mb-3">
      <div>
        <div className="  pb-2 ">
          <span className="text-[11px] text-[#4da6ff] pr-2">#Question</span>
          <span className="text-[11px] text-[#aaa] pr-2">.</span>
          <span className="text-[11px] text-[#aaa]">2 hours ago</span>
        </div>
        <h2 className="text-[1.3em] text-[white] pb-2">Saddest Anime death?</h2>
        <p className=" text-[12px] text-[#aaa]">The one that made you crie</p>
        <div className=" flex pt-4 pb-4 space-x-2">
          <img
            src="/img/rimuru.jpg"
            alt="slime"
            className=" w-10 h-10 rounded-full"
          />
          <span className=" text-[#ffb526] text-[12px] pt-2">
            Rimuru.tempest
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
