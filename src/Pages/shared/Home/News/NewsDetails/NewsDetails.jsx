import { lightFormat } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from '../NewsCard/NewsCard';
import Reply from '../ReplyFrom/Reply';



const news=[
  {
    "id": 1,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF.",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L24sBw67CQVOWMpeCbAsTmTqShlhy1_06fxatZntRzPSCaudL2wnHPnlMPR3L4RZkpw&usqp=CAU",
    "date": "20 September 2022"
  },
  {
    "id": 2,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://previews.123rf.com/images/onuchcha/onuchcha2005/onuchcha200500465/146146161-bangladesch-%E2%80%93-6-januar-2014-an-einem-nebligen-wintermorgen-fahren-einige-dorfbewohner-mit-dem-fahrra.jpg",
    "date": "21 September 2022"
  },
  {
    "id": 3,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXayQ40WNOruEylNBA20GVQPfaTiq-yxb3g&usqp=CAU",
    "date": "22 September 2022"
  },
  {
    "id": 4,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dgP57IjzLAUnDQNnTvBQPpDBTmYBYZZvxpfsm_LFnX3M--XuWW8421esyzdjulhQeMg&usqp=CAU",
    "date": "23 September 2022"
  },
  {
    "id": 5,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2m2Jb102yIF6TIcw_3R0b-5ja4u5cbUUD2GlVk0rXOHv8FAaVSyY3TgNgIGELMAGDRCs&usqp=CAU",
    "date": "24 September 2022"
  },
  {
    "id": 6,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8T-RTRXS_OdflpW5e6nkd8uyzZ-kNEcNQ2A&usqp=CAU",
    "date": "25 September 2022"
  },
  {
    "id": 7,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqzo96M7DwTEJvZbapZmOYotPjwKFuhQ8-g&usqp=CAU",
    "date": "25 September 2022"
  },
  {
    "id": 8,
    "title": "THE MOST FASCINATING SHOW? THE MET TRYING TO FIX ITSELF",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNK_jNJP4oCgTcQiyLLJBagWHofdc16c6k2sWHHX8PYv_6J0LK0qIjdGKQwdiDaVC__AA&usqp=CAU",
    "date": "26 September 2022"
  }
]



//https://pacific-journey-19792.herokuapp.com/specific?item=breakFast
const NewsDetails = () => {
  const {id}=useParams();
  // const [news,setNews]=useState([]);
  // useEffect(() => {
  //   fetch('./letestNewsFakeData.json')
  //     .then((res) => res.json())
  //     .then((data) => setNews(data));
  // }, []);
  // console.log(news)

const result=news.filter(data=>data?.id==id)
console.log(result)

  
  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
     <div className='grid grid-cols-1 md:grid-cols-4 mx-auto md:mx-10'>
        
      <div className=" col-span-3 mx-10 bg-white rounded-lg  pb-10    dark:bg-gray-800 dark:border-gray-700">
        <h3 className=' py-5'>{result[0]?.title}</h3>
        <span className='text-red-600 mb-5'> {result[0]?.date} <span className='text-gray-400 mx-1'>by digital village</span></span>
        <hr />
        <br />
       
    <a href="#">
        <img className="rounded-t-lg w-full mx-auto" src={result[0]?.img} alt="" />
    </a>
    <div className=" border-b-4 border-black pb-24">
        <a href="#">
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{result[0]?.title}</h5> */}
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify mx-10 mt-5">{result[0]?.description}  </p>
        
        {/* <p className='mx-10'>Publish Date:<span className='text-red-600'> {result[0]?.date}</span></p> */}
    </div>

    <div className='grid md:grid-cols-2 mt-5 border-b-4 border-gray-400 pb-10 '>
     
        <div className='border-r-2 border-gray-400 mr-5'>
          <h5 className='my-3 text-gray-400 hover:text-blue-600'>PREVIOUS POST</h5>
          <h3 className='text-xl hover:opacity-70'>{news[3]?.title}</h3>
        </div>
        <div>
          <h5 className='my-3 text-gray-400 hover:text-blue-600'>NEXT POST</h5>
          <h3 className='text-xl hover:opacity-70'>{news[3]?.title}</h3>
        </div>
        
    </div>

    <div>
    <h3 className='my-10 text-white bg-red-600 w-60 p-1'>Leave a Reply</h3>
    <Reply/>
    </div>


    

</div>



<div className='mx-5 border-l-4 pl-8 pt-5'>
  
    <p className='text-gray-400 hover:text-blue-600'>LATEST ARTICLES</p>
    {news.map(data=><li className='text-sm p-2 my-3 border hover:bg-gray-100 hover:opacity-90'>The Impact of Family Structure on the Health of Children: Effects of Divorce</li>)}


   <div className='grid grid-cols-1 my-10'>
     <h5 className='text-gray-400 my-5 border-t-4 hover:text-blue-600 pt-5'>RECOMMENDED</h5>
   <div className=' '>
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
                  <div  className='mb-10'>
                  <div className="  cursor-pointer ">
        <div
         
        >
          <div>
            <img className='w-full h-32' src={n?.img} alt="" />
          </div>

          
        </div>
      </div>
      <div className="space-y-4 p-4">
        <p className="text-gray-600 flex items-center space-x-2">
          <ImCalendar className="text-primary" /> <span>{n.date}</span>
        </p>
        
        <p>{n.description.slice(0,20)} ...</p>
        <Link to={`/newsDetails/${n.id}`}>
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
    <div className='border-t-4 my-5 pt-5'>
      <div className='mx-auto md:mx-24'>
        <h5 className='text-gray-400   hover:text-blue-600 py-5'>TOP SEARCHES</h5>
        <p className='text-left'>Art & Design <span className='text-2xl font-bold text-gray-600'>Blog</span> Village Business, <span className='text-2xl font-bold text-gray-600'>Village</span> Culture,Village <span className='text-2xl font-bold text-gray-600'>Health</span>  Care, Degital Village Newspaper Obituaries Photos Politics Post Science slider Sports Tech Today's Digital Village Videos World</p>
      </div>
    </div>
   </div>
    
  
  


</div>

     </div>



    </div>
  );
};

export default NewsDetails;
