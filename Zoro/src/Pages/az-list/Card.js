import React from 'react'
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AnimeData from '../../AnimeData';

const Card = ({ targetType }) => {
//   const filteredData = SortData.filter((anime) => anime.price === targetType);
//   const sortedData = [...filteredData].sort((a, b) =>
//     a.title.localeCompare(b.title)
//   );
   const filteredData = AnimeData.filter((item) => item.type === targetType);
  const cardStyle = {
    backgroundImage: "url(/img/isekaiking.jpg)",
  };

  return (
    <div className="flex flex-wrap space-x-4">
      {filteredData.map((anime) => {
        return (
          <div
            className=" w-[183px] h-[335px] mb-3 mt-4 md:w-[218px] md:h-[370px] relative card"
            key={anime.id}
          >
            {""}
            <Link to={`anime/${anime.id}`}>
              <div className=" card-pic">
                <div className="image-container">
                  <img src={anime.img} alt="img" className="h-[320px] w-full" />
                  <div className="overlay"></div>
                </div>

                <div className="  pl-2 pt-1">
                  <h1 className="text-white text-[16px] pb-2 capitalize">
                    {anime.title}
                  </h1>
                </div>
              </div>
              <div
                className=" text-white absolute top-0 left-0 flex flex-col pt-2 pl-3 pr-4  card-info pb-2 "
                style={cardStyle}
              >
                <h1 className=" text-[18px] capitalize pb-2 font-bold">
                  {anime.title}
                </h1>
                <span className="text-[#aaa]">1 season</span>
                <span className="text-[#aaa]">24 episodes</span>
                <span className="text-[#aaa]">{anime.type}</span>
                <p className=" pt-3 pb-10 text-[16px]">
                  Idly indulging in baseless paranormal activities with the
                  OCcult club, high Schooler yuuji itadori spend his days at
                  either the clubroom or...
                </p>
                <div className="  space-x-5 text-[20px]">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className=" hover:text-[#cae962] "
                  />
                  <FontAwesomeIcon
                    icon={faAdd}
                    className="  hover:text-[#cae962]"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card