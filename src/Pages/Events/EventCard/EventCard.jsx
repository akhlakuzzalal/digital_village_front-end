import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({
  event: { _id, name, type, image, date, time, place },
}) => {
  return (
    <Link to={`/eventDetails/${_id}`}>
      <div className="border rounded-xl">
        <img src={image} alt={name} />
        <div className="flex bg-primary p-10 ">
          <div className="text-white">
            <h3 className='text-xl md:text-2xl'>{date}</h3>
          </div>
          <div className="pl-10 text-white">
            <p className='text-xl'>{type}</p>
            <h3 className=" md:text-lg pb-4 border-y-2">{name}</h3>
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
