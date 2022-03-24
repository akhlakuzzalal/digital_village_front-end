import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyVideos } from '../../../../redux/slices/video/videoSlice';
import VideoCard from './VideoCard/VideoCard';

const Myvideos = () => {
  const user = useSelector((state) => state.user.user);
  const videos = useSelector((state) => state.videos.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyVideos(user?.email));
  }, [user?.email]);

  return (
    <div className="min-h-[100vh] lg:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[400px] place-items-center">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Myvideos;
