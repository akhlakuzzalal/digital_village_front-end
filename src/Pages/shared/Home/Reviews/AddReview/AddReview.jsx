import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import img from '../../../../../assets/events/images.png';
import useFirebase from '../../../../../hooks/useFirebase';
import { addAReview } from '../../../../../redux/slices/review/reviewSlice';
const AddReview = () => {
  const { user } = useFirebase();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,trigger
  } = useForm();
  const dispatch = useDispatch();
  const handleAddReview = (data) => {
    dispatch(addAReview(data));
    alert('successfully added');
    reset();
  };
  return (
    <>
      <div className="add-events-main my-40 lg:flex  lg:mx-32 md:mx-32 mx-0 border rounded-2xl">
        <div>
          <img
            className="lg:h-[580px] md:h-[580px] lg:w-[1000px] md:w-[1000px] w-[100%] h-[100px]"
            src={img}
            alt=""
          />
        </div>
        {/* add event form */}
        <div>
          <h1 className="ml-10 mt-6 text-3xl ">Add Review</h1>
          <form
            className=" space-y-6 mx-10 mt-10"
            onSubmit={handleSubmit(handleAddReview)}
          >
            {/* email */}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('name', { required: "Name is Required" , maxLength: {
                value: 30,
                message: "First Name shouldn't exceed 30 words",
              }})}
          
              onKeyUp={() => {
                trigger("name");
              }}
              placeholder="Name"
              defaultValue={user?.displayName}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
            <input
              className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('description', { required: "Message is Required",
              minLength: {
                value: 10,
                message: "Minimum Required length is 10",
              },
              maxLength: {
                value: 50,
                message: "Maximum allowed length is 150 ",
              }
             })}
             placeholder="Write Cause description"
              required
             onKeyUp={() => {
              trigger("description");
            }}
    
            />
            {errors.description && (
              <small className="text-danger">{errors.description.message}</small>
            )}

            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('image', { required: "Image is Required" })}
          
              onKeyUp={() => {
                trigger("image");
              }}
              placeholder="Add a image Link"
            />
            {errors.image && (
              <small className="text-danger">{errors.image.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('rating', {
                required: "Rating is Required",
                min: {
                  value: 1,
                  message: "Minimum Required age is 13",
                },
                max: {
                  value: 5,
                  message: "Maximum allowed age is 65",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                }
              })}
              onKeyUp={() => {
                trigger("rating");
              }}
              placeholder="Rating in between one to five"
            />
            {errors.rating && (
              <small className="text-danger">{errors.rating.message}</small>
            )}

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Confirm"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddReview;
