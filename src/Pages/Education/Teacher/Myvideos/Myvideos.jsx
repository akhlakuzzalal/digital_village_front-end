import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../../../redux/slices/video/videoSlice';
import VideoCard from './VideoCard/VideoCard';

const Myvideos = () => {
  const videos = useSelector((state) => state.videos.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, []);
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-evenly p-6">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Myvideos;
