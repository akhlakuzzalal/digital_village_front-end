import React, { useState } from 'react';
import school from '../../assets/development/school.jpg';
import DevelopmentAbout from './DevelopmentAbout/DevelopmentAbout';
import DevelopmentBanner from './DevelopmentBanner/DevelopmentBanner';
import DevelopmentCard from './DevelopmentCard/DevelopmentCard';
import DevelopmentSlider from './DevelopmentSlider/DevelopmentSlider';
const Development = () => {
  const [proposals, setProposals] = useState([
    {
      _id: 1,
      name: 'Need to rebuild the primary school',
      image: school,
      desc: 'Our school is here for many years. But it is loosing his beauty because of carefullness. It is high time we rebuild our primary school again',
      upvotes: 3,
      downvotes: 5,
    },
    {
      _id: 2,
      name: 'Need to rebuild the primary school',
      image: school,
      desc: 'Our school is here for many years. But it is loosing his beauty because of carefullness. It is high time we rebuild our primary school again',
      upvotes: 7,
      downvotes: 9,
    },
    {
      _id: 3,
      name: 'Need to rebuild the primary school',
      image: school,
      desc: 'Our school is here for many years. But it is loosing his beauty because of carefullness. It is high time we rebuild our primary school again',
      upvotes: 8,
      downvotes: 10,
    },
    {
      _id: 4,
      name: 'Need to rebuild the primary school',
      image: school,
      desc: 'Our school is here for many years. But it is loosing his beauty because of carefullness. It is high time we rebuild our primary school again',
      upvotes: 10,
      downvotes: 5,
    },
  ]);

  const handleUpVote = (id) => {
    const newProposals = proposals.map((proposal) =>
      proposal._id === id
        ? { ...proposal, upvotes: proposal.upvotes + 1 }
        : proposal
    );
    setProposals(newProposals);
  };

  const handleDownVote = (id) => {
    const newProposals = proposals.map((proposal) =>
      proposal._id === id
        ? { ...proposal, downvotes: proposal.downvotes - 1 }
        : proposal
    );
    setProposals(newProposals);
  };

  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px) bg-gray-100' }}>
      <DevelopmentBanner/>
      <DevelopmentAbout/>
      <div>
        <img className='w-full h-96 ' src="https://storage.icograms.com/usages/headers/construction-site.png" alt="" />
       </div>
    </div>
  );
};

export default Development;
