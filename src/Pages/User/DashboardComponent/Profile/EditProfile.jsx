import React from 'react';
import { useForm } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import FileUpload from '../../../../Components/FileUpload';

const EditProfile = ({ setEditProfile, handleUpdateProfile, onDrop, file }) => {
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

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
              {...register('name', { required: 'Name is Required' })}
              onKeyUp={() => {
                trigger('name');
              }}
              defaultValue={user?.name}
              placeholder="User Name"
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
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
              {...register('phone', {
                required: 'Phone is Required',
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: 'Invalid phone no',
                },
              })}
              onKeyUp={() => {
                trigger('phone');
              }}
              defaultValue={user?.phone}
              placeholder="Phone Number"
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
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
