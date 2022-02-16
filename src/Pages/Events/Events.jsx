import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/event.png';
import Header from '../shared/Home/Header/Header';
const Events = () => {
  return (
    <>
      <Header></Header>
      <div className="Event-Main bg-white py-48 lg:px-32 px-10">
        <div>
          <h1>Events</h1>
          <p className="lg:w-1/2 py-3">
            Event management is the application of project management to the
            creation and development of small and/or large-scale personal or
            corporate events.
          </p>
        </div>
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
        {/* //event carts */}

        <div className="mt-14">
          <h1 className="mb-20">Upcoming Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/event-Details">
              {' '}
              <div className=" border rounded-xl">
                <img src={img} alt="" />
                <div className="flex bg-primary p-10 ">
                  <div className="text-white">
                    <h1>16</h1>
                    <p>Feb</p>
                  </div>
                  <div className="pl-10 text-white">
                    <p>EXIBITIONS</p>
                    <h3 className="text-lg pb-4 border-y-2">
                      <Link to="">Local Artists Showcase </Link>{' '}
                    </h3>
                    <p>2:00 pm - 9:00 pm</p>
                    <p>
                      at <span>Art Gallery</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/event-Details">
              {' '}
              <div className=" border rounded-xl">
                <img src={img} alt="" />
                <div className="flex bg-primary p-10 ">
                  <div className="text-white">
                    <h1>16</h1>
                    <p>Feb</p>
                  </div>
                  <div className="pl-10 text-white">
                    <p>EXIBITIONS</p>
                    <h3 className="text-lg pb-4 border-y-2">
                      <Link to="">Local Artists Showcase </Link>{' '}
                    </h3>
                    <p>2:00 pm - 9:00 pm</p>
                    <p>
                      at <span>Art Gallery</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/event-Details">
              {' '}
              <div className=" border rounded-xl">
                <img src={img} alt="" />
                <div className="flex bg-primary p-10 ">
                  <div className="text-white">
                    <h1>16</h1>
                    <p>Feb</p>
                  </div>
                  <div className="pl-10 text-white">
                    <p>EXIBITIONS</p>
                    <h3 className="text-lg pb-4 border-y-2">
                      <Link to="">Local Artists Showcase </Link>{' '}
                    </h3>
                    <p>2:00 pm - 9:00 pm</p>
                    <p>
                      at <span>Art Gallery</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-32">
          <h1 className="mb-20">Archived Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/event-Details">
              {' '}
              <div className=" border rounded-xl">
                <img src={img} alt="" />
                <div className="flex bg-primary p-10 ">
                  <div className="text-white">
                    <h1>16</h1>
                    <p>Feb</p>
                  </div>
                  <div className="pl-10 text-white">
                    <p>EXIBITIONS</p>
                    <h3 className="text-lg pb-4 border-y-2">
                      <Link to="">Local Artists Showcase </Link>{' '}
                    </h3>
                    <p>2:00 pm - 9:00 pm</p>
                    <p>
                      at <span>Art Gallery</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/event-Details">
              {' '}
              <div className=" border rounded-xl">
                <img src={img} alt="" />
                <div className="flex bg-primary p-10 ">
                  <div className="text-white">
                    <h1>16</h1>
                    <p>Feb</p>
                  </div>
                  <div className="pl-10 text-white">
                    <p>EXIBITIONS</p>
                    <h3 className="text-lg pb-4 border-y-2">
                      <Link to="">Local Artists Showcase </Link>{' '}
                    </h3>
                    <p>2:00 pm - 9:00 pm</p>
                    <p>
                      at <span>Art Gallery</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/event-Details">
              {' '}
              <div className=" border rounded-xl">
                <img src={img} alt="" />
                <div className="flex bg-primary p-10 ">
                  <div className="text-white">
                    <h1>16</h1>
                    <p>Feb</p>
                  </div>
                  <div className="pl-10 text-white">
                    <p>EXIBITIONS</p>
                    <h3 className="text-lg pb-4 border-y-2">
                      <Link to="">Local Artists Showcase </Link>{' '}
                    </h3>
                    <p>2:00 pm - 9:00 pm</p>
                    <p>
                      at <span>Art Gallery</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
