import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import video from '../../../../assets/videos/video1.mp4';
import VideoCard from '../AllVideos/VideoCard/VideoCard';

const videos = [
  {
    _id: '1',
    author: 'user 1',
    email: 'user1@gmail.com',
    title: 'Video one',
    video: {
      path: video,
    },
    rating: 3,
    isVerified: true,
    tags: ['microsoft-word', 'writing', 'skill'],
    publishDate: '17 january 2022',
  },
  {
    _id: '2',
    email: 'user2@gmail.com',
    author: 'user 2',
    title: 'Video two',
    video: {
      path: video,
    },
    rating: 4,
    isVerified: true,
    tags: ['microsoft-excell', 'data', 'skill'],
    publishDate: '17 january 2022',
  },
  {
    _id: '3',
    author: 'user 3',
    email: 'user3@gmail.com',
    title: 'Video three',
    video: {
      path: video,
    },
    rating: 5,
    isVerified: true,
    tags: ['marchendising', 'skill'],
    publishDate: '17 january 2022',
  },
  {
    _id: '4',
    author: 'user 4',
    email: 'user4@gmail.com',
    title: 'Video four',
    video: {
      path: video,
    },
    rating: 2,
    isVerified: true,
    tags: ['programming', 'beginners'],
    publishDate: '17 january 2022',
  },
];

const Myvideos = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-center py-6">Favourite Videos</h3>
      <div className="flex flex-wrap gap-4 justify-evenly p-6">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video}>
            <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaTrashAlt />
            </button>
          </VideoCard>
        ))}
      </div>
    </div>
  );
};

export default Myvideos;
