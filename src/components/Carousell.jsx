import React from "react";
import { Navigation, Pagination, Scrollbar, Thumbs } from "swiper";
import s from "./css/Carousell.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import henry from './img/titulo.png'

function Carousell() {

 

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar,Thumbs]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={s.caro}
    >
        <SwiperSlide>
        {<img src={henry} alt="certificado" className={s.img} />}
      </SwiperSlide>
     
  
     
      .............
    </Swiper>
  );
}

export default Carousell;
