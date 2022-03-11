import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDevelopment } from '../../redux/slices/Developmet/DevelopmentSlice';
import DevelopmentAbout from './DevelopmentAbout/DevelopmentAbout';
import DevelopmentBanner from './DevelopmentBanner/DevelopmentBanner';
import DevelopmentCard from './DevelopmentCard/DevelopmentCard';
import useDevelopment from './utilities/useDevelopment';
const Development = () => {
  const dispatch = useDispatch();
  const proposals = useSelector((state) => state.development.proposals);
  const { handleUpvote, handleDownvote } = useDevelopment();
  useEffect(() => {
    dispatch(fetchAllDevelopment());
  }, []);

  return (
    <div
      className="mt-[80px]"
      style={{ minHeight: 'calc(100vh - 700px) bg-gray-100' }}
    >
      <DevelopmentBanner />
      <DevelopmentAbout />
      <div className="mx-10 mt-36">
        <h3>Development Proposal</h3>
        <div className="grid grid-cols-3 gap-6">
          {proposals.map((proposal) => (
            <DevelopmentCard
              proposal={proposal}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              key={proposal._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Development;
