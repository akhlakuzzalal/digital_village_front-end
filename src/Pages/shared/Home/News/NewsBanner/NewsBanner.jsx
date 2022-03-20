import React, { useEffect, useState } from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link } from 'react-router-dom';
import News from '../News';
import NewsCard from '../NewsCard/NewsCard';

const news=[

{
  id:"2",
  title:"Learning News",
  description:"What do decisions made atLessons for At-Home Learning from MacArthur’s Digital Learning a summit in Glasgow mean for a woman in a village on the front line of climate",
  date:"10/02/2022",
  image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/e_learning_new_0.png?&size=770:433"
},
{
  id:"3",
  title:"Event News",
  description:"Antacid shoATC Group has a established involvement in the not-for-profit sectorws promise addressing Covid symptoms<",
  date:"14/02/2022",
  image:"https://www.elmens.com/wp-content/uploads/2020/04/charity.jpg"

},
{
  id:"4",
  title:"Donation News",
  description:"In 1978, alumni of the Yale Daily News founded Foundation the Donation",
  image:"https://media.istockphoto.com/photos/gathering-items-to-be-donated-to-charity-items-are-placed-on-a-futon-picture-id1339697803?b=1&k=20&m=1339697803&s=170667a&w=0&h=bYarLvJS8g6GLQcj9WHuCOAFr6ouMjgu7mTktgolsEc=",
  date:"15/02/2022"
},
{
  id:"5",
  title:"Medical News",
  description:"Antacid shows promise addressing Covid symptoms",
  image:"https://dt-media.dhakatribune.com/?width=400&height=280&cropratio=4:5&quality=50&image=en/uploads/2022/02/17/higher-estrogen-levels-linked-to-lower-covid-death-risk-antacid-shows-promise-addressing-symptoms.jpeg&anchor=top",
  date:"01/02/2022"
},

]


const NewsBanner = () => {
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:mx-5'>
                    <div className='  overflow-hidden relative' >
                        <img className=' absolute w-full h-96 hover:scale-150 cursor-pointer transition-all duration-700 ease-in-out ' src="https://images.unsplash.com/photo-1528726164383-33c4a223b78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                        <div className='absolute bottom-0'>
                        <p className=' mb-5 px-2 ml-6 font-bold  text-white text-left bg-green-600 w-36  '>Latest News</p>
                        <p className='  text-white font-bold text-xl md:text-2xl leading-none text-left px-3 '>What do decisions made at a summit in Glasgow mean for a woman in a village on the front line of climate change?
                        <br />
                        <span className='text-red-600 text-xl '>1,February,2022</span>
                        </p>
                        </div>
                     </div>


                <div className='grid grid-cols-1  md:grid-cols-2'>
            
                    <div className='overflow-hidden relative '>
                    {
                      news.map(data=><div><img className='absolute h-48 w-96 hover:scale-150 cursor-pointer transition-all  duration-500 mb-1 ease-in-out' alt="" />
                        
                        <div>
                        <p className='absolute bottom-16 px-2 ml-6 font-bold  text-white text-center  bg-purple-600 '>{data?.title}</p>
                        <p className='absolute bottom-2 text-white font-bold mx-2  text-left mt-4 '>{data?.description}</p>
                        </div>

                        </div>
                        )
                    }

                        
                    </div>

                    

                

                </div>
                


            </div>


            
        
        </div>
    );
};

export default NewsBanner;