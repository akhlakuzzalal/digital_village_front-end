import React, { useState } from 'react';
import AddCourse from './Dashboard/partials/dashboardItem/AddCourse';
import AddPost from './Dashboard/partials/dashboardItem/AddPost';
import AddVideo from './Dashboard/partials/dashboardItem/AddVideo';
import BlogsPostdata from './Dashboard/partials/dashboardItem/BlogsPostdata';
import ExploreBlogs from './Dashboard/partials/dashboardItem/ExploreBlogs';
import RealTimeValue from './Dashboard/partials/dashboardItem/RealTimeValue';
import WelcomeBanner from './Dashboard/partials/dashboardItem/WelcomeBanner';
import Header from './Dashboard/partials/Header';
import Sidebar from './Dashboard/partials/Sidebar';

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
