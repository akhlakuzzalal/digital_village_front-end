import React from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';

const DevelopmentCard = ({ proposal, handleUpvote, handleDownvote }) => {
  const { title, description, bannerImg, _id, upvotes, downvotes } = proposal;
  return (
    <div className="rounded-2xl w-fit shadow-xl max-w-[400px]">
      <div className="h-[280px] overflow-hidden cursor-pointer rounded-t-2xl">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300"
          style={{ backgroundImage: `url('${bannerImg}')` }}
        ></div>
      </div>
      <div className="space-y-4 p-4">
        <h3 className="text-2xl md:text-3xl ">{title}</h3>
        <p>{description.slice(0, 200)} ...</p>

        {/* upvote and downvote buttons */}
        <div className="flex items-center justify-between">
          <button
            className="btn py-2 bg-success flex items-center space-x-2"
            onClick={() => handleUpvote(proposal)}
          >
            <span>{upvotes.length}</span> <BiUpvote size={30} />
          </button>
          <button
            className="btn py-2 bg-danger flex items-center space-x-2"
            onClick={() => handleDownvote(proposal)}
          >
            <span>{downvotes.length}</span> <BiDownvote size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCard;
