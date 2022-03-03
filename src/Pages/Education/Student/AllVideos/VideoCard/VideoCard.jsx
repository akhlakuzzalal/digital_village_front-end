import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '../../../../../Components/Rating';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      className="space-y-3 shadow-xl cursor-pointer hover:bg-slate-300 w-fit"
      onClick={() => navigate(`/detailvideo/${video?._id}`)}
    >
      <video className="w-72" src={video?.video}></video>
      <h3 className="text-xl">{video?.name}</h3>
      <div className="flex text-yellow-500">
        <Rating rating={video?.rating} />
      </div>
      <p>{video?.date}</p>
    </div>
  );
};

export default VideoCard;