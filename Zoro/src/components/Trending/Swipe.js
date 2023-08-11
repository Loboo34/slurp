import React from "react";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AnimeData from "../../AnimeData"
const Swipe = () => {
const trunctedData = AnimeData.slice(0, 10)

  const swiperNavNextRef = useRef(null);
  const swiperNavPrevRef = useRef(null);
  return (
    <div className=" flex relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
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
            <div
              className=" bg-gradient-to-t from-black to-gray-600 w-[100px] md:w-[17.2rem] md:h-[340px] h-[200px] text-white relative "
              key={anime.key}
            >
              <div className="md:w-2/12 absolute">
                <h1 className="text-1xl absolute bottom-24 left-2 bg-red-200 rotate-90 w-[200px]">
                  {anime.title}
                </h1>
                <div className=" absolute bottom-4 text-center text-2xl text-orange-400 ml-3">
                  <p>{anime.Number}</p>
                </div>
              </div>
              <div className="md:w-10/12 h-[380px] md:absolute right-0">
                <h1 className=" absolute top-0 left-0 z-10  bg-white text-black p-1 opacity-60 md:hidden">
                  01
                </h1>
                <img
                  src={anime.img}
                  alt="c1"
                  className=" w-full h-[100%]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide> */}
        <div className=" flex-col  right-0 bottom-3 z-10 max-md:hidden ">
          <div
            className="swiperNext-btn mr-3 mb-3 rounded-xl text-white"
            ref={swiperNavNextRef}
          >
            <h1>next</h1>{" "}
          </div>
          <div
            className="swiperPrev-btn mr-3 mb-3 rounded-xl text-white"
            ref={swiperNavPrevRef}
          >
            <h2>prev</h2>{" "}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Swipe;
