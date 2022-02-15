import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../../assets/banner.png';
import useAuth from '../../../../hooks/useAuth';
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    processSignUp,
    setAuthError,
    authError,
    processSignInWithGoogle,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect_uri = location?.state?.form || '/';

  const handleGoogleRegister = () => {
    processSignInWithGoogle(navigate, redirect_uri);
  };

  const handleRegister = async ({ firstName, lastName, email, password }) => {
    const name = `${firstName} ${lastName}`;
    console.log({ name, email, password });
    // const result = await processSignUp(name, email, password, navigate);
    // reset();
  };

  // clear error messages
  const handleError = () => {
    setAuthError('');
  };

  return (
    <div className="">
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 md:w-1/2 sm:w-auto bg-white">
          <div className="pt-48 mx-10 text-center lg:mx-48 space-y-4 mb-3">
            <h3 className="capitalize">Create an Account</h3>
            <p className="space-x-2">
              <span>Already Registered?</span>
              <Link to="/login">
                <span className="text-primary">Log In</span>
              </Link>
            </p>
            <button
              onClick={handleGoogleRegister}
              className="flex bg-primary hover:bg-opacity-80 rounded-lg py-2 px-10 lg:w-full md:w-96 items-center w-full mx-auto text-white"
            >
              <BsGoogle
                className="h-8 w-8 hover:scale-110 hover:text-secondary mx-3"
                aria-hidden="true"
              />
              <p className="sm:text-center ">Sign Up With Google</p>
            </button>

            <p>or</p>
          </div>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className=" lg:mx-48 mx-10 space-y-6"
          >
            {/* name */}
            <div className="flex gap-4">
              {/* first name */}
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('firstName', { required: true, maxLength: 20 })}
                placeholder="First Name"
              />

              {/* last name */}
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
                placeholder="Last Name"
              />
            </div>

            {/* email */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('email')}
              placeholder="Email"
            />

            {/* password */}
            <input
              type="password"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('password')}
              placeholder="Password"
            />

            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Signup with Email"
            />
          </form>
        </div>
        <div className="w-1/2 hidden md:block">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
