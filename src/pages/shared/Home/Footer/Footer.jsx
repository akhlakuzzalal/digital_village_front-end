import React from 'react';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Link, useLocation } from 'react-router-dom';
import AppleStore from '../../../../assets/footer/appstore.png';
import playStore from '../../../../assets/footer/playstore.png';
import logo from '../../../../assets/logo.png';
const Footer = () => {
  const location = useLocation();
  return location.pathname.includes('/social') ? null : (
    <footer className="pt-6">
      <div className="w-5/6 md:w-3/4 text-center py-20 bg-info bg-opacity-20 text-black mx-auto -mb-32">
        <div className="space-y-6 px-3">
          {/* subscribe text */}
          <div className="space-y-6">
            <h3 className="text-secondary">SubsCribe to Digital Village</h3>
            <p className="text-sm w-2/3 mx-auto hidden md:block">
              Need update about Everything of our village. Don't worry we Will
              reach out to you. Just Subsribe to our weekly Newsletter.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center space-y-3 md:space-y-0">
            <input
              placeholder="Your Email"
              type="email"
              style={{ borderRadius: '0 0 0 25%' }}
              className="text-black py-3 px-10 border border-primary outline-none focus:border focus:border-secondary w-full md:w-[300px]"
            />

            {/* subscribe button */}
            <button
              style={{ borderRadius: '0 25% 0 0', color: 'white' }}
              className="bg-primary py-3 px-10 pr-5"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-indigo-300 bg-opacity-30 pt-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="mb-5 ">
              <div className="text-lg mb-3 font-bold">
                <img
                  style={{ height: '60px', width: '60px' }}
                  src={logo}
                  alt=""
                />
                <h3 className="mt-5">Digital Village</h3>
              </div>
              <p className="w-5/6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="lg:pl-20 lg:ml-20 lg:pt-20">
              <h4 className="text-lg mb-3 font-bold">Main Features</h4>
              <ul>
                <li className="mb-3">About our websites</li>
                <li className="mb-3">Services we provide</li>
                <li className="mb-3">Our Events</li>
                <li className="mb-3">Our E commerce </li>
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
                <Link to="/service">
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
                  style={{ borderRadius: '0px 10px 0px 10px', color: 'white' }}
                  className="mb-3 bg-primary py-6 px-3 "
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
                className="h-8 w-8 hover:scale-110 hover:text-primary"
                aria-hidden="true"
              />
            </Link>
            <GrInstagram
              className="h-8 w-8 hover:scale-110 hover:text-primary mx-3"
              aria-hidden="true"
            />
            <FaTwitterSquare
              className="h-8 w-8 hover:scale-110 hover:text-primary mx-3"
              aria-hidden="true"
            />
            <MessengerCustomerChat
              pageId="104685378841819"
              appId="720117475814303"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
