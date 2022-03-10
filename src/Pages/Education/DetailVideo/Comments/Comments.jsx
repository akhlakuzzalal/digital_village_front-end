import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import ReplyComment from './ReplyComment/ReplyComment';
import SingleComment from './SingleComment/Singlecomment';

const Comments = ({ postId, updateComment, commentLists }) => {
  const uId = useSelector((state) => state.user.uId);

  const { register, handleSubmit, trigger,
    formState: { errors }
  } = useForm ();

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
    <div>
      <br />
      <p>replies</p>
      <hr />
      {/* Comment Lists  */}
      {console.log('comment lists', commentLists)}

      {commentLists &&
        commentLists.map(
          (comment, index) =>
            !comment?.responseTo && (
              <>
                <SingleComment
                  key={index}
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
          {...register('comment'
          , { required: "Comment is Required" })}
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
    </div>
  );
};

export default Comments;
