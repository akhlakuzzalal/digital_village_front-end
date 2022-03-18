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

const StudentHome = () => {
  const videos = useSelector((state) => state.videos.videos);
  const blogs = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    setVideoCurrPage(0);
    setBlogCurrPage(0);
    dispatch(fetchBlogs({}));
    dispatch(fetchVideos({}));
    console.log('I am here');
  }, []);
  return (
    <div className="">
      <Banner />

      {/* top blogs */}
      <div className="lg:mx-[100px] ">
        <h3 className="py-6 text-center md:text-left">
          Top Categories <hr />
        </h3>

        <Categories />
      </div>

      {/* top blogs */}
      <div className="lg:mx-[100px] my-[200px]">
        <h3>
          Top Blogs <hr />
        </h3>
        <div className="flex flex-wrap items-center gap-6">
          {blogs.slice(0, 6).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      <div className="mx-[100px]">
        <h3 className="py-6 text-center md:text-left">Top Videos</h3>
        <div className="flex flex-wrap items-center gap-6">
          {videos.slice(0, 6).map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
