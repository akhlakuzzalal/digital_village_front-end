import React from 'react';
// import required modules
import { Autoplay, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review/Review';

const Reviews = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-3/4  my-10"
      >
        <SwiperSlide className="flex justify-center">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Review />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Reviews;
