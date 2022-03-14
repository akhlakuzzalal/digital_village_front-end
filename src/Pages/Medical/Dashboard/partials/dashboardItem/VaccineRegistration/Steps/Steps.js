import React from 'react';
import { FcApproval, FcHome, FcSms } from 'react-icons/fc';

const Steps = () => {
  return (
    <div className="p-10">
      <div className="border-l-8 border-indigo-700 p-5 ml-20 my-20">
        <h3 className="text-indigo-700">Steps of vaccination</h3>
      </div>
      <div className="flex justify-between items-center px-20">
        <div className="p-2">
          <FcApproval
            style={{
              fontSize: '5em',
              marginBottom: '10px',
            }}
          />
          <h6>Online Registration</h6>
          <p>
            One have to give your NID information and Contact no to register for
            vaccination. All the Information should be valid otherwise one
            cannot register for Vaccination{' '}
          </p>
        </div>
        <div className="p-2">
          <FcSms
            style={{
              fontSize: '5em',
              marginBottom: '10px',
            }}
          />
          <h6>SMS Notification</h6>
          <p>
            After registration. one have to wait for the sms will be sent by
            authority including the date and place of the vaccination at the
            given number during registration{' '}
          </p>
        </div>
        <div className="p-2">
          <FcHome
            style={{
              fontSize: '5em',
              marginBottom: '10px',
            }}
          />
          <h6>Online Registration</h6>
          <p>
            After getting SMS one have to download the information card and go
            to the given center at given date. Showing the Information card one
            can take vaccine{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
