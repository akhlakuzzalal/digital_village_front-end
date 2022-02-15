import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from './NewsCard/NewsCard';

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('./letestNewsFakeData.json')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="container my-20">
      <div className="md:mx-20 md:my-4">
        <h1 className="text-center heading_lg font-semibold">Latest News</h1>
        <div className="md:grid md:grid-cols-3 sm:grid-cols-1 gap-4 px-5 pt-10">
          <div className="md:col-span-2 sm:col-span-1 md:px-20">
            <Swiper
              slidesPerView={2}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
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
          <div className="p-4 flex flex-col justify-center">
            {news.slice(0, 3).map((n) => (
              <div
                key={n.id}
                className="flex news-card items-center bg-[#eafae7] rounded-lg shadow-lg mb-4 px-5 py-3"
              >
                <img className="w-3/6 h-fit" src={n.img} alt="" />
                <p className="ml-5">{n.description.slice(0, 100)}</p>
              </div>
            ))}
            <button>See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
