import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../../api/axios';
const SingleComment = ({ comment, updateComment, postId }) => {
  const uId = useSelector((state) => state.user.uId);
  const [openReply, setOpenReply] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleCommentSubmit = (data) => {
    const nestedCommentData = {
      commenter: uId,
      postId: postId,
      responseTo: comment._id,
      comment: data.comment,
    };
    axios.post('/comment/add', nestedCommentData).then((response) => {
      if (response.data.success) {
        setOpenReply(!openReply);
        updateComment(...response.data.result);
      } else {
        alert('Failed to save Comment');
        console.log(response);
      }
    });
  };

  return (
    <div>
      <div className="flex items-center space-x-4">
        <div>
          <img
            className="h-16 rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDgyaDCaoDZJx8N9BBE6eXm5uXuObd6FPeg&usqp=CAU"
            alt="profile"
          />
        </div>
        <div>
          <p>{comment?.commenter.name}</p>
          <p>{comment?.comment}</p>
        </div>
      </div>

      <div className="ml-20 flex space-x-6">
        <p>like</p>
        <p>dislike</p>
        <span
          className="cursor-pointer hover:text-gray-500 transition-all duration-500"
          onClick={() => setOpenReply(!openReply)}
        >
          Reply
        </span>
      </div>

      {openReply && (
        <form
          className="ml-20 flex"
          onSubmit={handleSubmit(handleCommentSubmit)}
        >
          <input
            {...register('comment', { required: 'required' })}
            className="border-2 border-info outline-none px-6 flex-1 rounded-xl"
            placeholder="write your comment"
          />
          <button type="submit" className="btn bg-info rounded-xl">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SingleComment;
