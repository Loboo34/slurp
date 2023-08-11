import React from "react";
import List from "./List";


const MostViewed = () => {
  //   function showSection(part){
  //     var sections = document.getElementsByClassName("section");

  //     for(var i = 0; i < sections.length; i++){
  //         sections[i].style.display = "none"
  //     }
  //     // document.querySelectorAll("part" + part).style.display = "flex";
  // }

  return (
    <div className=" pb-12 w-full  pr-3">
      <h1 className=" text-2xl text-[#cae962] font-semibold pb-6">
        Most viewed
      </h1>
      <div className=" text-white w-full bg-red-500 h-10">

          <button className=" w-[33.3%] bg-red-400  h-10">Today</button>


          <button className=" w-[33.3%] h-10 bg-orange-400">Week</button>


          <button className=" w-[33.3%] h-10 bg-green-300">Month</button>
      </div>
      {/* <div className=' flex text-[#cae962] bg-[#4b4c53] h-10 w-[350px] justify-center'>
        <button className=' w-[86px] h-10 bg-[#e6e7ec]' onClick={showSection(1)}>Today</button>
        <button className='  w-[86px] h-10' onClick={showSection(2)}>Week</button>
        <button className=' bg-[#4b4c53] w-[85px] h-10' onClick={showSection(3)}>Month</button>
      </div> */}
       <div className=" flex overflow-hidden w-full">
        <List />
        
      </div>
    </div>
  );
};

export default MostViewed;
