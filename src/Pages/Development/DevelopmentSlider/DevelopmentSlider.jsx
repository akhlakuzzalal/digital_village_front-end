import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

const developments = [
  {
    id: 1,
    title: 'THE LIGHTWIRE | TEMPLATE-1',
    description:
      'At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing',
    img: 'http://lightwire.webps.info/assets/themes/lightwire/images/hd-5.jpg',
    date: '20 September 2022',
  },
  {
    id: 2,
    title: 'INTERIORS | TEMPLATE-2.',
    description:
      'At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing',
    img: 'http://lightwire.webps.info/assets/themes/lightwire/images/hd-7.jpg',
    date: '21 September 2022',
  },
  {
    id: 3,
    title: 'CONSULTING | TEMPLATE-1.',
    description:
      'At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing',
    img: 'http://lightwire.webps.info/assets/themes/lightwire/images/hd-15.jpg',
    date: '22 September 2022',
  },
  {
    id: 4,
    title: 'TECHNOLOGY | TEMPLATE-1',
    description:
      'At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing',
    img: 'http://lightwire.webps.info/assets/components/phpthumbof/cache/image-17.6f48a82beff109794692619590fda6592.jpg',
    date: '23 September 2022',
  },
  {
    id: 5,
    title: 'NEW YORK THEATRE | TEMPLATE-1',
    description:
      'At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing',
    img: 'http://lightwire.webps.info/assets/components/phpthumbof/cache/image-11.6f48a82beff109794692619590fda6592.jpg',
    date: '24 September 2022',
  },
];

const DevelopmentSlider = ({ n }) => {
  return (
    <div className="mt-5 md:-mt-24">
      <div className="grid grid-cols-2 md:grid-cols-3 mx-0 md:mx-80 ">
        <div className="col-span-2  ">
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
            loopFillGroupWithBlank={false}
            modules={[Autoplay]}
            className="swiper"
          >
            {developments?.map((n) => (
              <SwiperSlide key={n.id}>
                <div className=" w-full md:w-100 shadow-2xl">
                  <div className="  cursor-pointer ">
                    <div className="">
                      <img className="w-full h-64 " src={n?.img} alt="" />
                    </div>
                  </div>
                  <div className="space-y-4 p-4">
                    <p>{n.description.slice(0, 100)} ...</p>
                    <Link to={`/newsDetails/${n.id}`}>
                      <button className="text-primary text-lg hover:text-white hover:rounded-xl transition-all duration-500 border-0 p-2 bg-gray-200 my-2  hover:bg-primary hover:border-0  ">
                        View Service...
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <div className="mb-10 border w-auto md:w-96 ml-0 md:ml-5 p- ">
            <div className="  cursor-pointer  "></div>
            <div className="space-y-4 p-4 mt-2 md:mt-0 text-white bg-gray-800 h-full py-10 shadow-2xl ">
              <h3 className="text-yellow-400 text-xl md:text-2xl  flex items-center  space-x-4 md:px-5">
                FEATURED WEEK PROJECTS
              </h3>

              <p className=" text-justify">
                The project aims to develop and design community based
                integrated sustainable development program for villages , with
                improved health,nutrition, sanitation and livelihood. It
                includes income generating activities,safe drinking water, and
                protection of the village environment.{' '}
              </p>

              <div className="grid grid-cols-2 ">
                <div className="flex">
                  <img
                    className="w-10 h-10  my-auto mr-5"
                    src="https://icon2.cleanpng.com/20180426/rvq/kisspng-computer-icons-download-setting-icon-5ae152c8c78b41.3187121115247162328173.jpg"
                    alt=""
                  />

                  <div>
                    <h3>
                      110 <br />
                      <span className="text-sm text-yellow-400">
                        Project
                      </span>{' '}
                    </h3>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="w-10 h-10 mr-5 my-auto"
                    src="https://www.pinclipart.com/picdir/middle/542-5427453_client-icon-clipart-clipart-royalty-free-library-client.png"
                    alt=""
                  />

                  <div>
                    <h3>
                      90 <br />
                      <span className="text-sm text-yellow-400 ">
                        Clients
                      </span>{' '}
                    </h3>
                  </div>
                </div>
              </div>

              <button className="text-yellow-400 text-lg mt-24 px-5 mx-0 md:mx-5 hover:text-white hover:rounded-xl transition-all duration-500 border-2  p-2 border-white hover:bg-primary hover:border-  ">
                More Project ...
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:mx-80 my-10">
        <div className="md:col-span-2 md:mr-5 mx-0">
          <h3 className="my-2">DEVELOPMENT TRANSFORMATIONS</h3>
          <p className="py-5">
            A large improvement in rural connectivity such as through
            technological infrastructure has contributed to increased mobility
            dynamics from, to and within the regions. Migration cannot be
            considered a unidirectional movement from rural areas to cities. It
            has instead been shaped by a chain of connections in which rural and
            urban livelihoods interact on a movement.
          </p>
        </div>

        <div className="md:ml-5 mx:0  md:mx-2 ">
          <ul>
            <li>Development of leadership </li>
            <li>intensification of farm and non-farm activities</li>
            <li>Annual comprehensive development plan</li>
            <li>Development of rural industries</li>
            <li>Test drive</li>
            <li>Undertaking community based health</li>
            <li>education , motivation and training </li>
          </ul>
        </div>
      </div>

      <div className="md:mx-80 grid grid-cols-1 md:grid-cols-2 my-auto md:my-24 ">
        <h3>LAST PROJECTS</h3>
        <p className="md:border-l-4 md:pl-5">
          Large-scale construction TO Organize the villagers into a broad-based
          village cooperative with a number of functional groups (landless and
          small, medium and large farmers, women, youth and other occupational
          group) and involve them in credit and marketing programme.
        </p>
      </div>

      {/* Project Slider */}

      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-80">
        <div className="md:col-span-3">
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={false}
            modules={[Autoplay]}
            className="swiper"
          >
            {developments.map((n) => (
              <SwiperSlide key={n.id}>
                <div className="  rounded">
                  <div className="  cursor-pointer ">
                    <div className="">
                      <img className="w-full md:h-64 " src={n?.img} alt="" />
                    </div>
                  </div>
                  <div className="space-y-4 p-4">
                    <h3>{n?.title}</h3>
                    <p className="py-5">{n.description.slice(0, 150)} ...</p>
                    <Link to={`/newsDetails/${n.id}`}>
                      <button className="text-black text-lg hover:text-white hover:rounded-xl transition-all duration-500 border-0 bg-gray-200 p-2 border-blue-600 hover:bg-primary hover:border-0  ">
                        View Project...
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSlider;
