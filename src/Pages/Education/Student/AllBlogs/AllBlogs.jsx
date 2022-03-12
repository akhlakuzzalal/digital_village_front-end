import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../../Components/Pagination';
import {
  fetchBlogs,
  setCurrPage,
} from '../../../../redux/slices/blog/blogSlice';
import Search from '../Search/Search';
import BlogCard from './BlogCard/BlogCard';
const AllBlogs = () => {
  const pageCount = useSelector((state) => state.blogs.pageCount);
  const currPage = useSelector((state) => state.blogs.currPage);
  const blogs = useSelector((state) => state.blogs.blogs);
  const size = 10;
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchBlogs({
        pageCount,
        currPage,
        size,
        search,
      })
    );
  }, [currPage, pageCount, size, search]);

  const handleSearch = (data) => {
    setSearch(data.search);
  };

  return (
    <div className="space-y-6">
      <Search handleSearch={handleSearch} />

      <h3 className="text-center py-6">Available Blogs</h3>
      <article className="flex flex-wrap justify-evenly items-center gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </article>

      {/* pagination */}
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default AllBlogs;
