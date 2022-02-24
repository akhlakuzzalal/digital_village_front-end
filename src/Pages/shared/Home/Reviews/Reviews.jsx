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
          
          <h1 className=" text-5xl md:text-7xl hover:border-y-8  pb-4 text-center mx-auto font-bold py-2 my-8 text-blue-600 hover:text-purple-600 " >Digital Village All Review</h1>
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
        className="mySwiper w-full bg-slate-50 pb-36  my-10"
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
