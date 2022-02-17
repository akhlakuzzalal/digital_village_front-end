import React from 'react';
import { useParams } from 'react-router-dom';
import video from '../../../assets/videos/video2.mp4';
import Comments from '../../../components/Comments/Comments';
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
const DetailVideo = () => {
  const { id } = useParams();

  const video = videos.filter((video) => video._id === Number(id))[0];

  return (
    <div
      className="mt-[88px] space-y-6"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <h1 className="text-center">{video.name}</h1>
      <video className="w-5/6 h-72 mx-auto" src={video.video} controls></video>
      <Comments />
    </div>
  );
};

export default DetailVideo;
