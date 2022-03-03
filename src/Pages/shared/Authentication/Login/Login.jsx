import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import Lottie from 'react-lottie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/registration.json';
const Login = () => {
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

  const handleLogin = async ({ email, password }) => {
    await processSignIn(email, password, location, navigate);
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
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="flex-1 px-3">
        <div className="pt-36 md:mx-10 text-center lg:mx-48 space-y-4 mb-3">
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
            className="btn bg-primary flex items-center text-sm rounded-lg mx-auto hover:bg-opacity-80 transition-all duration-300 w-full"
          >
            <BsGoogle
              className="h-8 w-8 hover:scale-110 hover:text-secondary mx-3"
              aria-hidden="true"
            />
            <p className="text-center ">Continue With Google</p>
          </button>

          <p>or</p>
        </div>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-6 max-w-[500px] mx-auto"
        >
          {/* email */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Please provide correct email address.',
              },
            })}
            placeholder="Email"
            type="email"
          
          />
          {errors.email && (
              <p className="text-error mb-2">{errors.email.message}</p>
            )}

          {/* password */}
          <input
            type="password"
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            placeholder="Password"
            required
          />

          {/* submit button */}
          <input
            className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
            type="submit"
            value="Login with Email"
          />
        </form>
      </div>

      <div className="hidden md:block w-full md:w-1/2 px-3 pt-24 pointer-events-none">
        <div className="w-fit mx-auto">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={isDesktop ? 500 : isTablet ? 400 : 300}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
