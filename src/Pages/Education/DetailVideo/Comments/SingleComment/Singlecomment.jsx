import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../../api/axios';
function SingleComment({ comment, updateComment, postId }) {
  const uId = useSelector((state) => state.user.uId);

  const [OpenReply, setOpenReply] = useState(false);

  const { register, handleSubmit ,trigger,
    formState: { errors }
  } = useForm ();

  const openReply = () => {
    setOpenReply(!OpenReply);
  };

  const handleCommentSubmit = (data) => {
    alert('clicked');
    const nestedCommentData = {
      commenter: uId,
      postId: postId,
      responseTo: comment._id,
      comment: data.comment,
    };
    console.log('this is nested comment submitting');
    axios.post('/comment/add', nestedCommentData).then((response) => {
      if (response.data.success) {
        setOpenReply(!OpenReply);
        console.log(
          'this is the response after adding nested comments',
          response.data
        );
        updateComment(...response.data.result);
      } else {
        alert('Failed to save Comment');
      }
    });
  };
  return (
    <div>
      <div className="flex items-center space-x-4">
        <div>
          <img
            className="h-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDgyaDCaoDZJx8N9BBE6eXm5uXuObd6FPeg&usqp=CAU"
            alt="profile"
          />
        </div>
        <div>
          <p>{comment?.commenter.name}</p>
          <p>{comment?.comment}</p>
        </div>
      </div>

      <div className="flex space-x-6">
        <p>like</p>
        <p>dislike</p>
      </div>

      <span className="ml-3 cursor-pointer" onClick={openReply}>
        Reply To
      </span>

      {OpenReply && (
        <form
          className="ml-3 border-4 border-primary"
          style={{ display: 'flex' }}
          onSubmit={handleSubmit(handleCommentSubmit)}
        >
          <textarea
            {...register('comment' , { required: "Comment is Required" })}
            onKeyUp={() => {
              trigger("comment");
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
}

export default SingleComment;
