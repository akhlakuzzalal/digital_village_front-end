import React from 'react';
import { ImCalendar } from 'react-icons/im';
import { Link } from 'react-router-dom';
const NewsCard = ({ n }) => {
  return (
    <div className="rounded-2xl w-fit shadow-xl max-w-[400px]">
      <div className="h-[280px] overflow-hidden cursor-pointer rounded-t-2xl">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300"
          style={{ backgroundImage: `url('${n?.image}')` }}
        >

          
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-gray-600 flex items-center space-x-2">
          <ImCalendar className="text-primary" /> <span>{n.date}</span>
          <h5 className='text-blue-600 font-bold ml-5'>Time: <span className='text-red-600'>{n.time}</span></h5>
        </p>
        <h3>{n.title.slice(0,48)}...</h3>
        <p>{n.description.slice(0,50)} ...</p>
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
