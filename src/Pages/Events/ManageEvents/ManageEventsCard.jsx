import React from 'react';

const ManageEventsCard = ({
  event: { _id, title, type, image, date, time, place },
}) => {
  return (
    <div className="border rounded-xl">
      <img src={image} alt={title} />
      <div className="bg-primary">
        <div className="flex p-4 md:p-10">
          <div className="text-white">
            <h3 className="text-xl md:text-2xl">{date}</h3>
          </div>
          <div className="pl-10 text-white">
            <p className="text-xl">{type}</p>
            <h3 className=" md:text-lg pb-4 border-y-2">{title}</h3>
            <p>{time}</p>
            <p>
              at <span>{place}</span>
            </p>
          </div>
        </div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ManageEventsCard;
