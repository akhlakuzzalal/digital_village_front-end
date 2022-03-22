import React from 'react';
import { useSelector } from 'react-redux';
import { BASE_URI } from '../../../api/axios';
import UpvoteDownvote from '../UpvoteDownvote/UpvoteDownvote';

const DevelopmentCard = ({ proposal }) => {
  const uId = useSelector((state) => state.user.uId);
  return (
    <div className="rounded-2xl w-fit border max-w-[400px] lg:mb-40">
      <div className="h-[280px] overflow-hidden rounded-t-2xl">
        <img
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300 overflow-hidden rounded-xl"
          src={`${BASE_URI}/${proposal?.image?.path}`}
          alt={proposal?.name}
        ></img>
      </div>
      <div className="space-y-4 p-4">
        <h3 className="text-2xl md:text-3xl ">{proposal?.title}</h3>
        <p>{proposal?.description && proposal.description.slice(0, 100)} ...</p>

        <UpvoteDownvote developmentProposalId={proposal._id} uId={uId} />
      </div>
    </div>
  );
};

export default DevelopmentCard;
