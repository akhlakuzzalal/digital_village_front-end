import React from 'react';
import { Link, useParams } from 'react-router-dom';
import img from '../../../assets/market.png';
import Calender from '../../../Components/Calender/Calender';
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
            <h1 className="mt-20 hover:text-blue-600">Music Talent Show</h1>
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
              <div className="mapouter">
                <div className="gmap_canvas">
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
            <Calender></Calender>

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

      <button
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="defaultModal"
      >
        Toggle modal
      </button>

      <div
        id="defaultModal"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
      >
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
