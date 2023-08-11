import React from "react";
import AnimeData from "../../AnimeData";
import Card from "../LatestEp/Card";

const TopUpComing = () => {
  const truncatedData = AnimeData.slice(0, 12);
  return (
    <div className=" pb-28 relative max-md:hidden">
      <h1 className="text-2xl text-[#cae962] font-semibold pb-6 pl-4">
        Top Up Coming
      </h1>
      <div className="pl-4">
        <Card AnimeData={truncatedData} />
      </div>
      <div className=" absolute right-6 top-1">
        <button className=" text-white">view more &#8250;</button>
      </div>
    </div>
  );
};

export default TopUpComing;
