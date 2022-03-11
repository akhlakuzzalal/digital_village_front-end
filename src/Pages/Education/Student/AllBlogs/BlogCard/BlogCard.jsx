import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { FaPushed } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../../../api/axios';
import Rating from '../../../../../Components/Rating';

const BlogCard = ({ blog, children }) => {
  const [bookmark, setBookmark] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:dark-card-bg rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between max-w-[400px] shadow-2xl">
      <div className="absolute top-20 text-sm left-0 z-20 font-primary rounded-lg">
        <button className="w-90 flex items-center justify-center py-2 border border-transparent text-sm rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6">
          <FaPushed />
          {blog?.isVerified ? 'published' : 'pending'}
        </button>
      </div>

      {/* image  */}
      <div
        className="overflow-hidden rounded-xl h-52 cursor-pointer"
        onClick={() => navigate(`/blogDetails/${blog._id}`)}
      >
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover "
          src={`${BASE_URI}/${blog?.bannerImg?.path}`}
          alt={blog?.title}
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex flex-col space-y-1 my-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-700 font-primary text-lg">
                {blog?.title}
              </h2>
              <div className="flex gap-2">
                <Rating rating={blog?.rating} />
              </div>
            </div>
            {!children ? (
              <div className="mr-4 cursor-pointer">
                {bookmark ? (
                  <BsBookmark
                    size={30}
                    onClick={() => setBookmark(!bookmark)}
                  />
                ) : (
                  <BsBookmarkFill
                    size={30}
                    onClick={() => setBookmark(!bookmark)}
                  />
                )}
              </div>
            ) : (
              children
            )}
          </div>
          {/* title and description */}
          <p className="text-gray-500 text-sm">{blog?.about}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
