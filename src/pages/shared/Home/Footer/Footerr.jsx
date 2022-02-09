import React from 'react';

const Footerr = () => {
  return (
    <>
      <div
        style={{ paddingInline: ' 155px', paddingBlock: '150px' }}
        className=" lg:footer-container flex bg-lime-200"
      >
        <div
          style={{ marginBlock: '0px', marginInline: '60px', width: '30%' }}
          className="footer-texts footer-focused"
        >
          <h2 className="text-lg font-bold mb-5">Digital Village</h2>
          <p> Emergency Services</p>
          <p>Check Up</p>
          <p>Treatment and Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
        </div>

        <div style={{ marginInline: '6px' }} className="footer-texts ">
          <h5 className="mb-5 text-lg font-bold">Quick Links</h5>
          <p> Home</p>
          <p>About</p>
          <p>Services</p>
          <p>contact Us</p>
          <p>Check Up</p>
        </div>

        <div style={{ marginInline: '60px' }} className="footer-texts">
          <h5 className="mb-5 text-lg font-bold">Useful Links</h5>
          <p> Emergency Dental Care</p>
          <p>Check Up</p>
          <p>Treatment and Personal Diseases</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
        </div>

        <div className="footer-texts">
          <h5 className="mb-5 text-lg font-bold">Work Hours</h5>
          <p>Mon - Fri : 09:00 AM - 19:00 AM</p>
          <p>Sat - Sun : 08:00 AM - 20:00 AM</p>

          <h5>Need For Help? Call Us</h5>
          <p
            style={{
              border: 'none',
              backgroundColor: 'rgb(231, 18, 18)',
              padding: '20px',
              color: 'white',
              borderRadius: '10px 10px 0px 10px',
            }}
            className="footer-btn"
          >
            +2020534603
          </p>
        </div>
      </div>
      <p className="text-center">&copy; copyright 2020 all rights reserved</p>
    </>
  );
};

export default Footerr;
