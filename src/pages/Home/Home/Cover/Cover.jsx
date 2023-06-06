import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from '../../../../assets/slide1.jpg'
import slide2 from '../../../../assets/slide1.jpg'
import slide3 from '../../../../assets/slide1.jpg'
import slide4 from '../../../../assets/slide1.jpg'
import slide5 from '../../../../assets/slide1.jpg'

// import required modules
import { Pagination, Navigation } from "swiper";

const Cover = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[500px] my-5 max-w-screen-xl mx-auto"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide2} alt="" />
        </SwiperSlide>
            
        <SwiperSlide>
            <img src={slide3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide4} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={slide5} alt="" />
        </SwiperSlide>
       
      </Swiper>
    );
};

export default Cover;