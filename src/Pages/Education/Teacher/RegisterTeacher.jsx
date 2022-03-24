import React from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../../../hooks/useMediaQuery';
import animationData from '../../../lotties/teacher-registration.json';
const RegisterTeacher = () => {
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const handleTeacherRegistration = async (data) => {
    const newTeacher = { ...data, isVerified: false };
    // const response = await axios.post('/teacher/addTeacher', newTeacher);
    // console.log(response?.data);

    navigate('/teacher');
    // after getting response from the teacher give him a message that he need to wait for verification.

    // also set the roles in redux store after verifying from admin dashboard
  };
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className=" min-h-[100vh] ">
      <h3 className="text-center text-xl md:text-5xl  mt-36 pb-10  text-blue-800">
        Please fill up the form to be a part of our mission
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <form
          className="space-y-6 mx-auto md:px-10 my-auto"
          onSubmit={handleSubmit(handleTeacherRegistration)}
        >
          {/* name */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg "
            {...register('name', { required: true, value: user?.name })}
            required
            disabled
          />

          {/* email */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('email', { required: true, value: user?.email })}
            required
            disabled
          />

          {/* highest qualification */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('qualification', {
              required: 'Qualification is Required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message:
                  'Invalid! Qualification: HSC, BSC, MSC or something else ',
              },
            })}
            onKeyUp={() => {
              trigger('qualification');
            }}
            placeholder="Highest qualification: HSC, BSC, MSC or something else"
          />
          {errors.qualification && (
            <small className="text-danger">
              {errors.qualification.message}
            </small>
          )}

          {/* gpa */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('gpa', {
              required: 'GPA is Required',
              min: {
                value: 1,
                message: 'Minimum Required GPA is 1',
              },
              max: {
                value: 5,
                message: 'Maximum allowed age is 5',
              },
              pattern: {
                value: /^[0-5._%+-]*$/,
                message: 'Only numbers are allowed',
              },
            })}
            placeholder="Acquired GPA"
            required
            onKeyUp={() => {
              trigger('gpa');
            }}
          />

          {errors.gpa && (
            <small className="text-danger">{errors.gpa.message}</small>
          )}

          {/* about yourself */}
          <textarea
            className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('about', {
              required: 'Message is Required',
              minLength: {
                value: 10,
                message: 'Minimum Required length is 10',
              },
              maxLength: {
                value: 50,
                message: 'Maximum allowed length is 150 ',
              },
            })}
            placeholder="Write about yourself"
            required
            onKeyUp={() => {
              trigger('about');
            }}
          ></textarea>
          {errors.about && (
            <small className="text-danger">{errors.about.message}</small>
          )}

          {/* submit button */}
          <input
            type="submit"
            className="bg-primary text-base hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            // className="bg-primary hover:bg-opacity-80 px-11 md:px-20 lg:px-20 py-2 rounded-lg  sm:mb-20 md:w-full lg:w-full mx-auto mb-20 cursor-pointer text-white"
            value="Register as a Teacher"
          />
        </form>
            <div className='md:-mt-64'>
            <Lottie
        className="w-full"
          options={defaultOptions}
          isClickToPauseDisabled={true}
          height={isDesktop ? 900 : isTablet ? 600 : 100}
          width={isDesktop ? 600 : isTablet ? 200 : 100}
          
        />
            </div>
      </div>
    </div>
  );
};

export default RegisterTeacher;
