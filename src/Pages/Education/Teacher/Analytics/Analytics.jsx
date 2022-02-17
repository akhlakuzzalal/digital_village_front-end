import React from 'react';
import AddCourse from '../Dashboard/partials/dashboardItem/AddCourse';
import AddPost from '../Dashboard/partials/dashboardItem/AddPost';
import AddVideo from '../Dashboard/partials/dashboardItem/AddVideo';
import BlogsPostdata from '../Dashboard/partials/dashboardItem/BlogsPostdata';
import ExploreBlogs from '../Dashboard/partials/dashboardItem/ExploreBlogs';
import RealTimeValue from '../Dashboard/partials/dashboardItem/RealTimeValue';
import WelcomeBanner from '../Dashboard/partials/dashboardItem/WelcomeBanner';

const Analytics = () => {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Welcome banner */}
        <WelcomeBanner />
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Add a post */}
          <AddPost />
          {/* Add a Video */}
          <AddVideo />
          {/* Add a  Course */}
          <AddCourse />
          {/* Post data */}
          <BlogsPostdata />
          {/* (Real Time Value)*/}
          <RealTimeValue />
        </div>
        {/* ExploreBlogs list */}
        <ExploreBlogs />
      </div>
    </main>
  );
};

export default Analytics;
