import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';
import { giveAlert } from '../../../../utilities/alert';

const PublishVideo = () => {
  const [file, setFile] = useState({});
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
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
    if (response.data && response.data.length >= 1) {
      giveAlert('Your blog published successfully', 'success');
      reset();
      setFile({});
    } else {
      giveAlert('Failed to publish', 'error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-3">
      <h1>Publish your video now</h1>
      <form
        onSubmit={handleSubmit(handlePublishVideo)}
        className="space-y-6 flex flex-col w-full md:w-[500px]"
      >
        {/* title for your video */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title', { required: 'Title is Required' })}
          onKeyUp={() => {
            trigger('title');
          }}
          placeholder="Title for your video"
        />
        {errors.title && (
          <small className="text-danger">{errors.title.message}</small>
        )}

        {/* file upload */}
        <div>
          <FileUpload onDrop={onDrop} file={file} message="Upload Your video" />
        </div>

        {/* description of your video */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('desc', {
            required: 'Description is Required',
            minLength: {
              value: 50,
              message: 'Minimum Required length is 50',
            },
            maxLength: {
              value: 100,
              message: 'Maximum allowed length is 100',
            },
          })}
          placeholder="Write a description within 50 words"
          onKeyUp={() => {
            trigger('desc');
          }}
        ></textarea>
        {errors.desc && (
          <small className="text-danger">{errors.desc.message}</small>
        )}

        {/* tags */}
        <input
          type="text"
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('tags', { required: 'Tags is Required' })}
          onKeyUp={() => {
            trigger('tags');
          }}
          placeholder="Add tags with space seperated"
        />
        {errors.tags && (
          <small className="text-danger">{errors.tags.message}</small>
        )}

        {/* submit button */}
        <input
          className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
          type="submit"
          value="Publish"
        />
      </form>
    </div>
  );
};

export default PublishVideo;
