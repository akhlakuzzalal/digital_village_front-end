import React from 'react';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../../assets/digital_village_logo.png';
import AppleStore from '../../../../assets/footer/appstore.png';
import playStore from '../../../../assets/footer/playstore.png';
const Footer = () => {
  const location = useLocation();
  const isMatched =
    location.pathname.indexOf('social') !== -1 ||
    location.pathname.indexOf('userdashboard') !== -1 ||
    location.pathname.indexOf('admin') !== -1 ||
    location.pathname.indexOf('medical') !== -1;
  return (
    !isMatched && (
      <footer className="pt-16 mt-10 bg-slate-900">
        <div className="text-center rounded-xl mx-auto text-white">
          <div className="space-y-3 px-3 ">
            {/* subscribe text */}

            <div className="flex flex-wrap md:flex-nowrap items-center justify-center space-y-3 md:space-y-0 ">
              <input
                placeholder="Your Email"
                type="email"
                style={{ borderRadius: '0px 0px 0px 10px' }}
                className="text-black py-5 px-10 border border-primary outline-none focus:border focus:border-secondary w-full md:w-[300px] "
              />

              {/* subscribe button */}
              <button
                style={{ borderRadius: '0px 10px 0px 0px', color: 'white' }}
                className="hover:bg-[#1515aa] bg-[blue] px-20  py-5          dark:text-dark_text
                dark:bg-secondary"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="py-16 px-6 bg-slate-900 text-white bg-opacity-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              <div className="mb-5 ">
                <div className="text-lg mb-3 font-bold">
                  {/* logo */}
                  <Link to="/">
                    <img
                      style={{ height: '60px', width: '60px' }}
                      src={logo}
                      alt=""
                    />
                  </Link>
                  <h3 className="mt-5">Digital Village</h3>
                </div>
                <p className="w-5/6">
                  Turning an analog village into a digital one
                </p>
              </div>

              <div className="lg:pl-20 lg:ml-20 lg:pt-20">
                <h4 className="text-lg mb-3 font-bold">Main Features</h4>
                <ul>
                  <li className="mb-3">Quality education</li>
                  <li className="mb-3">Medical Services</li>
                  <li className="mb-3">Village Market</li>
                  <li className="mb-3">Events </li>
                  <li className="mb-3">Donation </li>
                </ul>
              </div>
              <div className="lg:px-20 lg:pt-20">
                <h4 className="text-lg mb-3 font-bold">Quick Links</h4>
                <ul>
                  <Link to="/">
                    <li className="mb-3">Home</li>
                  </Link>
                  <Link to="/about">
                    {' '}
                    <li className="mb-3">About Us</li>
                  </Link>
                  <Link to="/">
                    {' '}
                    <li className="mb-3">Services</li>
                  </Link>
                  <Link to="/contact">
                    {' '}
                    <li className="mb-3">Contact Us</li>
                  </Link>
                </ul>
              </div>
              <div className="lg:pt-20">
                <h4 className="text-lg mb-3 font-bold">Contact Information</h4>
                <ul>
                  <li className="mb-3">village office</li>
                  <li className="mb-3">About our office </li>
                  <li className="mb-3">Chattogram Office</li>
                  <li
                    style={{
                      borderRadius: '0px 10px 0px 10px',
                      color: 'white',
                    }}
                    className="mb-3 bg-[#3500D3] py-6 px-3 dark:text-dark_text
                    dark:bg-secondary"
                  >
                    +88010000000
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="lg:flex lg:mx-28 pt-10 space-y-6 lg:space-y-0">
            <div className="flex flex-wrap gap-3">
              <img src={playStore} alt="playstore" />
              <img src={AppleStore} alt="applestore" />
            </div>
            <div className="ml-auto">
              <h3 className="text-sm flex items-center">
                &copy; All Right Reserved
              </h3>
            </div>
            <div className="ml-auto flex">
              <Link to={{ pathname: 'https://web.facebook.com' }}>
                <FaFacebook
                  className="h-8 w-8 hover:scale-110 hover:text-primary cursor-pointer"
                  aria-hidden="true"
                />
              </Link>

              <Link to={{ pathname: 'https://www.instagram.com/' }}>
                <GrInstagram
                  className="h-8 w-8 hover:scale-110 hover:text-primary mx-3 cursor-pointer"
                  aria-hidden="true"
                />
              </Link>

              <Link to={{ pathname: 'https://twitter.com/' }}>
                <FaTwitterSquare
                  className="h-8 w-8 hover:scale-110 hover:text-primary mx-3 cursor-pointer"
                  aria-hidden="true"
                />
              </Link>
              <MessengerCustomerChat
                pageId="104685378841819"
                appId="720117475814303"
              />
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
