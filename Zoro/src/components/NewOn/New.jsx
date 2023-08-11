import React from "react";

import AnimeData from "../../AnimeData";
import Card from "../LatestEp/Card";


const New = () => {
  const truncatedData = AnimeData.slice(0, 12);
  return (
    <div className="  relative pb-4 pl-4">
      <div className=" flex">
        <h1 className=" mt-0 pb-5 text-[#cae962] font-semibold text-[22px]  pl-4 font-[Montserrat,Arial]">
          New on Zoro
        </h1>
        {/* <button className=' text-white'>view more</button> */}
      </div>
      <div>
       <Card AnimeData={truncatedData}/>
        
      </div>
      <div className=" absolute right-6 top-1">
        <button className=" text-white">view more &#8250;</button>
      </div>
    </div>
  );
};

export default New;
