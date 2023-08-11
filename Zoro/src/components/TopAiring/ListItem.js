import React from 'react'
import { Link } from "react-router-dom";
import AnimeData from '../../AnimeData';

const ListItem = () => {
  const truncatedData = AnimeData.slice(0, 5);
  return (
    <div>
      {truncatedData.map((anime, key) => {
        return (
          <div className="flex bg-[#414248] h-[110px]  relative" key={key}>
            <img
              src={anime.img}
              alt="op1"
              className=" w-[70px] h-[90px] pt-2  pl-3"
            />
            <div className=" pt-3">
              <Link to={`anime/${anime.id}`}>
                <h1 className="pl-4 text-white hover:text-[#24d4fc] text-[18px] capitalize">
                  {anime.name}
                </h1>
              </Link>
              <div className="pt-2 text-[10px]">
                <span className="text-white pl-4 text-[12px]">
                  {anime.type}
                </span>
                <span className="text-white pl-4 text-[12px]">
                  {anime.noOfEp}
                </span>
                <span className="text-white pl-4 text-[12px]">
                  {anime.time}
                </span>
              </div>
            </div>
            <hr className=" text-[#fdfdfd] opacity-0 h-4 w-[250px]  absolute left-4 bottom-0  " />
          </div>
        );
      })}
    </div>
  );
  
}

export default ListItem