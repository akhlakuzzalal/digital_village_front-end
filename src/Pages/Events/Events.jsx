import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AllEvents from './AllEvents/AllEvents';
// const events = [
//   {
//     _id: 1,
//     name: 'Local Artists Showcase',
//     type: 'EXIBITIONS',
//     image: event,
//     date: '2:00 pm - 9:00 pm',
//     place: 'Art Gallery',
//   },
//   {
//     _id: 2,
//     name: 'Local Artists Showcase',
//     type: 'EXIBITIONS',
//     image: event,
//     date: '2:00 pm - 9:00 pm',
//     place: 'Art Gallery',
//   },
//   {
//     _id: 3,
//     name: 'Local Artists Showcase',
//     type: 'EXIBITIONS',
//     image: event,
//     date: '2:00 pm - 9:00 pm',
//     place: 'Art Gallery',
//   },
//   {
//     _id: 4,
//     name: 'Local Artists Showcase',
//     type: 'EXIBITIONS',
//     image: event,
//     date: '2:00 pm - 9:00 pm',
//     place: 'Art Gallery',
//   },
// ];

const Events = () => {
  const location = useLocation();

  const isMatched =
    location.pathname === '/events/' || location.pathname === '/events';

  return (
    <div>
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
              <Link to="/events/all-events">All</Link>
            </li>
            <li className="text-primary">
              <Link to="/events/upcoming-events">Upcoming Events</Link>
            </li>
            <li className="text-primary">
              <Link to="/events/archived-events">Archived Events</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>{isMatched && <AllEvents></AllEvents>}</div>

      <Outlet />
    </div>
  );
};

export default Events;
