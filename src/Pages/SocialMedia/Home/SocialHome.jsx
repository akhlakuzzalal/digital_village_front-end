import React from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Feeds from './Feeds/Feeds';
import LeftSideMenu from './LeftSideMenu/LeftSideMenu';
import PublishFeed from './PublishFeed/PublishFeed';
import RightSide from './RightSide/RightSide';

const SocialHome = () => {
  const isDesktop = useMediaQuery('(min-width: 900px)');
  return (
    <div
      className="mt-[80px] mb-36 md:mb-24"
      style={{
        minHeight: isDesktop ? 'calc(100vh - 88px)' : 'fit-content',
      }}
    >
      <div className="grid grid-cols-7 gap-6">
        {/* Left Side */}
        <div className="col-span-2">
          <LeftSideMenu />
        </div>
        {/* Middle of the Home */}
        <div className="col-span-3">
          <PublishFeed />
          <Feeds />
        </div>
        {/* Right Side */}
        <div className="col-span-2 relative">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default SocialHome;
