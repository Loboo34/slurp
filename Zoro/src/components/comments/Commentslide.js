import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Comment from "./Comment";

const Commentslide = () => {
  return (
    <div className=" pr-3">
     
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Comment />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Comment />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Commentslide;
