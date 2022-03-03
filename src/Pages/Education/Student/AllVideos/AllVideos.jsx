import React from 'react';
import video from '../../../../assets/videos/video2.mp4';
import Search from '../Search/Search';
import VideoCard from './VideoCard/VideoCard';

const videos = [
  {
    _id: 1,
    name: 'Video one',
    video,
    date: '17 january 2022',
    rating: 5,
  },
  {
    _id: 2,
    name: 'Video two',
    video,
    date: '18 january 2022',
    rating: 3,
  },
  {
    _id: 3,
    name: 'Video three',
    video,
    date: '11 january 2022',
    rating: 2,
  },
  {
    _id: 4,
    name: 'Video four',
    video,
    date: '10 january 2022',
    rating: 3,
  },
];

const Myvideos = () => {
  return (
    <div className="space-y-6">
      <Search />
      <h3 className="text-center py-6">Available Videos</h3>
      <div className="flex flex-wrap gap-4 justify-evenly p-6">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Myvideos;
