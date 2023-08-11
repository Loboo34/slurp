import React from "react";
import AnimeData from "../../AnimeData";

const Entry = () => {
  const truncatedData = AnimeData.slice(0, 10);
  return (
    <div className=" w-[100%]">
      {truncatedData.map((anime, key) => {
        return (
          <div>
            <div className=" flex pt-5 h-[75px]  pb-3">
              <p className=" pt-3 pl-4 pr-4 text-2xl text-[#cae962]">{anime.id}</p>
              {/* <hr className=' text-[#cae962] w-6'/> */}
              <img src={anime.img} alt="img" className=" w-10 h-12 pl-2" />
              <div className=" pl-4 ">
                <h1 className=" text-[white] text-[16px] capitalize">
                  {anime.name}
                </h1>
                <span className=" bg-red-300 mr-1 border-1 text-[12px] p-1">
                  21
                </span>
                <span className=" bg-orange-300 mr-1 border-1 text-[12px] p-1">
                  1000
                </span>
                <span className=" bg-orange-300 mr-1 border-1 text-[12px] p-1">
                  10
                </span>
                <span className=" bg-orange-300 border-1 text-[12px] p-1">
                  1
                </span>
              </div>
            </div>
            <center>
              {" "}
              <hr className=" text-[#fdfdfd] opacity-25 h-4 w-[200px] text-center " />
            </center>
          </div>
        );
      })}
    </div>
  );
};

export default Entry;
