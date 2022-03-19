import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateACause } from '../../../redux/slices/Donations/donationSlice';
const UpdateCause = () => {
  const { id } = useParams();
  const causes = useSelector((state) => state.donation.causes);
  // console.log(causes, id);
  const cause = causes.find((c) => c._id === id);
  // console.log(cause._id);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const handleUpdateCause = (data) => {
    data.id = id;
    dispatch(updateACause(data));
    // console.log(newData);
    Swal.fire({
      title: 'Donation Cause has been updated',
      confirmButtonText: 'Okay',
    });
  };
  // title image description category goal date author
  return (
    <div
      className="flex justify-center items-center mx-auto  mt-[80px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div className="justify-center items-center min-h-full  space-y-10">
        <h3 className="text-center space-y-2 text-sm md:text-xl  lg:text-2xl">
          Update a new Cause
        </h3>
        <form
          onSubmit={handleSubmit(handleUpdateCause)}
          className="space-y-6 mt-10 w-full md:w-1/2  mx-auto"
        >
          {/* title */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('title', { required: 'Title is Required' })}
            onKeyUp={() => {
              trigger('title');
            }}
            placeholder="Title"
            defaultValue={cause.title}
          />
          {errors.title && (
            <small className="text-danger">{errors.title.message}</small>
          )}
          {/* image */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('image', { required: 'Image link is Required' })}
            onKeyUp={() => {
              trigger('image');
            }}
            placeholder="Image link"
            defaultValue={cause.image}
          />
          {errors.image && (
            <small className="text-danger">{errors.image.message}</small>
          )}
          {/* description */}
          <textarea
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('description', {
              required: 'Description is Required',
              minLength: {
                value: 200,
                message: 'Minimum Required length is 200',
              },
              maxLength: {
                value: 1500,
                message: 'Maximum allowed length is 1500',
              },
            })}
            placeholder="Description"
            defaultValue={cause.description}
            onKeyUp={() => {
              trigger('description');
            }}
          ></textarea>
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}

          <div className="flex items-center justify-center">
            {/* category */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
              {...register('category', { required: 'Category is Required' })}
              onKeyUp={() => {
                trigger('title');
              }}
              placeholder="Category here"
              defaultValue={cause.category}
            />
            {errors.category && (
              <small className="text-danger">{errors.category.message}</small>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* goal */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
              {...register('goal', {
                required: 'Goal is Required',
                min: {
                  value: 1000,
                  message: 'Minimum Required age is 1000',
                },
                max: {
                  value: 50000,
                  message: 'Maximum allowed age is 50000',
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Only numbers are allowed',
                },
              })}
              type="number"
              placeholder="Goal"
              defaultValue={cause.goal}
              onKeyUp={() => {
                trigger('goal');
              }}
            />
            {errors.goal && (
              <small className="text-danger">{errors.goal.message}</small>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* category */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
              {...register('date', { required: true })}
              placeholder="date"
              defaultValue={new Date().toLocaleDateString()}
            />
          </div>
          <input
            className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCause;
