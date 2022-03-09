import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from './Comments/Comments';

const DetailVideo = () => {
  const { id } = useParams();

  const videos = useSelector((state) => state.videos.videos);
  const video = videos.filter((video) => video._id === id)[0];

  const [commentLists, setCommentLists] = useState([]);

  const updateComment = (newComment) => {
    setCommentLists([...commentLists, newComment]);
  };

  console.log(video);

  return (
    <div
      className="mt-[88px] space-y-6"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <h1 className="text-center">{video?.title}</h1>
      <video
        className="w-5/6 h-72 mx-auto"
        src={`http://localhost:5000/${video?.video?.path}`}
        controls
      ></video>
      <div className="mx-auto md:w-5/6">
        <Comments
          postId={id}
          refreshFunc={updateComment}
          commentLists={commentLists}
        />
      </div>
    </div>
  );
};

export default DetailVideo;
