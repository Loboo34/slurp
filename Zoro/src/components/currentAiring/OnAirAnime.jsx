import React from "react";
import { useRef } from "react";
import AnimeData from "../../AnimeData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
// import SwiperButtons from './SwiperButtons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCalendar,
  faClock,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OnAirAnime = () => {
  const swiperNavNextRef = useRef(null);
  const swiperNavPrevRef = useRef(null);
  const truncatedData = AnimeData.slice(0, 10);
  return (
    <div className=" relative pt-0 -mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {truncatedData.map((anime) => (
          <SwiperSlide>
            <div className=" relative text-white " style={{}}>
              <div className=" w-full md:h-[520px] h-[250px]">
                {" "}
                <img
                  src={anime.bg}
                  alt="spider"
                  className=" relative w-[100%] slide-img"
                />
              </div>
              <div className=" absolute md:top-[30%] bottom-4 left-3 md:pl-10 ">
                <span className=" text-[10px] md:text-[14px] text-[#cae962]">
                  {anime.number} Spotlight
                </span>
                <h1 className=" text-[16px] md:text-[30px] pb-5 font-bold">
                  {anime.name}
                </h1>
                <div className=" pb-5 flex space-x-5  max-md:hidden">
                  <span className=" flex justify-center space-x-1 mt-1">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-black text-[12px] bg-white rounded-full pl-[5px] pr-[3px] pt-[2px] pb-[2px] "
                    />
                    <p className="-mt-[5px]">Tv</p>
                  </span>
                  <span className=" flex justify-center space-x-1 mt-1">
                    <FontAwesomeIcon icon={faClock} className="text-white " />
                    <p className="-mt-[5px]">@4m</p>
                  </span>
                  <span className=" flex justify-center space-x-2 mt-1">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-white "
                    />
                    <p className="-mt-[5px]">Apr 7,2018</p>
                  </span>
                  <span className=" bg-[#24d4fc] pl-[1px] pr-[1px] rounded-lg text-black">
                    Hd
                  </span>
                </div>
                <p className=" text-[14px] pb-8 max-md:hidden">
                  The day is as normal as it can be in high school as the
                  students peacefully go about <br />
                  their everyday activities until an unprecedented catastrophe
                  strikes the school, killing...
                </p>

                <button className=" bg-[#24d4fc] text-black text-[14px] md:text-[18px] pl-3 pr-3 pt-2 pb-2 rounded-[30px] mr-3">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-[#24d4fc] text-[12px] bg-black rounded-full pl-[5px] pr-[3px] pt-[2px] pb-[2px] mr-2 "
                  />
                  Watch Now
                </button>
                <Link to={`anime/${anime.id}`}>
                  <button className=" bg-[#4a4b51] text-[14px] md:text-[18px]  pl-4 pr-4 pt-2 pb-2 rounded-[30px]">
                    Detail
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="text-[15px]  rounded-full   pb-[1px] ml-2 "
                    />
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className=" flex-col absolute right-3 bottom-3 z-10 text-white max-md:hidden">
          <div
            className="swiperNext-btn pl-2 pt-2 rounded-lg bg-[#111] justify-center hover:bg-[#cae962] mb-2"
            ref={swiperNavNextRef}
          >
            <FontAwesomeIcon icon={faGreaterThan} className="text-white " />
          </div>
          <div
            className="swiperPrev-btn pl-2 pt-2 rounded-lg bg-[#111] hover:bg-[#cae962]"
            ref={swiperNavPrevRef}
          >
            <FontAwesomeIcon icon={faLessThan} className="text-white " />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default OnAirAnime;
