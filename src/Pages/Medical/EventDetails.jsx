import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';
import { MdDoneOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import img from '../../assets/events/events.png';
import Calender from '../../Components/Calender';
import { setShowModal } from '../../redux/slices/eMarket/modalSlicle';

const EventDetails = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.market.modal.showModal);
  const { id } = useParams();

  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/event/allEvent')
      .then((res) => res.json())
      .then((data) => {
        setAllEvent(data);
        console.log(data);
      });
  }, []);
  const eventItem = allEvent?.filter((pd) => pd._id === id);

  return (
    <div className="event-details-main py-48 px-5 lg:px-20">
      <p>this is the details of event {id}</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
        {/* left side */}
        <div className="lg:col-span-2">
          <div>
            <img src={eventItem[0]?.image} alt="" />
            <h1 className="mt-20 hover:text-blue-600">{eventItem[0]?.title}</h1>
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

      {/* modal */}
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <img
                        className="w-full h-4/5"
                        src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/w820bt%20black/edifier-w820bt-headphone-price-in-bd-black-500x500.jpg"
                        alt=""
                      />
                      <div>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Our price</p>
                        <h6 className="text-amber-500 font-semibold">$ 300</h6>
                        <h6 className="mt-6">Details</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Amet quasi dolorem qui incidunt, velit illum
                          eaque non veritatis inventore rem.
                        </p>
                        <div className="flex justify-around items-center mt-6">
                          <button className="px-8 py-2 bg-secondary rounded-full">
                            Add to cart
                          </button>
                          <GiSelfLove
                            className="cursor-pointer"
                            size={25}
                            color={'#c200fb'}
                          />
                        </div>
                        <div className="border-y-[1px] mt-6 border-gray-500">
                          <p className="text-green-700 flex items-center">
                            <MdDoneOutline /> In stock
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* close button for modal */}
                  <div className="absolute top-0 right-0 cursor-pointer">
                    <AiOutlineCloseCircle
                      size={30}
                      className="text-primary"
                      onClick={() => dispatch(setShowModal(false))}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default EventDetails;
