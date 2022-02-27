import React, { useEffect, useState } from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link } from 'react-router-dom';
import News from '../News';
import NewsCard from '../NewsCard/NewsCard';


const news=[
    {
      "id": 1,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L24sBw67CQVOWMpeCbAsTmTqShlhy1_06fxatZntRzPSCaudL2wnHPnlMPR3L4RZkpw&usqp=CAU",
      "date": "20 September 2022"
    },
    {
      "id": 2,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://previews.123rf.com/images/onuchcha/onuchcha2005/onuchcha200500465/146146161-bangladesch-%E2%80%93-6-januar-2014-an-einem-nebligen-wintermorgen-fahren-einige-dorfbewohner-mit-dem-fahrra.jpg",
      "date": "21 September 2022"
    },
    {
      "id": 3,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXayQ40WNOruEylNBA20GVQPfaTiq-yxb3g&usqp=CAU",
      "date": "22 September 2022"
    },
    {
      "id": 4,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dgP57IjzLAUnDQNnTvBQPpDBTmYBYZZvxpfsm_LFnX3M--XuWW8421esyzdjulhQeMg&usqp=CAU",
      "date": "23 September 2022"
    },
    {
      "id": 5,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2m2Jb102yIF6TIcw_3R0b-5ja4u5cbUUD2GlVk0rXOHv8FAaVSyY3TgNgIGELMAGDRCs&usqp=CAU",
      "date": "24 September 2022"
    },
    {
      "id": 6,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8T-RTRXS_OdflpW5e6nkd8uyzZ-kNEcNQ2A&usqp=CAU",
      "date": "25 September 2022"
    },
    {
      "id": 7,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqzo96M7DwTEJvZbapZmOYotPjwKFuhQ8-g&usqp=CAU",
      "date": "25 September 2022"
    },
    {
      "id": 8,
      "title": "Lorem, ipsum.",
      "description": "At the 1991 census, there were 68,038 villages in Bangladesh with an average of 232 households.[1] The rural areas of Bangladesh (i.e. villages) are characterized by higher growth rate of population and lower literacy rate compared to urban areas - but these gaps are decreasing",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNK_jNJP4oCgTcQiyLLJBagWHofdc16c6k2sWHHX8PYv_6J0LK0qIjdGKQwdiDaVC__AA&usqp=CAU",
      "date": "26 September 2022"
    }
  ]

const NewsBanner = () => {

    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-1 mx-5'>
                <div className='col-span-2 scale-105 transition duration-700  ease-in-out'>
                    <div className='hover:scale-105 transition duration-700 ease-in-out mx-5' >
                        <p className='absolute bottom-28 px-2 ml-6 font-bold  text-white text-left bg-green-600 '>Latest News</p>
                        <p className='absolute bottom-2 text-white font-bold text-xl md:text-2xl leading-none text-left px-3 '>What do decisions made at a summit in Glasgow mean for a woman in a village on the front line of climate change?
                        <br />
                        <span className='text-red-600 text-xl'>1,February,2022</span>
                        </p>

                        <img className='w-full h-96 ' src="https://images.unsplash.com/photo-1528726164383-33c4a223b78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>

                    
                   
                </div>
                <div className=' '>
                    <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    
                    <p className='absolute bottom-16 px-2 ml-6 font-bold  text-white text-center  bg-purple-600 '>Learning News</p>
                        <p className='absolute bottom-2 text-white font-bold  text-center mt-4 '>Lessons for At-Home Learning from MacArthur’s Digital Learning</p>

                        <img className=' h-48 w-96' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/e_learning_new_0.png?HdQc4PgJXVKd6bGfZsdga3gn0GWvcPMv&size=770:433" alt="" />
                        
                    </div>

                    {/* <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    <p className=' absolute mt-20 py-3 px-2 text-white text-center bg-red-400 '>Medical News</p>
                        <img className='mt-1 h-48 w-96' src="https://medicsmarketing.com/wp-content/uploads/2019/03/Medical_writing.jpg" alt="" />
                    </div> */}
                   <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    
                    <p className='absolute bottom-16 px-2 ml-6 font-bold  text-white text-center  bg-red-400 '>Medical News</p>
                        <p className='absolute bottom-2 text-white font-bold  text-center mt-4 '>Antacid shows promise addressing Covid symptoms</p>

                        <img className=' h-48 w-96' src="https://dt-media.dhakatribune.com/?width=400&height=280&cropratio=4:5&quality=50&image=en/uploads/2022/02/17/higher-estrogen-levels-linked-to-lower-covid-death-risk-antacid-shows-promise-addressing-symptoms.jpeg&anchor=top" alt="" />
                        
                    </div>

                </div>
                <div className=''>
                    {/* <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    <p className=' absolute mt-20 py-3 px-2 text-black text-center bg-lime-400'>Events News</p>

                        <img className=' h-48 w-96' src="https://www.elmens.com/wp-content/uploads/2020/04/charity.jpg" alt="" />
                        
                    </div> */}


                  <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    
                    <p className='absolute bottom-16 px-2 ml-6 font-bold  text-white text-center  bg-green-600 '>Events News</p>
                        <p className='absolute bottom-1 text-white font-bold  text-center mt-4 '>ATC Group has a established involvement in the not-for-profit sector</p>

                        <img className=' h-48 w-96' src="https://www.elmens.com/wp-content/uploads/2020/04/charity.jpg" alt="" />
                        
                    </div>

                    <div className='hover:scale-105 transition duration-700 ease-in-out '>
                    {/* <p className=' absolute mt-20 py-3 px-2 text-white text-center bg-blue-600 '>Donation News</p>
                        <img className='mt- h-48 w-96' src="https://media.istockphoto.com/photos/gathering-items-to-be-donated-to-charity-items-are-placed-on-a-futon-picture-id1339697803?b=1&k=20&m=1339697803&s=170667a&w=0&h=bYarLvJS8g6GLQcj9WHuCOAFr6ouMjgu7mTktgolsEc=" alt="" /> */}

                       <p className='absolute bottom-20 px-2 ml-6 font-bold  text-white   bg-blue-600 '>Donation News</p>
                        <p className='absolute bottom-1 text-white line-height-0 font-bold  text-justify px-3 mt-4 '> In 1978, alumni of the Yale Daily News founded Foundation the Donation
                        <br />
                        <span className='text-red-600'>1,February,2022</span></p>


                        <img className=' h-48 w-96' src="https://media.istockphoto.com/photos/gathering-items-to-be-donated-to-charity-items-are-placed-on-a-futon-picture-id1339697803?b=1&k=20&m=1339697803&s=170667a&w=0&h=bYarLvJS8g6GLQcj9WHuCOAFr6ouMjgu7mTktgolsEc=" alt="" />
                    </div>

                </div>


            </div>


            
        
        </div>
    );
};

export default NewsBanner;