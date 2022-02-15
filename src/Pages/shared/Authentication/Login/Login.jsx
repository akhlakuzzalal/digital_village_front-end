import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../../assets/banner.png';
import useAuth from '../../../../hooks/useAuth';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect_uri = location?.state?.form || '/';

  const {
    setAuthError,
    processSignIn,
    authError,
    processSignInWithGoogle,
    setIsLoading,
  } = useAuth();

  const handleLogin = ({ email, password }) => {
    console.log({ email, password });
    // processSignIn(email, password, location, navigate);
    // reset();
  };

  const handleGoogleLogin = () => {
    processSignInWithGoogle(navigate, redirect_uri);
  };

  // clear error messages
  const handleError = () => {
    setAuthError('');
  };

  return (
    <div>
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 md:w-1/2 sm:w-auto bg-white">
          <div className="pt-48 mx-10 text-center lg:mx-48 space-y-4 mb-3">
            <h3 className="capitalize">Welcome to digital village</h3>
            <p className="space-x-2">
              <span>Don't Have an account?</span>
              <Link to="/register">
                <span className="text-primary">Sign up Now</span>
              </Link>
            </p>

            {/* google sign in button */}
            <button
              onClick={handleGoogleLogin}
              className="flex bg-primary hover:bg-opacity-80 rounded-lg py-2 px-10 lg:w-full md:w-96 items-center w-full mx-auto text-white"
            >
              <BsGoogle
                className="h-8 w-8 hover:scale-110 hover:text-secondary mx-3"
                aria-hidden="true"
              />
              <p className="sm:text-center ">Continue With Google</p>
            </button>

            <p>or</p>
          </div>

          <form
            className=" lg:mx-48 mx-10 space-y-6"
            onSubmit={handleSubmit(handleLogin)}
          >
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

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Login with Email"
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

export default Login;
