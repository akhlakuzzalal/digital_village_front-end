import React from 'react';
import { FaDonate, FaHandsHelping } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import DonarForm from '../Donate/DonarForm';
import PageSection from '../DonateItems/PageSection/PageSection';

// CaseSingle details page
const CaseSingle = () => {
  const { id } = useParams();
  const causes = useSelector((state) => state.donation.causes);
  const cause = causes.find((c) => c._id === id);
  //Progressbar for
  let donationGoal = cause.goal;
  let donationTotal = cause.raised;

  const percentage = (donationTotal, donationGoal) => {
    return (donationTotal / donationGoal) * 100 > 100
      ? 100
      : (donationTotal / donationGoal) * 100;
  };

  let percent = percentage(donationTotal, donationGoal);
  return (
    <>
      <div
        id="donate"
        className="mt-[80px]"
        style={{ minHeight: 'calc(100vh - 700px)' }}
      >
        <PageSection />
        <div className="container mx-auto flex flex-wrap py-6">
          {/* Posts Section */}
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <div className="flex flex-col shadow my-4 rounded-xl p-4 box-border overflow-hidden relative justify-between border-r-4 border-l-4">
              <div className="overflow-hidden">
                <img
                  className="transform hover:scale-125 transition duration-700 object-cover h-full w-full"
                  src={cause.image}
                  alt={cause?.title}
                />
              </div>
              <div className="bg-white flex flex-col justify-start p-6">
                <a
                  href="/"
                  className="text-blue-700 text-sm font-bold uppercase pb-4"
                >
                  {cause?.category}
                </a>
                <a
                  href="/"
                  className="text-3xl font-bold hover:text-gray-700 pb-4"
                >
                  {cause?.title}
                </a>
                <p href="/" className="text-sm pb-3 text-gray-500">
                  By{' '}
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:text-gray-800"
                  >
                    Digital Village
                  </a>
                  ,{' '}
                  <span className="text-gray-500 text-sm">
                    Published on April 25th, 2022
                  </span>
                </p>
                {/* card footer  */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-3 md:space-y-0 space-y-2">
                  <button className="w-100 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-r-indigo-500 border-l-indigo-500">
                    <FaHandsHelping className="text-2xl text-red-400" />
                    RAISED {cause?.raised}
                  </button>
                  <button className="w-100 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-l-indigo-500 border-r-indigo-500">
                    <FaDonate className="text-2xl text-red-400"></FaDonate>GOAL{' '}
                    {cause?.goal}
                  </button>
                </div>
                <div className="flex flex-col space-y-1 my-3">
                  <div className="py-5">
                    <Progress
                      percent={percent.toFixed(0)}
                      theme={{
                        error: {
                          symbol: percent.toFixed(0) + '%',
                          trailColor: 'pink',
                          color: 'red',
                        },
                        default: {
                          symbol: percent.toFixed(0) + '%',
                          trailColor: 'lightblue',
                          color: 'blue',
                        },
                        active: {
                          symbol: `${percent.toFixed(0) + '%'}`,
                          trailColor: 'yellow',
                          color: '#f55767',
                        },
                        success: {
                          symbol: percent.toFixed(0) + '%✅',
                          trailColor: 'lime',
                          color: 'green',
                        },
                      }}
                    />
                  </div>
                  <article>
                    <p className="text-gray-500 text-sm">
                      {cause?.description}
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="bg-white flex flex-col justify-center items-center w-full shadow my-4 p-6">
              <div className="py-3">
                <p>
                  If you would like to contribute money, click on the{' '}
                  <b>{'Donation Payment'}</b> button.
                </p>
              </div>
              {/* start */}
              <DonarForm></DonarForm>
              {/* end */}
            </div>
          </section>
          {/*Right Sidebar Section  */}
          <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">About Us</p>
              <p className="pb-2 text-gray-700 ">
                Digital village is a more service online platform.sit amet,
                consectetur adipiscing elit. Maecenas mattis est eu odio
                sagittis tristique. Vestibulum ut finibus leo. In hac habitasse
                platea dictumst.
              </p>
              <a
                href="/about"
                className="w-full bg-primary hover:bg-opacity-80 text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-4"
              >
                Get to know us
              </a>
            </div>

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">Donation</p>
              <div className="grid grid-cols-1 gap-3 overflow-y-auto h-96">
                <div className="hover:bg-slate-100 hover:ring-gray-800  w-full flex items-center p-2 rounded-xl shadow border">
                  {/* Card siderbar */}
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                      alt="My profile"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">
                      Antério Vieira da Silva Lima
                    </div>
                    <div className="text-sm text-gray-500">
                      You: Thanks, sounds good! . 8hr
                    </div>
                  </div>
                  <div className="p-2">
                    <img
                      src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      alt="My profile"
                      className="w-4 h-4 rounded-full order-1"
                    />
                  </div>
                </div>

                <div className=" hover:bg-slate-100 hover:ring-gray-800 w-full flex items-center p-2 rounded-xl shadow border">
                  <div className="relative flex items-center space-x-4">
                    <img
                      src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                      alt="My profile"
                      className="w-16 h-16 rounded-full"
                    />
                    <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                  </div>
                  <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">
                      Antério Vieira da Silva Lima
                    </div>
                    <div className="text-sm text-gray-500">
                      @ktquez sent a image . 2hr
                    </div>
                  </div>
                  <div className="p-2">
                    <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
                  </div>
                </div>
                <div className="hover:bg-slate-100 hover:ring-gray-800  w-full flex items-center p-2 rounded-xl shadow border">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                      alt="My profile"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">
                      Antério Vieira da Silva Lima
                    </div>
                    <div className="text-sm text-gray-500">
                      You: Thanks, sounds good! . 8hr
                    </div>
                  </div>
                  <div className="p-2">
                    <img
                      src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      alt="My profile"
                      className="w-4 h-4 rounded-full order-1"
                    />
                  </div>
                </div>

                <div className="hover:bg-slate-100 hover:ring-gray-800  w-full flex items-center p-2 rounded-xl shadow border">
                  <div className="relative flex items-center space-x-4">
                    <img
                      src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                      alt="My profile"
                      className="w-16 h-16 rounded-full"
                    />
                    <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                  </div>
                  <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">
                      Antério Vieira da Silva Lima
                    </div>
                    <div className="text-sm text-gray-500">
                      @ktquez sent a image . 2hr
                    </div>
                  </div>
                  <div className="p-2">
                    <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
                  </div>
                </div>
              </div>
              <a
                href="/"
                className="w-full bg-primary hover:bg-opacity-80  text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-6"
              >
                <i className="fab fa-instagram mr-2"></i>Follow @Digital_Village
              </a>
            </div>
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">Instagram Photo</p>
              <div className="grid grid-cols-3 gap-3">
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                  alt="fgdg"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                  alt="fgdg"
                />
              </div>
              <a
                href="/"
                className="w-full bg-primary hover:bg-opacity-80 text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-6"
              >
                Follow @digital-village
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default CaseSingle;
