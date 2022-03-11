import React from 'react';
import { BASE_URI } from '../../../../../api/axios';

const SideVideoCard = ({ video }) => {
  return (
    <div className="flex space-x-4 items-center shadow-2xl rounded-lg hover:bg-slate-200 dark:hover:bg-slate-900 cursor-pointer transition-all duration-500 group  p-2">
      <div className="w-[40%] overflow-hidden">
        <video
          className="w-fit group-hover:scale-150 transition-all duration-500"
          src={`${BASE_URI}/${video?.video?.path}`}
        ></video>
      </div>
      <div>
        <p>
          {video?.title?.length > 25 ? video?.title.slice(0, 25) : video?.title}
        </p>
        <p>{video?.author}</p>
        <p>{video?.publishDate}</p>
      </div>
    </div>
  );
};

export default SideVideoCard;
