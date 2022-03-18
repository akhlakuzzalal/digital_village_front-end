import React from 'react';
import { AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { BASE_URI } from '../../../../api/axios';

const SingleFeed = ({ feed, users }) => {
  const user = users.find((user) => user.email === feed.userEmail);
  const socialUser = useSelector((state) => state.social.user);
  return (
    <div className="px-6 py-5 shadow-xl rounded-lg space-y-2 dark:dark-card-bg">
      {/* post Heading */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          {/* avarar */}
          <div class="mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
            {user?.photo?.path ? (
              <img
                src={`${BASE_URI}/${user?.photo?.path}`}
                className="rounded-full w-12 h-12"
                alt=""
              />
            ) : (
              <img
                src="http://source.unsplash.com/100x100/?woman"
                className="rounded-full"
                alt=""
              />
            )}

            <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
          </div>
          {/* name and date */}
          <div>
            <h6>{user?.name}</h6>
            <p>
              10:12 <span className="text-slate-600">11/12/2021 </span>
            </p>
          </div>
        </div>
        <div className="shadow-2xl p-3 bg-slate-300 rounded-full cursor-pointer">
          <BsThreeDotsVertical />
        </div>
      </div>
      {/* post details */}
      <div className="border-b-2 border-primary pb-5">
        <p>{feed?.post}</p>
        {feed?.photo?.path && (
          <img
            className="w-full h-64"
            src={`${BASE_URI}/${feed?.photo?.path}`}
            alt=""
          />
        )}
      </div>
      {/* post Footer */}
      <div className="my-6 flex justify-between items-center">
        {/* Avatars of liked People */}
        <div className="flex items-center">
          <div class="-space-x-4">
            <img
              class="relative z-30 inline object-cover w-8 h-8 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
            <img
              class="relative z-20 inline object-cover w-8 h-8 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
            <img
              class="relative z-10 inline object-cover w-8 h-8 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
          </div>
          <p>And 17 more love this</p>
        </div>
        {/* Like comment and Share Button */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <GiSelfLove size={25} className="cursor-pointer" />{' '}
            <p>{feed?.loves?.length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineComment size={25} className="cursor-pointer" /> <p>20</p>
          </div>
          <div className="flex items-center">
            <AiOutlineShareAlt size={25} className="cursor-pointer" /> <p>20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeed;
