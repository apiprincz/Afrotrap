import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Styles from "../styles/Slider.module.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      loop={{ clickable: true }}
      tag="section"
      effect="coverflow"
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      wrappedTag="ul"
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide
        style={{
          backgroundImage: "url(/AfroSlide1a.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: "url(/AfroSlide2b.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: "url(/AfroSlide1b.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: "url(/AfroSlide2a.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: "url(/AfroSlide1a.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        {/* <img src="/AfroSlide1a.png" alt="BannerOne" /> */}
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src="/AfroSlide1a.png" alt="BannerTwo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/AfroSlide1a.png" alt="BannerThree" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/AfroSlide1a.png" alt="BannerFour" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;
