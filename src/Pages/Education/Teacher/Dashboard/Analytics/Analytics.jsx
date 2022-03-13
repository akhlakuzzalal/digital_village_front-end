import React from 'react';
import WelcomeBanner from '../../../../../Components/WelcomeBanner';
import BlogsPostdata from './BlogsPostData/BlogsPostdata';
import RealTimeValue from './RealTimeValue/RealTimeValue';

const Analytics = () => {
  return (
    <div>
      {/* Welcome banner */}
      <WelcomeBanner />
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* charts */}
        <div className="flex flex-col  md:flex-row gap-4 w-full mx-auto">
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
