import React from "react";
import { useParams } from "react-router-dom";
import AnimeData from "../../AnimeData";

import MoreAnime from "./MoreAnime";
import ProInfo from "./ProInfo";
import MostPopulor from "./MostPopulor";
import RelatedAnime from "./RelatedAnime";

const Anime = () => {
const { id } = useParams();
const anime = AnimeData.find((anime) => anime.id === parseInt(id));

  if (!anime) {
    return <div>not found</div>;
  }
  return (
    <div>
     
      <div className="info">
        <div className=" flex w-full h-[700px] bg-[#1d1c1ce0] pt-10">
          <div className=" w-3/12">
            <img src={anime.img} alt="img" className=" w-[200px] pt-20 ml-14" />
            {/* <span>Watch2gether</span> */}
          </div>
          <div className=" w-6/12 pt-16 -ml-8">
            <div className=" pb-3">
              <span className=" text-[13px] text-white">Home</span>
              <span className=" text-[13px] text-white p-2">.</span>
              <span className=" text-[13px] text-white p-2">{anime.type}</span>
              <span className=" text-[13px] text-white p-2">.</span>
              <span className=" text-[13px] text-white p-2">{anime.title}</span>
            </div>
            <h1 className=" text-white text-[30px] pb-6">{anime.title}</h1>
            <div className=" pb-8">
              <span className=" text-[13px] text-white p-2">pg</span>
              <span className=" text-[13px] text-white p-2">HD</span>
              <span className=" text-[13px] text-white p-2">cc</span>
              <span className=" text-[13px] text-white p-2">.</span>
              <span className=" text-[13px] text-white p-2">{anime.type}</span>
              <span className=" text-[13px] text-white p-2">.</span>
              <span className=" text-[13px] text-white p-2">{anime.time}</span>
            </div>
            <button className=" text-[black] text-[16px] bg-[#cae962]  border-1 rounded-3xl pl-[20px] pr-[20px] mr-3 pt-1 pb-1">
              Watch now
            </button>
            <button className=" text-[black] text-[16px] bg-[white] border-1 rounded-3xl pl-[20px] pr-[20px] mr-[30px] pt-1 pb-1">
              Watch now
            </button>
            <div className=" text-[13px] text-white pt-10  pr-24">
              <p className=" pb-3">
                Idly indulging in baseless paranormal activities with the OCcult
                club, high Schooler yuuji itadori spend his days at either the
                clubroom or the hospital, where he visits his bedridden
                grandfather. However, this leisurely lifestyle soon takes a turn
                for the strange when he unkowingly encounter a cursed item.
                Triggering a chin of supernatural occurences, Yuuji finds
                himself suddenly thrust into the world of curse-dreadful beings
                formed from human malice and negativity--after swallowing the
                said item, revealed to be a finger belonging to the demon Sukuna
                Ryoumen, the "king of Curses" Yuuji experience first-hand the
                threat these curse pose to society as he discovers his own new
                found powers. Introdused to the Tokyo Metropolitan Jujutsu
                Technical High School, he beings to walk down a path from which
                he cannot return--the path of a jujutsu sorcerer. [Written by
                MAL Rewrite]
              </p>
              <p>
                Zoro is the best site to watch Jujutsu Kaisen (TV) SUB online,
                or you can even watch Jujutsu Kaisen (TV) DUB in HD quality. You
                can also find MAPPA anime on Zoro website.{" "}
              </p>
            </div>
          </div>
          <div className=" w-3/12  border ml-10 ">
            <ul className=" text-white pt-36 pl-10 text-[13px] leading-[1.4em]">
              <li className=" pb-2">
                <span className=" mb-[20px] mr-[5px]">Japanese:</span>
                <span className=" mb-[20px] mr-[5px]">呪術廻戦</span>
              </li>
              <li className=" pb-2">
                <span className=" mb-[10px] mr-[5px]">Synonyms: </span>
                <span>Socery fight</span>
              </li>
              <li className=" pb-2">
                <span className=" mb-[10px] mr-[5px]">Aired: </span>
                <span>{anime.date}</span>
              </li>
              <li className=" pb-2">
                <span className=" mb-[10px] mr-[5px]">Premiered: </span>
                <span>Winter 2020</span>
              </li>
              <li className=" pb-2">
                <span className=" mb-[10px] mr-[5px]">Duration: </span>
                <span>{anime.time}</span>
              </li>
              <li className=" pb-2">
                <span className=" mb-[10px] mr-[5px]">Status: </span>
                <span>{anime.status}</span>
              </li>
              <li className=" pb-2">
                <span className=" mb-[10px] mr-[5px]">MAL Score: </span>
                <span>8.14</span>
              </li>
              <hr className=" text-[white] w-[250px] opacity-30" />
              <div className=" text-white text-[13px] pt-4 pb-4">
                <span className=" mr-[5px]">Gener: </span>
                <button className="   pr-2 pl-2 mr-2  text-white hover:text-[#cae962] hover:bg-[#414248] rounded-3xl border relative text-[12px]">
                  Action
                </button>
                <button className="   pr-2 pl-2 mr-2 text-white hover:text-[#cae962] hover:bg-[#414248] rounded-3xl border relative text-[12px]">
                  Action
                </button>
                <br />
                <button className="   pr-2 pl-2 mr-2 mt-2 text-white hover:text-[#cae962] hover:bg-[#414248] rounded-3xl border relative text-[12px]">
                  Action
                </button>
                <button className="   pr-2 pl-2 mr-2 text-white hover:text-[#cae962] hover:bg-[#414248] rounded-3xl border relative text-[12px]">
                  Action
                </button>
                <button className="   pr-2 pl-2 mr-2 mt-2 text-white hover:text-[#cae962] hover:bg-[#414248] rounded-3xl border relative text-[12px]">
                  Action
                </button>
              </div>
              <hr className=" text-[white] w-[250px] opacity-30" />
              <li className=" pb-2 pt-2">
                <span>Studios: </span>
                <span>MAPPA</span>
              </li>
              <li>
                <span>Producers: </span>
                <span className=" hover:text-[#cae962] ">TOHO animation, </span>
                <span className=" hover:text-[#cae962] ">Shueisha, </span>
                <span className=" hover:text-[#cae962] ">dougout, </span>
                <span className=" hover:text-[#cae962] ">MAPPA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex pb-20 pt-5">
        <div className="w-9/12  pt-6">
          <ProInfo />
          <MoreAnime />
        </div>
        <div className=" w-3/12 pt-6 pl-3">
          <RelatedAnime />
          <MostPopulor />
        </div>
      </div>
    </div>
  );
};

export default Anime;
