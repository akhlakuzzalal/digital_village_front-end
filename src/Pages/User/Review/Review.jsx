import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from '../../../api/axios';
import useFirebase from '../../../hooks/useFirebase';
import MyReview from './MyReview/MyReview';

const Review = () => {
  const { user } = useFirebase();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    trigger,
  } = useForm();

  const handleAddReview = (data) => {
    data.email = user?.email;
    const response = axios.post('/userReview/addReview', data)
    .then(response=>console.log(response.data))
    

    reset();
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Your Review is Successfully Save',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div
      className="bg-cover h-[100%]  w-[100%]bg-no-repeat md:pb-10 "
      style={{
        backgroundImage: `url(https://st2.depositphotos.com/3467927/6010/i/600/depositphotos_60107233-stock-photo-businessman-pushing-button-five-star.jpg)`,
      }}
    >
      <div className=" pb-10 pt-14 md:pt-24  dark:dark-card-bg  rounded-2xl">
        {/* add Review form */}
        <div className="w-full">
          <h1 className=" text-center pt-12  text-4xl md:text-5xl text-white ">
            Add Review
          </h1>
          <form
            className=" space-y-6 w-full md:w-1/2 mx-auto mt-10"
            onSubmit={handleSubmit(handleAddReview)}
          >
            {/* email */}
            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('name')}
              placeholder="Name"
              defaultValue={user?.displayName}
              required
            />
            <input
              className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('description', {
                required: 'Description is Required',
                minLength: {
                  value: 20,
                  message: 'Minimum Required length is 50',
                },
                maxLength: {
                  value: 250,
                  message: 'Maximum allowed length is 250 ',
                },
              })}
              placeholder="Description"
              onKeyUp={() => {
                trigger('description');
              }}
            />
            {errors.description && (
              <small className="text-danger">
                {errors.description.message}
              </small>
            )}

            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('image', { required: 'Image is Required' })}
              onKeyUp={() => {
                trigger('image');
              }}
              placeholder="Image URL"
              required
            />
            {errors.image && (
              <small className="text-danger">{errors.image.message}</small>
            )}

            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('rating', {
                required: 'Rating is Required',
                min: {
                  value: 1,
                  message: 'Minimum Required rating is 1',
                },
                max: {
                  value: 5,
                  message: 'Maximum allowed rating is 5',
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Only numbers are allowed',
                },
              })}
              onKeyUp={() => {
                trigger('rating');
              }}
              placeholder="Rating in between one to five"
              required
            />
            {errors.rating && (
              <small className="text-danger">{errors.rating.message}</small>
            )}

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-6 rounded-lg text-xl  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Submit Review"
            />
          </form>
        </div>

        {/* My Review */}
      </div>
      <div className=" py-10 md:mt-10">
        <h1 className="text-center pb-4 text-white">My Review</h1>
        <MyReview />
      </div>
    </div>
  );
};

export default Review;
