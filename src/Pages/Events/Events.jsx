import React from 'react';
import { Link } from 'react-router-dom';
import event from '../../assets/events/events.png';
import EventCard from './EventCard/EventCard';

const events = [
  {
    _id: 1,
    name: 'Local Artists Showcase',
    type: 'EXIBITIONS',
    image: event,
    date: '2:00 pm - 9:00 pm',
    place: 'Art Gallery',
  },
  {
    _id: 2,
    name: 'Local Artists Showcase',
    type: 'EXIBITIONS',
    image: event,
    date: '2:00 pm - 9:00 pm',
    place: 'Art Gallery',
  },
  {
    _id: 3,
    name: 'Local Artists Showcase',
    type: 'EXIBITIONS',
    image: event,
    date: '2:00 pm - 9:00 pm',
    place: 'Art Gallery',
  },
  {
    _id: 4,
    name: 'Local Artists Showcase',
    type: 'EXIBITIONS',
    image: event,
    date: '2:00 pm - 9:00 pm',
    place: 'Art Gallery',
  },
];

const Events = () => {
  return (
    <div className="Event-Main bg-white py-48 lg:px-32 px-10">
      {/* event page banner */}
      <div>
        <h1>Events</h1>
        <p className="lg:w-1/2 ">
          Event management is the application of project management to the
          creation and development of small and/or large-scale personal or
          corporate events.
        </p>
      </div>

      {/* event page navigation */}
      <div className="pt-10">
        <ul className="flex lg:gap-10 gap-5">
          <p>Icon</p>
          <li className="text-primary">
            <Link to="">All</Link>
          </li>
          <li className="text-primary">
            <Link to="">Upcoming Events</Link>
          </li>
          <li className="text-primary">
            <Link to="">Archived Events</Link>
          </li>
        </ul>
      </div>

      {/* upcoming events */}
      <div className="mt-14">
        <h1 className="mb-20">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>

      {/* archive events */}
      <div className="mt-32">
        <h1 className="mb-20">Archived Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
