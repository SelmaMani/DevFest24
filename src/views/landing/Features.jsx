import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css"; // Import Swiper styles

import f1 from "../../assets/images/features/Middlewarecard.svg";
import f2 from "../../assets/images/features/Buildscard.svg";
import f3 from "../../assets/images/features/xcel.svg";
import f4 from "../../assets/images/features/Automationcard.svg";

import mini1 from "../../assets/images/features/card1.svg";
import mini2 from "../../assets/images/features/card2.svg";
import mini3 from "../../assets/images/features/card3.svg";
import mini4 from "../../assets/images/features/card4.svg";

import f from "../../assets/images/features/features.svg";

import 'swiper/css';
import 'swiper/css/pagination';


import { EffectCoverflow } from 'swiper/modules';

function Features() 
{
  return (
    <div className="w-full flex bg-[#F5F5F5] flex-col justify-center items-center gap-10  h-screen">
        <p className=" text-[48px] text-[#5E35B1] text-center font-bold font-fredoka ">
        Key Features 
        </p>
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
        grabCursor={true}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, EffectCoverflow]}
        className="w-[95%] h-fit py-12 md:hidden"
      >
        <SwiperSlide className="flex justify-center min-w-fit min-h-fit items-center">
          <img
            src={mini1}
            alt="Middleware card"
            className="h-[400px] w-[350px] "
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center min-w-fit min-h-fit items-center">
          <img
            src={mini2}
            alt="Builds card"
            className="h-[400px] w-[350px] "
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center min-w-fit min-h-fit items-center">
          <img
            src={mini3}
            alt="Xcel card"
            className="h-[400px] w-[350px] "
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center min-w-fit min-h-fit items-center">
          <img
            src={mini4}
            alt="Automation card"
            className="h-[400px] w-[350px] "
          />
        </SwiperSlide>
      </Swiper>
      <div className=" hidden md:flex  gap-9 flex-col h-[80vh] justify-center items-center">
        <div className=" flex justify-center gap-5 h-[40%]">
            <img src={f1} alt="" className=" " />
            <img src={f2} alt="" />
        </div>
        
       <div className=" flex justify-center gap-5 h-[40%]">
            <img src={f3} alt="" />
            <img src={f4} alt="" />
       </div>
      </div>
      <img src={f} alt="" className=" md:absolute  md:right-[-40px]" />
    </div>
  );
}

export default Features;
