import { sendEmailVerification, updateProfile } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import Lottie from 'react-lottie';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/registration.json';
import { setUser } from '../../../../redux/slices/user/userSlice';

const Register = () => {
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

  const {
    processSignUp,
    setAuthError,
    authError,
    processSignInWithGoogle,
    setIsLoading,
    auth,
    registerToDB,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect_uri = location?.state?.form || '/';

  const handleGoogleRegister = () => {
    processSignInWithGoogle(navigate);
  };

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleRegister = async ({
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
  }) => {
    const name = `${firstName} ${lastName}`;
    const newUser = { name, email, password, dateOfBirth };
    try {
      processSignUp(newUser)
        .then((result) => {
          const {
            user: { emailVerified },
          } = result;

          setAuthError('');

          sendEmailVerification(auth.currentUser);

          const newUser = { name, email, dateOfBirth, emailVerified };

          dispatch(setUser(newUser));

          // register user to the database
          registerToDB({ name, email, dateOfBirth, password });

          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              reset();
              swal({
                text: `${name}, You have successfully logged in`,
                icon: 'success',
                confirm: 'Go and Explore',
                closeOnClickOutside: false,
              }).then(() => navigate(redirect_uri));
            })
            .catch((error) => setAuthError(error.message));
        })
        .catch((error) => {
          setAuthError(error.message);
          swal({
            text: error.message,
            icon: 'error',
          });
          console.log(error);
        })
        .finally(() => setIsLoading(false));
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  // clear error messages
  const handleError = () => {
    setAuthError('');
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: 'calc(100vh - 100px)' }}
    >
      <div className="flex-1 px-4">
        <div className="pt-24 md:mx-10 text-center lg:mx-48 space-y-4 mb-3">
          <h3 className=" text-center ">Create an Account</h3>
          <p className="space-x-2">
            <span>Already Registered?</span>
            <Link to="/login">
              <span className="text-primary">Log In</span>
            </Link>
          </p>

          {/* google sign in button */}
          <button
            onClick={handleGoogleRegister}
            className="btn bg-primary flex items-center text-sm rounded-lg mx-auto hover:bg-opacity-80 transition-all duration-300 w-full"
          >
            <BsGoogle
              className="h-8 w-8 hover:scale-125 mx-3"
              aria-hidden="true"
            />
            <p className="text-center">Sign Up With Google</p>
          </button>

          <p>or</p>
        </div>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-6 max-w-[500px] mx-auto"
        >
          {/* first name */}
          <div className="flex gap-4">
            <div>
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('firstName', {
                  required: 'required',
                  maxLength: {
                    value: 15,
                    message: "First Name shouldn't exceed 15 words",
                  },
                })}
                placeholder="First Name"
              />

              {errors.firstName && (
                <p className="text-danger">{errors.firstName.message}</p>
              )}
            </div>

            {/* last name */}
            <div>
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 w-full focus:border-primary transition-all duration-300 rounded-xl"
                {...register('lastName', {
                  required: 'required',
                  pattern: /^[A-Za-z\d]+$/i,
                  maxLength: {
                    value: 15,
                    message: "Last Name shouldn't exceed 15 words",
                  },
                })}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-danger">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* email */}
          <div>
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('email', {
                required: 'required',
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
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>

          {/* date of birth */}
          <div className="space-y-6 text-center">
            <p className="capitalize font-bold text-info">Your Date of Birth</p>
            <div>
              <input
                type="date"
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('dateOfBirth', {
                  required: 'required',
                })}
              />

              {errors.dateOfBirth && (
                <p className="text-danger">{errors.dateOfBirth.message}</p>
              )}
            </div>
          </div>

          {/* password */}
          <div>
            <input
              type="password"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('password', {
                required: 'this field is required',
                pattern: {
                  value: /(?=.*[!@#$&%^*])/,
                  message:
                    'please provide atleast one special charaters (@, # etc.)',
                },
                minLength: {
                  value: 6,
                  message: 'Your password should be at least 6 characters',
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>

          <input
            className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
            type="submit"
            value="Signup with Email"
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

export default Register;
