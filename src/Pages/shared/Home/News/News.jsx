import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from './NewsCard/NewsCard';
import NewsSideCard from './NewsSideCard/NewsSideCard';

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('./letestNewsFakeData.json')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="container my-20 mx-auto px-4">
      <div className="flex md:my-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
          <div className="lg:col-span-2 ">
            <Swiper
              // slidesPerView={2}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              className="swiper"
            >
              {news.map((n) => (
                <SwiperSlide key={n.id}>
                  <NewsCard n={n} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* news sidebar */}
          <div className="hidden  lg:flex flex-col justify-center">
            {news.slice(0, 3).map((n) => (
              <NewsSideCard key={n.id} n={n} />
            ))}
            <button className="text-primary text-lg hover:text-black transition-all duration-500 w-fit mx-auto">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;