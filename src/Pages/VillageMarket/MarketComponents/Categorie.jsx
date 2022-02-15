import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Categorie = () => {
  return (
    <div className="my-10 px-12">
      <h6 className="inline border-b-2 border-primary">Shop by categories</h6>
      <Swiper
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 3,
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
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        loop={true}
        modules={[Autoplay]}
        className="swiper mt-7"
      >
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300">
            <img
              className="w-full h-40 "
              src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/w820bt%20black/edifier-w820bt-headphone-price-in-bd-black-500x500.jpg"
              alt=""
            />
            <p>Headphone</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300">
            <img
              className="w-full h-40 "
              src="https://primedia.primark.com/s/primark/210197261_ms?locale=en-*,sl-*,*&$product-thumbnail$"
              alt=""
            />
            <p>Fashion</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300">
            <img
              className="w-full h-40 "
              src="https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg"
              alt=""
            />
            <p>Watch</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300">
            <img
              className="w-full h-40 "
              src="https://modonali.com/public/uploads/all/1lifcjBuZvrHG717B8r0dxOQYDAGDvKlPIcCtmVo.jpg"
              alt=""
            />
            <p>Soap</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300">
            <img
              className="w-full h-40 "
              src="https://cdn.britannica.com/17/176517-050-6F2B774A/Pile-uncooked-rice-grains-Oryza-sativa.jpg"
              alt=""
            />
            <p>Rice</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300">
            <img
              className="w-full h-40 "
              src="https://5.imimg.com/data5/IR/QZ/ST/ANDROID-90279950/product-jpeg-500x500.jpg"
              alt=""
            />
            <p>Vegetable</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300">
            <img
              className="w-full h-40 "
              src="https://www.spicejungle.com/wp/spice/files/2015/10/how-to-properly-store-spices.jpg"
              alt=""
            />
            <p>Spices</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categorie;
