import React from 'react';
import WelcomeBanner from '../../../../Components/WelcomeBanner';
import BlogsPostdata from './BlogsPostData/BlogsPostdata';
import RealTimeValue from './RealTimeValue/RealTimeValue';

const Analytics = () => {
  return (
    <div>
      {/* Welcome banner */}
      <WelcomeBanner />
      <div className="space-y-6">
        {/* charts */}
        <div className="flex flex-wrap justify-evenly">
          {/* Post data */}
          <BlogsPostdata />
          {/* (Real Time Value)*/}
          <RealTimeValue />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
