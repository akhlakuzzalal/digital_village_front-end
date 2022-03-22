import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { allSocialUser } from '../../../redux/slices/socialSlice/socialSlice';
import Feeds from './Feeds/Feeds';
import LeftSideMenu from './LeftSideMenu/LeftSideMenu';
import PublishFeed from './PublishFeed/PublishFeed';
import RightSide from './RightSide/RightSide';

const SocialHome = () => {
  const user = useSelector((state) => state.user.user);
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allSocialUser(user?.email));
  }, [user]);
  return (
    <div
      className="mt-[80px] mb-36 md:mb-24"
      style={{
        minHeight: isDesktop ? 'calc(100vh - 88px)' : 'fit-content',
      }}
    >
      <div className="grid grid-cols-7 gap-6">
        {/* Left Side */}
        <div className="hidden md:block md:col-span-2">
          <LeftSideMenu />
        </div>
        {/* Middle of the Home */}
        <div className="col-span-7 px-7 md:py-0 md:col-span-3">
          <PublishFeed />
          <Feeds />
        </div>
        {/* Right Side */}
        <div className="hidden md:block md:col-span-2 relative">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default SocialHome;
