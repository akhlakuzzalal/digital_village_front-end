import React from 'react';
import { FaEdit, FaPushed, FaTrashAlt } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between max-w-[400px] shadow-2xl">
      <div className="absolute top-20 text-sm left-0 z-20 font-primary rounded-lg">
        <button className="w-90 flex items-center justify-center py-2 border border-transparent text-sm rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6">
          <FaPushed />
          Puplish
        </button>
      </div>
      {/* image  */}
      <div className="overflow-hidden rounded-xl h-52">
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={blog?.img}
          alt={blog?.name}
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* title and description */}
        <div className="flex flex-col space-y-1 my-4">
          <h2 className="text-gray-700 font-primary text-lg">{blog?.name}</h2>
          <p className="text-gray-500 text-sm">{blog?.desc}</p>
          {/* <p className="text-gray-500 text-sm">{Dec.slice(0, 100)}</p>                     */}
        </div>
      </div>

      {/* card footer  */}
      <div className="flex items-center justify-between pt-3">
        <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <FaEdit />
        </button>
        <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
