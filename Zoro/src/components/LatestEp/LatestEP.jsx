import React from "react";
import AnimeData from "../../AnimeData";
import Card from "./Card";
const LatestEP = () => {
  // const cardStyle = {
  //   backgroundImage: "url(/img/isekaiking.jpg)",
  // };
   const truncatedData = AnimeData.slice(0, 12);
  return (
    <div className=" relative md:pl-4">
      <div>
        <h1 className=" mt-0 pb-5 text-[#cae962]  font-semibold text-[22px] pl-4 font-[Montserrat,Arial]">
          Latest Episode
        </h1>
      </div>
      <div className="">
<Card AnimeData={truncatedData}/>       
      </div>
      <div className=" absolute md:right-7  top-0 right-0">
        <button className=" text-white">view more &#8250;</button>
      </div>
    </div>
  );
};

export default LatestEP;
