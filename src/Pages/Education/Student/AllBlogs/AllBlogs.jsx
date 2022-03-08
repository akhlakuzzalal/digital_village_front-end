import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../../redux/slices/blog/blogSlice';
import Search from '../Search/Search';
import BlogCard from './BlogCard/BlogCard';
const AllBlogs = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  return (
    <div className="space-y-6">
      <Search />
      <h3 className="text-center py-6">Available Blogs</h3>
      <article className="flex flex-wrap justify-evenly items-center gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </article>
    </div>
  );
};

export default AllBlogs;
