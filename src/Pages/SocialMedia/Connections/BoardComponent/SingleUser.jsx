import React from 'react';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { useSelector } from 'react-redux';

const SingleUser = ({ user }) => {
  const socialUser = useSelector((state) => state.social.user);
  const requestingIDs = socialUser.requesting;
  const requestedIDs = socialUser.requested;
  const friendsIds = socialUser.connection;
  const isRequesting = requestingIDs.find((id) => id !== user._id);
  const isRequested = requestedIDs.find((id) => id !== user._id);
  const isFriend = friendsIds.find((id) => id !== user._id);
  return (
    <div className="group relative max-w- mx-5 md:mx-0  rounded-xl overflow-hidden shadow-md hover:scale-105 duration-500 dark:bg-white">
      <div className="w-full flex justify-center ">
        <img className="w-4/5 h-40" src="" alt="Sunset in the mountains" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{user.name}</div>
        {isRequesting && (
          <div className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2">
            <MdPersonAddAlt1 size={20} color={'white'} />
            <p>Ruquested</p>
          </div>
        )}
        {isRequested && (
          <div className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2">
            <MdPersonAddAlt1 size={20} color={'white'} />
            <p>Accept Request</p>
          </div>
        )}
        {isFriend && (
          <div className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2">
            <MdPersonAddAlt1 size={20} color={'white'} />
            <p>Send Message</p>
          </div>
        )}
        {!isRequesting && !isFriend && !isRequested && (
          <div className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2">
            <MdPersonAddAlt1 size={20} color={'white'} />
            <p>Add Friend</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
