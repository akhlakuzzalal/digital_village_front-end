import React from 'react';
import { Link } from 'react-router-dom';

const NewsSideCard = ({ n }) => {
  return (
    <div className="flex  items-center rounded-lg shadow-xl mb-4 px-3 py-3 space-x-6  bg-opacity-20 dark:dark-card-bg">
      {/* image */}
      <div className="w-1/2 h-[100px] overflow-hidden cursor-pointer">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300"
          style={{ backgroundImage: `url('${n?.image}')` }}
        ></div>
      </div>

      {/* title and description */}
      <div className="flex flex-col space-y-3">
        <p>{n.title.slice(0.2)}...</p>
        <p>{n.description.slice(0, 30)}...</p>
        <Link to={`/newsDetails/${n._id}`}>
        <button className="text-primary text-lg hover:text-black transition-all duration-500 border-b-2 border-b-primary">
          Read More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsSideCard;
