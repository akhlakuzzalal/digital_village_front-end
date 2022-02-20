import React from 'react';
import BlogsPostdata from '../Dashboard/partials/dashboardItem/BlogsPostdata';
import RealTimeValue from '../Dashboard/partials/dashboardItem/RealTimeValue';
import WelcomeBanner from '../Dashboard/partials/dashboardItem/WelcomeBanner';

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
