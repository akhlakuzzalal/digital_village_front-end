import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import FileUpload from '../../../../Components/FileUpload';

const EditProfile = ({ setEditProfile }) => {
  const [file, setFile] = useState({});
  const user = useSelector((state) => state.user.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleUpdateProfile = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'profile',
      JSON.stringify({
        ...data,
      })
    );

    // const response = await axios.post('/teacher/publishBlogs', formData);
    // console.log(response.data);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-full space-y-6">
      <div className="flex justify-between items-center w-full">
        <BiArrowBack
          className="cursor-pointer"
          size={25}
          onClick={() => setEditProfile(false)}
        />
        <h3>Edit your profile</h3>
      </div>
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="space-y-6 mx-auto"
      >
        <div className="flex items-center justify-evenly">
          <div className="space-y-6">
            {/* file upload */}
            <div>
              <FileUpload
                onDrop={onDrop}
                file={file}
                message="Upload your Profile"
              />
            </div>
            {/* user name */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('name', { required: true })}
              defaultValue={user?.name}
              placeholder="User Name"
            />

            {/*date of birth */}
            <input
              type="date"
              defaultValue={user?.dateOfBirth}
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('dateOfBirth', {
                required: true,
              })}
            />

            {/* Phone number */}
            <input
              type="text"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('phone', { required: true })}
              defaultValue={user?.phone}
              placeholder="Phone Number"
            />
          </div>
        </div>
        {/* submit button */}
        <input
          className={`btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300 ${
            !watch('name') && 'cursor-not-allowed'
          }`}
          disabled={!watch('name')}
          type="submit"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default EditProfile;
