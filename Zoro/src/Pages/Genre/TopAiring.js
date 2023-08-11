import React from "react";
import Related from "../../components/Body/Related";
import AnimeData from "../../AnimeData";

const TopAiring = () => {
  const trunc = AnimeData.slice(0, 10)
  return (
    <div>
      <h1 className=" text-2xl text-[#cae962] font-semibold pb-6 pl-4">
        Top Airing
      </h1>

      <Related AnimeData={trunc}/>
     
    </div>
  );
};

export default TopAiring;
