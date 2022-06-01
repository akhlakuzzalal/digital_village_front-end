import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import Comments from '../DetailVideo/Comments/Comments';
import BlogSideCard from '../Teacher/BlogSideCard/BlogSideCard';

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = useSelector((state) => state.blogs.blogs);
  const blog = blogs.filter((blog) => blog._id === id)[0];

  const [commentLists, setCommentLists] = useState([]);

  const updateComment = (newComment) => {
    setCommentLists([...commentLists, newComment]);
  };

  useEffect(() => {
    axios.get(`/comment/all/?id=${id}`).then((response) => {
      if (response.data.success) {
        setCommentLists(response.data.comments);
      } else {
        alert('Failed to get blog Info');
      }
    });
  }, [id]);

  return (
    <div
      className="mt-[100px] lg:flex "
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div className="col-span-5 lg:w-4/5 space-y-6 lg:px-12 my-20 px-3">
        <div>
          <img
            src={blog?.imageInfo?.url}
            alt={blog?.title}
            className="w-full lg:w-full lg:h-[70vh] h-[200px]"
          />
        </div>
        <div className="dark:text-dark_text">Authored by {blog?.author}</div>
        <div className="dark:text-dark_text">author Email: {blog?.email}</div>
        <div className="flex gap-4 items-center">
          {blog?.tags.map((tag) => (
            <div key={tag} className="bg-emerald-500 p-2 text-white">
              #{tag}
            </div>
          ))}
        </div>
        <p className="">{parse(blog?.content)}</p>
        <div>
          <Comments
            postId={id}
            updateComment={updateComment}
            commentLists={commentLists}
          />
        </div>
      </div>

      <div className="flex-1 mt-6 lg:my-20 mx-5 lg:mx-0 mb-10">
        <div className="space-y-6">
          <h3>Featured Blogs</h3>
          {blogs?.map((blog) => (
            <BlogSideCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
