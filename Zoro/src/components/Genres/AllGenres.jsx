import React, { useState } from "react";
import GenreData from "./GenreData";
import { Link } from "react-router-dom";

const ALLGenres = () => {
  const [showAllData, setShowAllData] = useState(false);
  const truncatedData = GenreData.slice(0, 24);

  const handleShowAllData = () => {
    setShowAllData((prevState) => !prevState);
  };
  return (
    <div className="-mt-5 pb-10  relative pr-3">
      <h1 className="  pb-4 text-[#cae962]  font-semibold text-[22px]  pl-4 font-[Montserrat,Arial]">
        Geners
      </h1>
      <div className=" w-full md:bg-[#2a2c31] border-1 relative pb-2 overflow-hidden">
        <div className="   grid grid-cols-4 md:grid-cols-3">
          {truncatedData.map((item, key) => {
            return (
              <Link to={`/genre/${item.name}`}>
                <div className=" pt-2 pl-4 " key={key}>
                  <button className=" pt-2 pb-2 pl-2 pr-4 text-[#d0e6a5] md:hover:bg-[#414248] rounded border-1 relative text-[12px] bg-[#303135]">
                    {item.name}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
        {!showAllData && (
          <button
            className=" bg-[#4b4c53]  pt-2 pb-2 w-[90%]  ml-4  mr-4 mt-2 text-white text-[12px] hover:bg-[#5c5d66]"
            onClick={handleShowAllData}
          >
            {" "}
            {showAllData ? "Show Less" : "Show More"}
          </button>
        )}
        {showAllData && (
          <div className="   grid grid-cols-4 md:grid-cols-3">
            {GenreData.filter((item) => !truncatedData.includes(item)).map(
              (item, key) => {
                return (
                  <Link to={`/genre/${item.name}`}>
                    <div className=" pt-2 pl-4 " key={key}>
                      <button className=" pt-2 pb-2 pl-2 pr-4 text-[#d0e6a5] md:hover:bg-[#414248] rounded border-1 relative text-[12px] bg-[#303135]">
                        {item.name}
                      </button>
                    </div>
                  </Link>
                );
              }
            )}
            {showAllData && (
              <button
                className=" bg-[#4b4c53]  pt-2 pb-2 w-[90%]  ml-4  mr-4 mt-2 text-white text-[12px] hover:bg-[#5c5d66]"
                onClick={handleShowAllData}
              >
                {" "}
                {showAllData ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ALLGenres;
