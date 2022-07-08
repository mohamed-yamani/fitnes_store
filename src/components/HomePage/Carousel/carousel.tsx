import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://wallpaperaccess.com/full/1087594.jpg"
            alt="https://wallpaperaccess.com/full/1087594.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://files.wallpaperpass.com/2019/10/fitness%20wallpaper%20198%20-%201920x1080.jpg"
            alt="https://files.wallpaperpass.com/2019/10/fitness%20wallpaper%20198%20-%201920x1080.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-01-1600-x-843.jpg"
            alt="http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-01-1600-x-843.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
