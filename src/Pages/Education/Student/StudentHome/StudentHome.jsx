import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../AllBlogs/BlogCard/BlogCard';
import VideoCard from '../AllVideos/VideoCard/VideoCard';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const StudentHome = () => {
  const videos = useSelector((state) => state.videos.videos);
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div className="space-y-6">
      <Banner />

      {/* top blogs */}
      <h3 className="py-6">Top Categories</h3>

      <Categories />

      {/* top blogs */}
      <h3>Top Blogs</h3>
      <div className="flex flex-wrap items-center gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <h3 className="py-6">Top Videos</h3>
      <div className="flex flex-wrap items-center gap-6">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default StudentHome;
