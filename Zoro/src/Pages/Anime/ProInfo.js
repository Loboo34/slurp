import React from "react";
import SeasonsInfo from "../../components/Body/SeasonsInfo";
import Actors from "../../components/Body/Characters/Actors";

const ProInfo = () => {
  return (
    <div>
      <div>
        <h1 className=" text-2xl text-[#cae962] font-semibold pb-10 pl-4">
          More Seasons
        </h1>
        <div className=" flex">
          <SeasonsInfo />
          <SeasonsInfo />
        </div>
      </div>
      <div className=" pb-8">
        <h1 className=" text-2xl text-[#cae962] font-semibold pb-6 pl-4">
          Characters & Voice Actors
        </h1>
        <div className=" flex pb-4">
          <Actors />
          <Actors />
          <Actors />
        </div>
        <div className=" flex pb-4">
          <Actors />
          <Actors />
          <Actors />
        </div>
      </div>
    </div>
  );
};

export default ProInfo;
