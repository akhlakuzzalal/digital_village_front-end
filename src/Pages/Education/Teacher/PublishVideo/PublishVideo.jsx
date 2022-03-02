import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';

const PublishVideo = () => {
  const [file, setFile] = useState({});
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handlePublishVideo = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'video',
      JSON.stringify({
        ...data,
        author: user?.name,
        email: user?.email,
        publishDate: new Date().toLocaleDateString(),
        tags: data?.tags.split(' '),
      })
    );

    const response = await axios.post('/teacher/publishVideo', formData);
    console.log(response.data);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full space-y-6">
      <h1>Publish your video now</h1>
      <form
        onSubmit={handleSubmit(handlePublishVideo)}
        className="space-y-6 flex flex-col w-full md:w-[500px]"
      >
        {/* title for your video */}
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

        {/* description of your video */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('desc', { required: true })}
          placeholder="Write a description within 50 words"
        />

        {/* tags */}
        <input
          type="text"
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('tags', { required: true })}
          placeholder="Add tags with space seperated"
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

export default PublishVideo;
