import React from 'react';
import SingleComment from './SingleComment/SingleComment';

const Comments = () => {
  return (
    <div className="text-center">
      <h3>Comment here</h3>
      <div className="flex flex-col  justify-center items-center my-2">
        <textarea
          rows="4"
          placeholder="Write your message"
          className="w-1/2 border-2"
        ></textarea>
        <button
          type="submit"
          className="py-2 px-6 border-2 bg-secondary rounded-lg text-white my-2"
        >
          Submit
        </button>
      </div>
      <div>
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
    </div>
  );
};

export default Comments;
