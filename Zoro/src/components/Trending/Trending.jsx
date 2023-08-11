import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AnimeData from "../../AnimeData";

const Trending = () => {
  const trunctedData = AnimeData.slice(0, 10);

  const swiperNavNextRef = useRef(null);
  const swiperNavPrevRef = useRef(null);
  return (
    <div className=" bg-gray-900 pt-3 ">
      <h1 className=" textt-[16px] md:text-2xl text-[#24d4fc] font-semibold pb-4 pl-2">
        Trending
      </h1>
      <div className=" relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          // cssMode={true}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          // pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {trunctedData.map((anime) => (
            <SwiperSlide>
              {/* <div
                className=" bg-gradient-to-t from-black to-gray-600 w-[100px] md:w-[17.2rem] md:h-[350px] h-[200px] text-white relative "
                key={anime.key}
              >
              <div className="md:w-2/12 absolute left-0">
                  <h1 className=" rotate-90">
                    naruto
                  </h1>
                  <div className=" absolute bottom-1">
                    <p>{anime.Number}</p>
                  </div>
                </div>
                <div className=" absolute w-10/12 right-0 top-0">
                  <h1 className=" ">
                    01
                  </h1>
                  <Link to={`anime/${anime.id}`}>
                    <img
                      src={anime.img}
                      alt="c1"
                      className=" w-full md:h-[350px]"
                    />
                  </Link>
                </div>
              </div>  */}
              <div className=" flex relative md:w-[260px] md:h-[380px] bg-gradient-to-t from-black to-gray-600">
                <div className=" text-white w-2/12 relative ">
                  <p className=" -rotate-90 absolute bottom-[50px] left-1">
                    Naruto
                  </p>
                  <span className=" text-[20px] absolute bottom-1 left-5">
                    1
                  </span>
                </div>
                <div className=" w-10/12 ">
                  <Link to={`anime/${anime.id}`}>
                    <img src={anime.img} alt="c1" className=" w-[100%]  " />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" flex flex-col absolute right-0 top-0 bottom-3 z-10 max-md:hidden  bg-orange-500 h-full">
            {/* <div
              className="swiperNext-btn  mb-1 pb-10 rounded-xl text-white bg-white relative w-1/2"
              ref={swiperNavNextRef}
            >
              <span className=" w-10"><img src="/icons/arrow_icon.png" alt="next" className=" mr-10"/></span>{" "}
            </div>
            <div
              className="swiperPrev-btn mr-3 mb-3 rounded-xl text-white w-[400px] bg-black"
              ref={swiperNavPrevRef}
            >
              <span></span>{" "}
            </div> */}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
