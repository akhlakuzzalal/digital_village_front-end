import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Rating from '../../../../../Components/Rating';
import { deleteAVideo } from '../../../../../redux/slices/video/videoSlice';
import { giveAlert } from '../../../../../utilities/alert';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteVideo = () => {
    giveAlert('Are you sure? You want to delete this', 'warning').then(() => {
      dispatch(deleteAVideo(video._id)).then(() => {
        giveAlert('Successfully deleted');
      });
    });
  };

  return (
    <div className="shadow-xl w-fit rounded-2xl dark:border-2 dark:border-cyan-300">
      <div
        className="space-y-4 cursor-pointer group hover:bg-slate-100 dark:hover:bg-slate-900"
        onClick={() => navigate(`/detailvideo/${video?._id}`)}
      >
        <video
          className="h-56 w-full rounded-2xl"
          src={`https://digital-village.herokuapp.com/${video?.video?.path}`}
        ></video>
        <div className="flex justify-between px-3">
          <div className="space-y-2">
            <h3 className="text-xl w-2/3">{video?.title}</h3>
            <div className="flex text-yellow-400">
              <Rating rating={video?.rating} />
            </div>
          </div>
          <div className="mr-3 group-hover:animate-ping">
            <BsFillPlayCircleFill size={40} className="text-info " />
          </div>
        </div>
        <p className="px-3">{video?.publishDate}</p>
      </div>
      {/* card footer  */}
      <div className="flex items-center justify-between p-3">
        <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <FaEdit />
        </button>
        <button
          className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleDeleteVideo}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
