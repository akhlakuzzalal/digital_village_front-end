import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsBanner from '../shared/Home/News/NewsBanner/NewsBanner';



const allNews=[
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



//https://pacific-journey-19792.herokuapp.com/specific?item=breakFast
const AllNews = () => {
  const {id}=useParams();
  const [news,setNews]=useState([]);
  useEffect(() => {
    fetch('./letestNewsFakeData.json')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news)

const result=news.filter(data=>data?.id===id)
console.log(result)

  
  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className=" mx-10 bg-white rounded-lg border hover:bg-gray-100 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg w-full mx-auto" src={result[0]?.img} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{result[0]?.title} id: {id}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{result[0]?.description}  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, incidunt. Fugiat officia beatae praesentium ab consequuntur explicabo facere, rerum perspiciatis omnis mollitia commodi, eum ipsam quia exercitationem enim doloremque, perferendis harum saepe corporis ullam necessitatibus quibusdam! Maiores ipsam neque id repellat necessitatibus est esse ipsa reprehenderit cumque magnam earum pariatur quidem illum accusantium repellendus, tenetur dicta accusamus sed eius amet ducimus expedita. Quis dolores, nam optio dicta nisi a eaque exercitationem! Adipisci, iure eius! Vero ad voluptatem tenetur tempore! Maiores rerum quae tempora eum suscipit, sit eius? Tenetur minima natus non perferendis reiciendis maiores eveniet consequatur! Consectetur veritatis quasi aliquam temporibus voluptatem qui, deserunt ut aspernatur minus tempore cupiditate sed sapiente et laudantium nobis non illum placeat natus amet, porro libero? Suscipit voluptatem quasi, eaque repellat voluptatum, doloribus nemo, provident veniam nostrum adipisci quibusdam repudiandae obcaecati earum? Harum hic necessitatibus in delectus totam quisquam deserunt facilis dolores accusantium molestiae eligendi nobis numquam, iure quaerat eveniet impedit laboriosam reprehenderit cupiditate voluptate repudiandae quam! Sunt, molestias, amet voluptas placeat ratione rem possimus aliquam sint iusto similique error iste id minima architecto nemo nam nihil ex quod. Laudantium reprehenderit nesciunt nemo incidunt eum iusto tenetur explicabo modi doloremque reiciendis! Tempora perspiciatis odit temporibus, culpa dolor animi praesentium recusandae fugit id aliquam quisquam reprehenderit facere eveniet officia, natus nam ullam, porro commodi accusantium consectetur suscipit molestiae quod fuga. Necessitatibus doloribus sequi in, totam esse unde facilis, quam tenetur excepturi deserunt sapiente molestiae consequuntur. Unde rem ad eaque minima neque, dolores non iure sed. Maxime!</p>
        
        <p>Publish Date:<span className='text-red-600'> {result[0]?.date}</span></p>
    </div>
</div>

<NewsBanner/>

    </div>
  );
};

export default AllNews;
