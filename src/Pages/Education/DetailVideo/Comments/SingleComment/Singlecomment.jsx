import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import axios from '../../../../../api/axios';
const SingleComment = ({ comment, updateComment, postId }) => {
  const uId = useSelector((state) => state.user.uId);
  const [openReply, setOpenReply] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

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

      <div className="ml-20 flex space-x-6 dark:text-white">
        <AiOutlineLike size={30} className="cursor-pointer" />
        <AiOutlineDislike size={30} className="cursor-pointer" />

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
          <textarea
            {...register('comment', { required: 'Comment is Required' })}
            onKeyUp={() => {
              trigger('comment');
            }}
            className="w-full rounded-sm"
            placeholder="write your comment"
          />
          {errors.comment && (
            <small className="text-danger">{errors.comment.message}</small>
          )}

          <br />
          <button type="submit" className="w-[25%] h-12">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SingleComment;
