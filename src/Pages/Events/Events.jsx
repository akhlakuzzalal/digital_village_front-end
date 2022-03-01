import React, { useEffect, useState } from 'react';
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
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [archivedEvents, setArchivedEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/event/upcomingEvents')
      .then((response) => response.json())
      .then((data) => {
        setUpcomingEvents(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:5000/event/archivedEvents')
      .then((response) => response.json())
      .then((data) => {
        setArchivedEvents(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="px-4 md:px-12 lg:px-36 space-y-6 bg-white py-36">
      <div>
        <h1>Events</h1>
        <p className="lg:w-1/2 py-3">
          Event management is the application of project management to the
          creation and development of small and/or large-scale personal or
          corporate events.
        </p>
      </div>

      {/* event page navigation */}
      <div>
        <ul className="flex items-center gap-3 md:gap-10">
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
      <div>
        <h1 className="mb-20">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {upcomingEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>

      {/* archive events */}
      <div>
        <h1 className="mb-20">Archived Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archivedEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
