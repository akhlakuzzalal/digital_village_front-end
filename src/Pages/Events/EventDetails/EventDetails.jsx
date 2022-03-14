import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import axios from '../../../../src/api/axios';
import {
  fetchAllEvent,
  fetchUpcomingEvents,
} from '../../../redux/slices/event/eventSlice';
import Calender from '../../Medical/Dashboard/partials/dashboardItem/DoctorAppointment/Calender/Calender';
const EventDetails = () => {
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();

  // const [allEvent, setAllEvent] = useState([]);

  const allEvent = useSelector((state) => state.events.allEvents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvent());
  }, []);
  const eventItem = allEvent?.filter((pd) => pd._id === id);
  // upcomming events
  const upcomingEvents = useSelector((state) => state.events.upcomingEvents);
  useEffect(() => {
    dispatch(fetchUpcomingEvents());
  }, []);
  const upcomingEventsData = upcomingEvents.slice(1, 5);

  //to book events
  const handleBookEvent = () => {
    axios.put(`/event/participant?id=${eventItem[0]?._id}&email=${user.email}`);
    swal('Good job!', 'Successfully booked !', 'success');
  };

  return (
    <div className="event-details-main py-48 px-5 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {/* left side */}
        <div className="lg:col-span-2">
          <div>
            <img
              className="w-full lg:h-[700px]"
              src={eventItem[0]?.image}
              alt=""
            />
            <h1 className="mt-20 hover:text-blue-600">{eventItem[0]?.title}</h1>
          </div>
          <div className="mt-20">
            <div className="bg-gray-100 p-7 border-l-4 flex items-center gap-6 lg:gap-20 px-5 lg:px-32">
              <div>
                <p>Dtae</p>
                <h3 className="text-xl">{eventItem[0]?.date}</h3>
              </div>
              <div>
                <p>Time</p>
                <p className="text-sm">{eventItem[0]?.time}</p>
              </div>
              <div>
                <h5>Community Center</h5>

                <p className="text-sm">{eventItem[0]?.place}</p>
              </div>
            </div>
            <p className="my-5">{eventItem[0]?.description}</p>

            {/* map */}
            <div className="mt-20">
              <h1 className="text-xl my-5">Event Location</h1>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="google map"
                    className="lg:w-[100%] lg:h-[500px] md:w-[100%] w-[100%] md:h-[400px] h-[200px]"
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
            <Calender className="w-[500px] lg:w-0 md:w-full"></Calender>

            <p className="my-4 text-primary">
              <Link to="/events">More Events</Link>
            </p>
          </div>

          <div className="upcoming events lg:ml-36">
            <div className="mt-14">
              <h4 className="mb-7 text-xl">Upcoming Events</h4>

              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 space-y-4">
                {upcomingEventsData?.map((upcomingEvent) => (
                  <Link to={`/eventDetails/${upcomingEvent._id}`}>
                    {' '}
                    <div className="  rounded-xl border space-y-2">
                      <img
                        className=" w-full"
                        src={upcomingEvent.image}
                        alt=""
                      />
                      <h4 className="ml-4">{upcomingEvent.date}</h4>
                      <div className="  py-3 px-4">
                        <div className="">
                          <h3 className="text-lg pb-2 ">
                            <Link to="">{upcomingEvent.title} </Link>{' '}
                          </h3>
                        </div>
                        <div className=" ">
                          <p>{upcomingEvent.time}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleBookEvent}
        className="mt-10 bg-purple-300 py-5 px-20 ml-8 lg:ml-0 md:ml-0"
      >
        Book This Event
      </button>
    </div>
  );
};

export default EventDetails;
