import React, { useState } from 'react';
import { MdPermMedia } from 'react-icons/md';
import { VscReactions } from 'react-icons/vsc';
import PublisheModal from './PublisheModal';

const PublishFeed = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mt-4 rounded-xl p-3 shadow-xl dark:dark-card-bg mb-6">
      <div className="flex align-top border-b-2 border-slate-700">
        {/* avatar */}
        <div class="mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
          <img
            src="http://source.unsplash.com/100x100/?woman"
            className="rounded-full"
            alt=""
          />
          <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
        </div>
        {/* Text Field */}
        <textarea
          className="w-full focus:outline-0 dark:dark-card-bg dark:text-white"
          rows={5}
          onClick={() => setOpen(true)}
          placeholder="Share Tour Feelings"
        />
      </div>
      {/* Media & activity */}
      <div className="my-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-200 dark:bg-slate-500 rounded-full shadow-md px-4 py-2 w-min cursor-pointer">
            <MdPermMedia size={20} />
            <p className="inline">Media</p>
          </div>
          <div className="flex items-center space-x-2 bg-slate-200 dark:bg-slate-500 rounded-full shadow-md px-4 py-2 w-min cursor-pointer">
            <VscReactions size={20} />
            <p className="inline">Activity</p>
          </div>
        </div>
      </div>
      <PublisheModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default PublishFeed;
