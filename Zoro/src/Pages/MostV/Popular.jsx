import React from 'react'
import { useEffect, useState } from 'react';
import Header from '../../components/NavBar/NavBa';
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Popular = () => {
    const [anime, setAnime] = useState(null)
    useEffect(() => {
const fetchAnime = async () => {
    const responce = await fetch('/api/anime')
    const json = await responce.json()

    if(responce.ok) {
        setAnime(json)
    }
}
fetchAnime()
    }, [])
     const cardStyle = {
       backgroundImage: "url(/img/isekaiking.jpg)",
     };
  return (
    <div className=" text-white">
      <Header />
      <div className=" flex space-x-3 ">
        {anime &&
          anime.map((anime) => (
            <div
              className=" w-[183px] h-[335px] mb-3 mt-4 md:w-[218px] md:h-[370px] relative card"
              key={anime._id}
            >
              {""}
              <Link to={`anime/${anime.id}`}>
                <div className=" card-pic">
                  <div className="image-container">
                    <img
                      src={anime.img}
                      alt={anime.name}
                      className="h-[320px] w-full"
                    />
                    <div className="overlay"></div>
                  </div>

                  <div className="  pl-2 pt-1">
                    <h1 className="text-white text-[16px] pb-2 capitalize">
                      {anime.name}
                    </h1>
                  </div>
                </div>
                <div
                  className=" text-white absolute top-0 left-0 flex flex-col pt-2 pl-3 pr-4  card-info pb-2 "
                  style={cardStyle}
                >
                  <h1 className=" text-[18px] capitalize pb-2 font-bold">
                    {anime.name}
                  </h1>
                  <span className="text-[#aaa]">
                    {anime.number_of_Episodes}
                  </span>
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
          ))}
      </div>
      <h1>Popular</h1>
    </div>
  );
}

export default Popular