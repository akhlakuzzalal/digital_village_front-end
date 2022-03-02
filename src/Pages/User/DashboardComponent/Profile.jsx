import React from 'react';
import {
  BsArrowReturnRight,
  BsFillCalendarDateFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const Profile = () => {
  return (
    <div className="mx-10 my-24">
      <div className="md:grid md:grid-cols-3">
        <div className="w-full flex flex-col items-center">
          <img
            className="w-64 rounded-full h-64"
            src="https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg"
            alt=""
          />
          <button className="btn bg-warning my-6">Edit Profile</button>
        </div>
        <div className="md:col-span-2">
          <h2 className="heading_md">
            User Name <span className="text-sm text-primary">(Approved)</span>
          </h2>
          <p>Occupation</p>
          <p className="font-semibold">#id : 123abc</p>
          <div className="my-6">
            <button className="btn bg-primary mb-2">Send Message</button>
            <button className="btn bg-secondary mb-2">Contact User</button>
            <button className="btn bg-secondary mb-2">Report User</button>
          </div>
          <h6 className="inline border-b-2 border-zinc-900">Profile details</h6>
          <div className="mt-6">
            <p className="flex items-center py-2">
              <span className="mr-4">
                <BsFillTelephoneFill />
              </span>
              Phone : <span className="font-semibold"> +99098345080</span>
            </p>
            <p className="flex items-center py-2">
              <span className="mr-4">
                <ImLocation />
              </span>
              Address : Level-4, 34, Awal Centre, Banani, Dhaka
            </p>
            <p className="flex items-center py-2">
              <span className="mr-4">
                <MdEmail />
              </span>
              Email: abcd@xyz.com
            </p>
            <p className="flex items-center py-2">
              <span className="mr-4">
                <BsFillCalendarDateFill />
              </span>
              Date of Birth : 02/02/2004
            </p>
            <p className="flex items-center py-2">
              <span className="mr-4">
                <BsArrowReturnRight />
              </span>
              Marital status : Married
            </p>
            <p className="flex items-center py-2">
              <span className="mr-4">
                <BsArrowReturnRight />
              </span>
              Religion: Islam
            </p>
            <p className="flex items-center py-2">
              <span className="mr-4">
                <BsArrowReturnRight py-2 />
              </span>
              Gender: male
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
