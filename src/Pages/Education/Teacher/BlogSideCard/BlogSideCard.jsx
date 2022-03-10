import React from 'react';

const BlogSideCard = ({ blog }) => {
  return (
    <div className="flex  items-center rounded-lg mb-4 px-3 py-3 space-x-6 shadow-2xl border-2 border-info">
      {/* image */}
      <div className="w-1/2 h-[80px] overflow-hidden cursor-pointer">
        <div
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300"
          style={{ backgroundImage: `url('${blog?.bannerImg?.path}')` }}
        ></div>
      </div>

      {/* title and description */}
      <div className="flex flex-col space-y-3">
        <p>{blog?.title.slice(0.2)}...</p>
        <p>{blog?.about.slice(0, 30)}...</p>
        <button className="text-primary text-lg hover:text-black transition-all duration-500 border-b-2 border-b-primary">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogSideCard;
