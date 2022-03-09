import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';

function Comments({ postId, refreshFunc, commentLists }) {
  const user = useSelector((state) => state.user.user);

  const { register, handleSubmit } = useForm();

  const handleCommentSubmit = async (data) => {
    const { comment } = data;
    const commentData = { comment, commenter: user?.email, postId };

    const response = await axios.post('/comment/add', commentData);

    if (response.data.success) {
      refreshFunc(response.data.result);
    } else {
      console.log(response);
      alert('Failed to save Comment');
    }
  };

  return (
    <div>
      <br />
      <p> replies</p>
      <hr />
      {/* Comment Lists  */}
      {console.log(commentLists)}

      {/* Root Comment Form */}
      <form className="flex" onSubmit={handleSubmit(handleCommentSubmit)}>
        <textarea
          {...register('comment')}
          className="w-full rounded-sm"
          placeholder="write your comment"
        />
        <br />
        <button type="submit" className="w-[25%] h-12">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Comments;
