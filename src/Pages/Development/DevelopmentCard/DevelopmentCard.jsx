import React from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';

const DevelopmentCard = ({
  proposal: { name, desc, image, _id, upvotes, downvotes },
  handleUpVote,
  handleDownVote,
}) => {
  return (
    <div className="rounded-2xl w-fit shadow-xl max-w-[400px]">
      <div className="h-[280px] overflow-hidden cursor-pointer rounded-t-2xl">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      </div>
      <div className="space-y-4 p-4">
        <h3 className='text-2xl md:text-3xl hover:text-blue-600'>{name}</h3>
        <p>{desc.slice(0, 200)} ...</p>

        {/* upvote and downvote buttons */}
        <div className="flex items-center justify-between">
          <button
            className="btn py-2 bg-success flex items-center space-x-2"
            onClick={() => handleUpVote(_id)}
          >
            <span>{upvotes}</span> <BiUpvote size={30} />
          </button>
          <button
            className="btn py-2 bg-danger flex items-center space-x-2"
            onClick={() => handleDownVote(_id)}
          >
            <span>{downvotes}</span> <BiDownvote size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCard;
