import parse from 'html-react-parser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import RichTextEditor from '../../../../Components/RichTextEditor';

const Addblogs = () => {
  const [content, setContent] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
    setContent(e.target.getContent());
  };

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
        <RichTextEditor
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          handleEditorChange={handleEditorChange}
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

      <div>
        <h1 style={{ background: 'blue', color: 'white' }}>
          this is text editor return content
        </h1>
        {parse(content)}
      </div>
    </div>
  );
};

export default Addblogs;
