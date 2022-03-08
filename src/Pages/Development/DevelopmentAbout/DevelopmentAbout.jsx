import React, { useEffect, useState } from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';



const DevelopmentAbout = () => {
  const [developments,setDevelopments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/development/allDevelopment')
      .then((res) => res.json())
      .then((data) => setDevelopments(data));
  }, []);
    return (
        <div className=' mx-auto md:mx-80'>

            <div className=' grid grid-cols-1 md:grid-cols-3 '>
                <div className='flex my-10 border-b-4 border-green-700 hover:border-red-700 cursor-wait sm:mx-8 mx-8 '>
                    <div><h2 className='text-green-600 md:mx-5 text-5xl hover:text-red-700'>1</h2></div>
                    <div>
                    <h3 className='hover:text-blue-600'>CLIENT REQUEST</h3>
                    <br />
                    <p className='text-justify pb-10 mx-5 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboro.</p>
                    </div>
                </div>

                <div className='flex my-10 border-b-4 border-yellow-400 hover:border-red-700 m-2 cursor-wait sm:mx-8 mx-8 '>
                    <div><h2 className='text-yellow-400 md:mx-5 text-5xl hover:text-red-700 '>2</h2></div>
                    <div>
                    <h3 className='hover:text-blue-600'>QUOTATION</h3>
                    <br />
                    <p className='text-justify pb-10 mx-5 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboro.</p>
                    </div>
                </div>

                <div className='flex my-10 border-b-4 border-blue-700 hover:border-red-700 cursor-wait sm:mx-8 mx-8 '>
                    <div><h2 className='text-blue-700  text-5xl hover:text-red-700 md:mx-5'>3</h2></div>
                    <div>
                    <h3 className='hover:text-blue-600'>PROJECT START</h3>
                    <br />
                    <p className='text-justify pb-10 mx-5 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboro.</p>
                    </div>
                </div>
                
            </div>

            <div className='grid grid-cols-1 md:grid-cols-5 my-12 py-6'>
                <img className='md:ml-8 md:w-48 border-r-4 md:p-5 m-2 border ' src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-3B.png" alt="" />
                <img className='md:ml-8 md:w-48 md:border-r-4 md:p-5 m-2 border ' src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-2.png" alt="" />
                <img className='md:ml-8 md:w-48 md:border-r-4 md:p-5 m-2 border ' src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-4B.png" alt="" />
                <img className='md:mr-8 md:w-48 md:border-r-4 md:p-5 m-2 border ' src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-5.png" alt="" />
                <img className=' md:w-48 md:p-5 md:m-2 border ' src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-1.png" alt="" />
               
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3  '>

                  <div  className=' border mx-auto md:ml-5  w-full md:w-96 h-full md:h-96 '>
                          <div className="  cursor-pointer ">
                          <div className="space-y-4 p-4 text-white bg-gray-800 py-20">
                          <h3 className="text-yellow-400  flex items-center space-x-2 px-5">
                          WE'RE HIRING</h3>
                          <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at eaque nihil impedit quasi, odio a animi minima exercitationem id debitis quas iste! </p>
                          <div className='px-5'>
                          <h5 className='text-yellow-400'>OPEN POSITIONS</h5>
                          <p>Metal roofing</p>
                          <p>Engeneering</p>
                          <p>Clients support</p>
                          </div>
                          <button className="text-white text-lg px-5 hover:text-white hover:rounded-xl transition-all duration-500 border-2 p-2 mx-5 border-white hover:bg-primary hover:border-0  ">
                          Contact us
                          </button> 
                          </div>
                      </div>
                      </div>

                      {/* About Slider */}
                      <div className='col-span-2'>
                  <div className=' grid grid-cols-2 '>
                  <div className='col-span-2'>
                  <Swiper className=""
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
                            loopFillGroupWithBlank={true}
                            modules={[Autoplay]}
                            className="swiper"
                          >
                            {developments.map((n) => (
                              <SwiperSlide key={n.id}>
                          <div  className=' border-2 '>
                          <div className="  cursor-pointer ">
                              
                              <div className=''>
                              <img className='w-full h-64 ' src={n?.img} alt="" />
                              </div>

                          </div>
                          <div className="space-y-4 p-4">
                          <h3 className='text-2xl'>{n?.title}</h3>
                          <p className='py-2'>{n.description.slice(0,70)} ...</p>
                          <Link to={`/newsDetails/${n.id}`}>
                          <button className="text-black text-lg hover:text-white hover:rounded-xl transition-all duration-500 border-0 p-2 bg-gray-200  hover:bg-primary hover:border-0  ">
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

                  
                       </div>

                       </div>
        
    );
};

export default DevelopmentAbout;