import React from 'react';
const Footer = () => {
  return (
    <>
      <div className=" bg-gray-100 ">
        <div className="  flex text-center py-20 bg-gray-800 text-gray-100">
          <h1 className="mx-auto text-xl font-bold">Digital Village</h1>
        </div>

        <div className="p-10 bg-gray-600 text-gray-200 py-20">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="mb-5">
                <h4 className="text-lg mb-3 font-bold">Features</h4>
                A1123 LOST Street
                <br /> Bangladesh <br />
                <strong>Phone Number:</strong> 01979550002 <br />
                <strong>Phone Number:</strong> 01979550002 <br />
              </div>
              <div className="mb-5">
                <h4 className="text-lg mb-3 font-bold">Get Started</h4>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="mb-5">
                <ul>
                  <h4 className="text-lg mb-3 font-bold">About</h4>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="mb-5">
                <ul>
                  <h4 className="text-lg font-bold mb-3">Download</h4>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
