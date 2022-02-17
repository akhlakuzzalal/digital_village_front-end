import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const TeacherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <form className=" space-y-6 mt-10 w-1/2 mx-auto" onSubmit="">
        {/* email */}
        <input
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('title')}
          placeholder="title"
        />
        <input
          className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('description')}
          placeholder="description"
        />
        <input
          type="Date"
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('date')}
          placeholder="title"
        />
        <input
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
          {...register('title')}
          placeholder="title"
        />
        <input
          className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title')}
          placeholder="title"
        />

        {/* submit button */}
        <input
          onClick={() => navigate('/teacherDashboard')}
          className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Go to dashboard"
        />
      </form>
    </div>
  );
};

export default TeacherInfo;
