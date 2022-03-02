import React from 'react';
import { Link } from 'react-router-dom';

const NewsSideCard = ({ n }) => {
  return (
    <div
      key={n.id}
      className="flex items-center  px-3 py-5 space-x-6  bg-opacity-10 "
    >
      {/* image */}
      <div className="w-1/2 h-[100px] overflow-hidden cursor-pointer">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300 rounded"
          style={{ backgroundImage: `url('${n.img}')` }}
        ></div>
      </div>

      {/* title and description */}
      <div className="flex flex-col space-y-1">
        <p>{n.title}</p>
        <p>{n.description.slice(0, 30)}...</p>
        <Link to={`/newsDetails/${n.id}`}>
          <button className="text-primary  hover:text-black transition-all duration-500 border-b-2 border-b-primary">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsSideCard;
