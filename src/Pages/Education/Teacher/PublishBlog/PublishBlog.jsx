import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';
import RichTextEditor from '../../../../Components/RichTextEditor';

const PublishBlog = () => {
  const [content, setContent] = useState('');

  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  const [file, setFile] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handlePublishBlogs = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'blog',
      JSON.stringify({
        ...data,
        author: user?.name,
        email: user?.email,
        content,
        publishDate: new Date().toLocaleDateString(),
        tags: data?.tags.split(' '),
      })
    );

    const response = await axios.post('/teacher/publishBlogs', formData);
    console.log(response.data);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full space-y-6">
      <h1>Publish your blog now</h1>
      <form
        onSubmit={handleSubmit(handlePublishBlogs)}
        className="space-y-6 mx-auto"
      >
        <div className="flex items-center justify-evenly">
          <div className="space-y-6">
            {/* title of the blog */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('title', { required: true })}
              placeholder="Title of your blog"
            />

            {/* file upload */}
            <div>
              <FileUpload
                onDrop={onDrop}
                file={file}
                message="Upload a banner for your blog"
              />
            </div>

            {/* about the blog */}
            <textarea
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('about', { required: true })}
              placeholder="Write what this blog teaches within 50 words"
            />

            {/* tags */}
            <input
              type="text"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('tags', { required: true })}
              placeholder="Add tags with space seperated"
            />
          </div>

          {/* text editor for writing blogs */}
          <RichTextEditor
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            handleEditorChange={handleEditorChange}
            message="Start writing the blog"
          />
        </div>
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

export default PublishBlog;
