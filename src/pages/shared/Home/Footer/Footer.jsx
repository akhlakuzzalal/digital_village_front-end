import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import logo from '../../../../assets/logo.png';
const Footer = () => {
  return (
    <>
      <div
        style={{
          color: '#000',
          position: 'relative',
          top: '130px',
        }}
        className=" w-3/4  text-center py-20 bg-gray-100 text-gray-100 mx-auto"
      >
        <div className=" text-xl font-bold lg:flex lg:px-20 space-y-6">
          <div className="">
            SubsCribe to Digital Village
            <p className="text-sm px-8 font-normal">
              <i>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                repellendus corporis officiis atque nemo accusantium
                reprehenderit eligendi minima fuga. Sint.
              </i>
            </p>
          </div>
          <input
            placeholder="Your Email"
            style={{
              color: 'black',
              width: '100px',
              paddingBlock: '20px',
              paddingInline: '150px',
            }}
            type="email"
          />
          <button
            style={{ borderRadius: '0px 10px 0px 10px', color: 'white' }}
            className="bg-primary py-3 px-10 pr-5"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#b6fcb9',
          color: '#000',
          paddingTop: '200px',
        }}
        className="p-10  text-gray-200 py-20"
      >
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div style={{ width: '400px' }} className="mb-5 ">
              <div className="text-lg mb-3 font-bold">
                {' '}
                <img
                  style={{ height: '60px', width: '60px' }}
                  src={logo}
                  alt=""
                />
                <h2 className="mt-5"> Digital Village</h2>
              </div>
              <p>
                <i>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas dolores laudantium, culpa numquam, recusandae
                  officiis possimus hic praesentium rerum distinctio voluptates
                  totam eligendi. Eos delectus quaerat aliquid, tempore enim
                  molestias.
                </i>
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
                <li className="mb-3">Home</li>
                <li className="mb-3">About Us</li>
                <li className="mb-3">Services</li>
                <li className="mb-3">Contact Us</li>
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
        <div className="flex">
          <div></div>
          <div>
            <h1 className="text-sm flex items-center">
              {' '}
              &copy All Right Reserved
            </h1>
          </div>
          <div className="ml-auto">
            <FaFacebook className="h-6 w-6 " aria-hidden="true" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
