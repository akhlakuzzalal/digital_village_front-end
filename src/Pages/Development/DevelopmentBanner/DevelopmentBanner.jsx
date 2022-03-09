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
                <img className='w-full' src="https://www.zutec.com/wp-content/uploads/2021/05/cta-bg-min-scaled.jpg" alt="" />

            </div>

            <DevelopmentSlider/>
            
             
        </div>
    );
};

export default DevelopmentBanner;