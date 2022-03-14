import React from 'react';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BiMobile } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaUserCheck } from 'react-icons/fa';
import { GrContactInfo, GrStatusUnknown } from 'react-icons/gr';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import bg from './../../../../../../../assets/medical/bg.jpg';
const Banner = () => {
  return (
    <div
      className="py-20 px-5 min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-wrap justify-between items-center ">
        <div
          style={{ background: 'rgba(135, 87, 247,.9)' }}
          className=" w-full md:w-1/2  border-l-8 border-indigo-700 rounded-lg p-10 "
        >
          <div className="w-full flex justify-center items-center  my-5">
            <FaUserCheck
              style={{
                color: 'black',
                fontSize: '5em',
                marginRight: '8px',
              }}
            />
            <h6 className="text-black">
              Register for <br />
              vaccination
            </h6>
          </div>
          <div className="text-center text-black my-5">
            <h6>Registration Essentials</h6>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <AiOutlineIdcard
                  style={{
                    color: 'black',
                    fontSize: '2em',
                  }}
                />
                <p>NID</p>
              </div>
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <BsArrowRight
                  style={{
                    color: 'black',
                    fontSize: '2em',
                    marginRight: '8px',
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <BiMobile
                  style={{
                    color: 'black',
                    fontSize: '2em',
                  }}
                />
                <p>Phone</p>
              </div>
              <div className="flex flex-col justify-center items-center my-5">
                <BsArrowRight
                  style={{
                    color: 'black',
                    fontSize: '2em',
                    marginRight: '8px',
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <IoMdInformationCircleOutline
                  style={{
                    color: 'black',
                    fontSize: '2em',
                  }}
                />
                <p>Information</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex flex-col justify-center items-center ">
          <div
            className="flex  justify-start items-center p-10   border-l-8 border-indigo-700 rounded-lg mx-0 md:mx-4 w-full my-1"
            style={{ background: 'rgba(135, 87, 247,.9)' }}
          >
            <GrStatusUnknown
              style={{
                color: 'black',
                fontSize: '2em',
                marginRight: '8px',
              }}
            />

            <h6>Your Status</h6>
          </div>
          <div
            className="flex  justify-start items-center p-10   border-l-8 border-indigo-700 rounded-lg mx-0 md:mx-4 w-full my-1"
            style={{ background: 'rgba(135, 87, 247,.9)' }}
          >
            <GrContactInfo
              style={{
                color: 'black',
                fontSize: '2em',
                marginRight: '8px',
              }}
            />

            <h6>Your Information</h6>
          </div>
          <div
            className="flex  justify-start items-center p-10   border-l-8 border-indigo-700 rounded-lg mx-0 md:mx-4 w-full my-1"
            style={{ background: 'rgba(135, 87, 247,.9)' }}
          >
            <GrStatusUnknown
              style={{
                color: 'black',
                fontSize: '2em',
                marginRight: '8px',
              }}
            />

            <h6>Your Status</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;