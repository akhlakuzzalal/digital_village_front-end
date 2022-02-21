import React from 'react';
import { useForm } from 'react-hook-form';

const Addblogs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handlePublishBlogs = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-full space-y-6">
      <h1>Publish your blog now</h1>
      <form
        onSubmit={handleSubmit(handlePublishBlogs)}
        className="space-y-6 max-w-[500px] mx-auto"
      >
        {/* email */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title')}
          placeholder="Title of the blogs"
        />

        {/* blog input area */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('blogs')}
          placeholder="Write your blog"
        />

        {/* keyword */}
        <input
          type="text"
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('keywords')}
          placeholder="Add some keywords"
        />

        {/* submit button */}
        <input
          className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
          type="submit"
          value="Publish blogs"
        />
      </form>
    </div>
  );
};

export default Addblogs;
