import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';
import RichTextEditor from '../../../../Components/RichTextEditor';

const AddNews = () => {
  const [content, setContent] = useState('');

  // const user = useSelector((state) => state.user.user);

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

  const handlePublishNews = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'news',
      JSON.stringify({
        ...data,
        content,
      })
    );

    const response = await axios.post('/news/addNews', formData);
    console.log(response.data);
  };

  return (
    <div
      className="bg-cover h-[100%] w-[100%]bg-no-repeat md:pb-10    "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1551406483-3731d1997540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)`,
      }}
    >
      <div className="mx-5 md:mx-48 px-10 py-6">
        <h1 className="text-center my-8 text-white">Publish News</h1>
        <form onSubmit={handleSubmit(handlePublishNews)} className="space-y-6">
          <div className="flex flex-wrap gap-4 items-center justify-evenly">
            {/* title of the News */}
            <input
              className="md:px-7 mx-2 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('title', { required: true })}
              placeholder="Title of the news"
            />

            {/* file upload */}
            <div className="w-full rounded-xl">
              <FileUpload
                onDrop={onDrop}
                file={file}
                message="Upload a banner for your News"
              />
            </div>

            {/* about the News */}
            <textarea
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('description', { required: true })}
              placeholder="Write the description in short"
            />

            {/* Publishd Date */}
            <input
              type="Date"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('publishDate', { required: true })}
              placeholder="Write your News Publish Date"
            />

            <input
              type="time"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('publishTime', { required: true })}
              placeholder="Write your News Publish Time"
            />
          </div>

          {/* text editor for writing blogs */}
          <RichTextEditor
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            handleEditorChange={handleEditorChange}
            message="Start writing the blog"
          />

          {/* submit button */}
          <input
            className="btn bg-white text-black rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-700 hover:bg-blue-600 hover:text-white"
            type="submit"
            value="Publish Your News"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNews;
