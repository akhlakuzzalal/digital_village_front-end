import React from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../../../api/axios';
const NewsCard = ({ n }) => {
  console.log('this is newses', n);
  const navigate = useNavigate();
  return (
    <div className="rounded-2xl w-fit shadow-xl max-w-[400px] mb-10 dark:dark-card-bg">
      <div
        className="overflow-hidden rounded-xl h-64 cursor-pointer"
        onClick={() => navigate(`/newsDetails/${n?._id}`)}
      >
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={`${BASE_URI}/${n?.bannerImg?.path}`}
          alt={n?.title}
        />
      </div>
      <div className="space-y-4 p-6">
        <p className="text-gray-600 flex items-center space-x-2">
          <ImCalendar className="text-primary" /> <span>{n.date}</span>
          <h5 className="text-blue-600 font-bold ml-5">
            Time: <span className="text-red-600">{n.time}</span>
          </h5>
        </p>
        <h3 className="text-xl ">{n.title.slice(0, 43)}...</h3>
        <p>{n.description.slice(0, 50)} ...</p>
        <Link to={`/newsDetails/${n._id}`}>
          <button className="text-primary text-lg hover:text-black transition-all duration-500 border-b-2 border-b-primary">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
