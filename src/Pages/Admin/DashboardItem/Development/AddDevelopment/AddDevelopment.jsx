import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../../api/axios';
import FileUpload from '../../../../../Components/FileUpload';
import { giveAlert } from '../../../../../utilities/alert';

const AddDevelopment = () => {
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [file, setFile] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleAddDevelopment = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'development',
      JSON.stringify({
        ...data,
      })
    );

    const response = await axios.post(
      'http://localhost:5000/development/addDevelopment',
      formData
    );
    console.log(response.data);
    if (response && response.data.length >= 1) {
      giveAlert('Your proposal published', 'success');
      reset();
    } else {
      giveAlert('Something went wrong', 'error');
    }
  };

  return (
    <div>
      <h1>Give Your development proposal</h1>
      <form
        onSubmit={handleSubmit(handleAddDevelopment)}
        className="space-y-6 md:w-2/4"
      >
        <div className="flex flex-wrap gap-4 items-center justify-evenly bg-primary">
          {/* title of the blog */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('title', { required: true })}
            placeholder="Title of your Development"
          />

          {/* file upload */}
          <div className="w-full">
            <FileUpload
              onDrop={onDrop}
              file={file}
              message="Upload a banner for your Development"
            />
          </div>

          {/* about the blog */}
          <textarea
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('description', { required: true })}
            placeholder="Write Development Description"
          />

          {/* tags */}
          <input
            type="Date"
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('constructionDate', { required: true })}
            placeholder="Write your Construction Date"
          />
        </div>
        {/* submit button */}
        <input
          className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default AddDevelopment;
