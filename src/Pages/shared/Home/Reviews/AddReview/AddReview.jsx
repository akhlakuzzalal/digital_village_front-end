import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../../../assets/events/images.png';
import { addAReview } from '../../../../../redux/slices/review/reviewSlice';
const AddReview = () => {
  const user = useSelector((state) => state.user.user);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    trigger,
  } = useForm();
  const dispatch = useDispatch();
  const handleAddReview = (data) => {
    dispatch(addAReview(data));
    alert('successfully added');
    reset();
  };
  return (
    <div className=" lg:flex border rounded-2xl">
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
          {/* name */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('name', { value: user?.name })}
            placeholder="Name"
            disabled
          />
          {/* desc */}
          <input
            className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('description')}
            placeholder="description"
          />
          {/* image */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('image')}
            placeholder="Image URL"
          />
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('rating')}
            placeholder="Rating in between one to five"
          />

          {/* submit button */}
          <input
            className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            type="submit"
            value="Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
