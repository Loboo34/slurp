import React from "react";
import TopAiring from "./TopAiring";
import ALLGenres from "../../components/Genres/AllGenres";
import { useParams } from "react-router-dom";

import Card from "./Card";

const Genre = () => {
  const { genre } = useParams()
  
  return (
    <div className=" ">
      <h1 className="  text-[#cae962]  font-semibold text-[22px]  pl-4 font-[Montserrat,Arial] pt-10">
        {genre}
      </h1>

      <div className="w-full flex">
        <div className="w-9/12  pt-4">
          <Card targeType={"Romance"} />
        </div>
        <div className=" w-3/12 pt-1 pl-3">
          <ALLGenres />
          <TopAiring />
        </div>
      </div>
    </div>
  );
};

export default Genre;
