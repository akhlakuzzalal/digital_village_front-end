import React from 'react';
import { Link, useParams } from 'react-router-dom';
import calender from '../../../assets/events/calendar.png';
import img from '../../../assets/market.png';
const EventDetails = () => {
  const { id } = useParams();
  return (
    <div className="event-details-main py-48 px-5 lg:px-20">
      <p>this is the details of event {id}</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {/* left side */}
        <div className="lg:col-span-2">
          <div>
            <img src={img} alt="" />
            <h1 className="mt-20">Music Talent Show</h1>
          </div>
          <div className="mt-20">
            <h4 className="mb-7">Next Upcoming date</h4>
            <div className="bg-gray-100 p-7 border-l-4 flex items-center gap-6 lg:gap-20 px-5 lg:px-32">
              <div>
                <p>Dtae</p>
                <h3 className="text-xl">April 16,2022</h3>
              </div>
              <div>
                <p>Time</p>
                <p className="text-sm">6:00 pm - 10:00 pm</p>
              </div>
              <div>
                {' '}
                <h5>Community Center</h5>
                <p className="text-sm py-1">1301 Shoal Creek Blvd,</p>
                <p className="text-sm">Austin, TX 78701</p>
              </div>
            </div>
            <p className="my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam omnis sapiente et accusantium voluptas ab dolore,
              laudantium doloremque quaerat fugit, saepe eaque voluptatibus
              dolor similique numquam commodi fuga labore aliquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Impedit, deleniti?
            </p>

            {/* map */}
            <div className="mt-20">
              <h1 className="text-xl my-5">Event Location</h1>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    title="google map"
                    className="lg:w-[100%] lg:h-[500px]"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=bashundhara&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="right-main ">
          <div className="lg:ml-36">
            <h4 className="my-5 text-xl">Calender</h4>
            <img src={calender} alt="" />

            <p className="my-4 text-primary">
              <Link to="/events">More Events</Link>
            </p>
          </div>

          <div className="upcoming events lg:ml-36">
            <div className="mt-14">
              <h4 className="mb-7 text-xl">Upcoming Events</h4>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <Link to="/event-Details">
                  {' '}
                  <div className="  rounded-xl">
                    <img src={img} alt="" />
                    <div className="  py-10 ">
                      <div className="">
                        <h3 className="text-lg pb-4 border-y-2">
                          <Link to="">Local Artists Showcase </Link>{' '}
                        </h3>
                        <h4>16 february</h4>
                      </div>
                      <div className=" ">
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
                  <div className="  rounded-xl">
                    <img src={img} alt="" />
                    <div className="  py-10 ">
                      <div className="">
                        <h3 className="text-lg pb-4 border-y-2">
                          <Link to="">Local Artists Showcase </Link>{' '}
                        </h3>
                        <h4>16 february</h4>
                      </div>
                      <div className=" ">
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
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
