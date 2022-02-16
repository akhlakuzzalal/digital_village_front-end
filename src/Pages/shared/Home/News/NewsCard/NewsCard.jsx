import React from 'react';
import { ImCalendar } from 'react-icons/im';
const NewsCard = ({ n }) => {
  return (
    <div className="rounded-2xl w-fit shadow-xl max-w-[400px]">
      <div className="h-[280px] overflow-hidden cursor-pointer rounded-t-2xl">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300"
          style={{ backgroundImage: `url('${n.img}')` }}
        ></div>
      </div>
      <div className="space-y-4 p-4">
        <p className="text-gray-600 flex items-center space-x-2">
          <ImCalendar className="text-primary" /> <span>{n.date}</span>
        </p>
        <h3>{n.title}</h3>
        <p>{n.description.slice(0, 200)} ...</p>
        <button className="text-primary text-lg hover:text-black transition-all duration-500 border-b-2 border-b-primary">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;