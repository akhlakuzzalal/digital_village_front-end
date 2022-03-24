import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBlogs,
  setBlogCurrPage,
} from '../../../../redux/slices/blog/blogSlice';
import {
  fetchVideos,
  setVideoCurrPage,
} from '../../../../redux/slices/video/videoSlice';
import BlogCard from '../AllBlogs/BlogCard/BlogCard';
import VideoCard from '../AllVideos/VideoCard/VideoCard';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import StudentFooter from './StudentFooter/StudentFooter';
const StudentHome = () => {
  const videos = useSelector((state) => state.videos.videos);
  const blogs = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    setVideoCurrPage(0);
    setBlogCurrPage(0);
    dispatch(fetchBlogs({}));
    dispatch(fetchVideos({}));
  }, []);
  return (
    <>
      <Banner />

      {/* top categories */}
      <div className="lg:mx-[100px]">
        <h3 className="py-6  md:text-left text-xl lg:text-4xl mx-5 lg:mx-0">
          Top Categories <hr />
        </h3>

        <Categories />
      </div>

      {/* top blogs */}
      <div className="lg:mx-[100px] lg:my-[200px] my-20 w-full">
        <h3 className="text-xl lg:text-4xl mx-5 lg:mx-0 mb-4">
          Top Blogs <hr className="mt-3" />
        </h3>
        <div className="flex flex-wrap items-center gap-6 lg:mt-10">
          {blogs.slice(0, 6).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      <div className="lg:mx-[100px] mx-5 lg:mb-40 mb-20">
        <h3 className="py-6  md:text-left">
          Top Videos <hr />
        </h3>
        <div className="flex flex-wrap items-center gap-6">
          {videos.slice(0, 6).map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
      <StudentFooter />
    </>
  );
};

export default StudentHome;
