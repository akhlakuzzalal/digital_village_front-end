import React from 'react';
import { useSelector } from 'react-redux';
import LikeDislikes from '../../Education/DetailVideo/LikeDislikes/LikeDislikes';

const DevelopmentCard = ({ proposal, handleUpvote, handleDownvote }) => {
  const uId = useSelector((state) => state.user.uId);

  return (
    <div className="rounded-2xl w-fit border max-w-[400px] lg:mb-40">
      <div className="h-[280px] overflow-hidden cursor-pointer rounded-t-2xl">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300"
          style={{ backgroundImage: `url('${proposal?.image?.path}')` }}
        ></div>
      </div>
      <div className="space-y-4 p-4">
        <h3 className="text-2xl md:text-3xl ">{proposal?.title}</h3>
        <p>{proposal?.description && proposal.description.slice(0, 100)} ...</p>

        <LikeDislikes developmentProposalId={proposal._id} uId={uId} />
      </div>
    </div>
  );
};

export default DevelopmentCard;
