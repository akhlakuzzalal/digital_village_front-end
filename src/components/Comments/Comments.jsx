import React from 'react';
import SingleComment from './SingleComment/SingleComment';

const Comments = () => {
  return (
    <div>
      <h3>Give your valuable feedback</h3>
      <div className="flex flex-col md:w-3/4 my-2">
        <textarea
          rows="4"
          placeholder="Write your message"
          className="w-full p-2 border-2"
        ></textarea>
        <button
          type="submit"
          className="py-2 px-6 border-2 block bg-secondary rounded-lg text-white my-2 mx-auto max-w-[300px]"
        >
          Submit
        </button>
      </div>

      {/* single comments */}
      <div>
        <SingleComment message="this is an exceelent course on microsoft word" />
        <SingleComment message="Wow I have learned a lot" />
        <SingleComment message="Really cool" />
      </div>
    </div>
  );
};

export default Comments;
