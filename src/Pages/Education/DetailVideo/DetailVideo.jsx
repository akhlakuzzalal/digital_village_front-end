import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import Comments from './Comments/Comments';

const DetailVideo = () => {
  const { id } = useParams();

  const videos = useSelector((state) => state.videos.videos);
  const video = videos.filter((video) => video._id === id)[0];

  const [commentLists, setCommentLists] = useState([]);

  const updateComment = (newComment) => {
    console.log('this is new comment', newComment);
    setCommentLists([...commentLists, newComment]);
  };

  useEffect(() => {
    axios.get(`/comment/all/?id=${id}`).then((response) => {
      if (response.data.success) {
        setCommentLists(response.data.comments);
      } else {
        alert('Failed to get video Info');
      }
    });
  }, []);

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
          updateComment={updateComment}
          commentLists={commentLists}
        />
      </div>
    </div>
  );
};

export default DetailVideo;
