import React, { useEffect, useState } from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link, useParams } from 'react-router-dom';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from '../../../../../api/axios';
import Reply from '../ReplyFrom/Reply';
import { SiGooglenews } from "react-icons/si";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/news/allNews').then((response) => setNews(response.data));
  }, []);

  const result = news.filter((data) => data?._id == id);
  console.log(result);

  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto md:mx-10">
        <div className=" col-span-3 mx-10 bg-white rounded-lg  pb-10    dark:bg-gray-800 dark:border-gray-700">


          <hr />
          <br />

          <a href="#">
            <img
              className="rounded-t-lg w-full mx-auto"
              src={result[0]?.image}
              alt=""
            />
          </a>
          <div className=" border-b-4 border-black pb-24">
            
          <p className=" mt-5">
              Publish Date:
              <span className="text-red-600 mr-5 md:mr-5"> {result[0]?.date}</span>
              <span> Publish Time:<span className="text-red-600"> {result[0]?.time}</span></span>
            </p>
           
            <h3 className="text-base md:text-4xl text-justify md:text-center mt-3   md:mt-5">{result[0]?.title}...</h3>
           
            <p className=" font-normal text-gray-700 dark:text-gray-400 text-justify md:pt-8 ">
              {result[0]?.description}{' '}
            </p>

            
          </div>

          <div className="grid md:grid-cols-2 mt-5 border-b-4 border-gray-400 pb-10 ">
            <div className="border-r-2 border-gray-400 md:mr-5">
              <h5 className="my-3  text-gray-400 hover:text-blue-600">
                PREVIOUS POST
              </h5>
              <h3 className="text-sm md:text-xl hover:opacity-70">{news[1]?.title}</h3>
            </div>
            <div>
              <h5 className="my-3 text-gray-400 hover:text-blue-600">
                NEXT POST
              </h5>
              <h3 className="text-sm md:text-xl hover:opacity-70">{news[2]?.title}</h3>
            </div>
          </div>

          {/* <div>
            <Reply />
          </div> */}
        </div>

        <div className="px-5  md:border-l-4 md:pl-8 pt-5">
          <p className="text-gray-400 hover:text-blue-600">LATEST ARTICLES</p>
          {news.map((data) => (
            
            <Link to={`/newsDetails/${data?._id}`}>
            
            <li className="text-sm p-2 my-3 border flex list-non hover:text-blue-800 hover:bg-gray-100 hover:opacity-90 dark:text-white">
            <SiGooglenews className='mr-2'/>{data?.title.slice(0,25)}....
            </li>
           
            </Link>
            
          ))}

          <div className="grid grid-cols-1 my-10">
            <h5 className="text-gray-400 my-5 border-t-4 hover:text-blue-600 pt-5">
              RECOMMENDED
            </h5>
            <div className=" ">
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
                  
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Autoplay]}
                className="swiper"
              >
                {news.map((n) => (
                  <SwiperSlide key={n._id}>
                    <div className="mb-10">
                      <div className="  cursor-pointer ">
                        <div>
                          <div>
                            <img
                              className="w-full h-32"
                              src={n?.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 p-4">
                        <p className="text-gray-600 flex items-center space-x-2">
                          <ImCalendar className="text-primary" />{' '}
                          <span>{n.date}</span>
                        </p>

                        <p>{n.description.slice(0, 20)} ...</p>
                        <Link to={`/newsDetails/${n._id}`}>
                          <button className="text-primary text-lg hover:text-black transition-all duration-500 border-b-2 border-b-primary">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="border-t-4 my-5 pt-5">
              <div className="mx-auto ">
                <h5 className="font-bolder text-xl md:text-2xl   hover:text-blue-600 py-5">
                  TOP News
                </h5>
                {/* <p className="text-left">
                  Art & Design{' '}
                  <span className="text-2xl font-bold text-gray-600 dark:text-white">Blog</span>{' '}
                  Village Business,{' '}
                  <span className="text-2xl font-bold text-gray-600 dark:text-white">
                    Village
                  </span>{' '}
                  Culture,Village{' '}
                  <span className="text-2xl font-bold text-gray-600 dark:text-white">
                    Health
                  </span>{' '}
                  Care, Degital Village Newspaper Obituaries Photos Politics
                  Post Science slider Sports Tech Today's Digital Village Videos
                  World
                </p> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

                  {
                    news.map(data=><div className='hover:overflow-hidden '><Link to={`/newsDetails/${data._id}`}>
                    <img className="w-full h-full  hover:scale-115 translate duration-700 ease-in-out  " src={data?.image} alt="" />
                    </Link></div>)
                  }
                  
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
