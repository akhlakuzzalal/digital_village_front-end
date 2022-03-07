import React from 'react';
import { useParams } from 'react-router-dom';
import video from '../../../assets/videos/video1.mp4';
import Comments from '../../../Components/Comments/Comments';

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

const DetailVideo = () => {
  const { id } = useParams();

  const video = videos.filter((video) => video._id === id)[0];

  return (
    <div
      className="mt-[88px] space-y-6"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <h1 className="text-center">{video?.title}</h1>
      <video
        className="w-5/6 h-72 mx-auto"
        src={video?.video?.path}
        controls
      ></video>
      <div className="mx-auto md:w-5/6">
        <Comments />
      </div>
    </div>
  );
};

export default DetailVideo;
