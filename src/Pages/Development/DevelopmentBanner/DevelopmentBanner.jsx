import React from 'react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import DevelopmentSlider from '../DevelopmentSlider/DevelopmentSlider';




const DevelopmentBanner = () => {
    return (
        <div>
            <div>
                <img src="https://www.rymanhealthcare.co.nz/hs-fs/hubfs/210901%20DI%20Website%20Banner.jpg?width=4000&height=1042&name=210901%20DI%20Website%20Banner.jpg" alt="" />

            </div>

            <DevelopmentSlider/>
            
             
        </div>
    );
};

export default DevelopmentBanner;