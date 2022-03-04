import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({
  event: { _id, title, image, date, time, place, category },
}) => {
  return (
    <Link to={`/eventDetails/${_id}`}>
      <div className="border rounded-xl">
        <img className="lg:h-[300px] w-full" src={image} alt={title} />
        <div className=" bg-primary p-3 ">
          <div className="text-white">
            <p className="pb-4 ml-2">{date}</p>
          </div>
          <div className="px-2 text-white">
            <h3 className=" md:text-lg pb-4 border-y-2">{title}</h3>
            <p>{time}</p>
            <p>
              at <span>{place}</span>
            </p>
            <p className="relative lg:bottom-[400px] bottom-[380px] md:bottom-[340px] right-[20px] w-[130px] px-5 py-3 bg-gray-500">
              {category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
