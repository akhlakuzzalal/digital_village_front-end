import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({
  event: { _id, title, image, date, time, place, category },
}) => {
  return (
    <Link to={`/eventDetails/${_id}`}>
      <div className="border rounded-xl">
        <img src={image} alt={title} />
        <div className="flex  bg-primary p-4 md:p-10">
          <div className="text-white w-[20%]">
            <h3 className="text-xl md:text-2xl">{date}</h3>
          </div>
          <div className="pl-10 text-white ">
            <p className="">{category}</p>
            <h3 className=" md:text-lg pb-4 border-y-2">{title}</h3>
            <p>{time}</p>
            <p>
              at <span>{place}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
