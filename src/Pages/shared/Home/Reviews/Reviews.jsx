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
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full  my-10"
      >
        <SwiperSlide className="flex justify-center p-10">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-10">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-10">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-10">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-10">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-10">
          <Review />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center p-10">
          <Review />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Reviews;
