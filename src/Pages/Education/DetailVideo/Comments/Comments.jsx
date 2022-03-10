import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import ReplyComment from './ReplyComment/ReplyComment';
import SingleComment from './SingleComment/Singlecomment';

const Comments = ({ postId, updateComment, commentLists }) => {
  const uId = useSelector((state) => state.user.uId);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const handleCommentSubmit = async (data) => {
    const { comment } = data;
    const commentData = { comment, commenter: uId, postId };
    const response = await axios.post('/comment/add', commentData);
    console.log('response after adding', response);
    if (response.data.success) {
      updateComment(...response.data.result);
    } else {
      console.log('return from backend', response);
      alert('Failed to save Comment');
    }
  };

  return (
    <div className="px-6">
      <h3 className="my-6">Share your feedback</h3>

      {/* this is the root comment form */}
      <form className="flex" onSubmit={handleSubmit(handleCommentSubmit)}>
        <input
          {...register('comment', { required: 'required' })}
          className="border-2 border-info outline-none px-6 flex-1 rounded-xl"
          placeholder="write your comment"
        />
        <button type="submit" className="btn bg-info rounded-xl">
          Submit
        </button>
      </form>

      {commentLists &&
        commentLists.map(
          (comment, index) =>
            !comment?.responseTo && (
              <>
                <SingleComment
                  comment={comment}
                  postId={postId}
                  updateComment={updateComment}
                />
                <ReplyComment
                  commentLists={commentLists}
                  postId={postId}
                  parentCommentId={comment._id}
                  updateComment={updateComment}
                />
              </>
            )
        )}

      {/* Root Comment Form */}
      <form
        className="flex border-4 border-warning"
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
    </div>
  );
};

export default Comments;
