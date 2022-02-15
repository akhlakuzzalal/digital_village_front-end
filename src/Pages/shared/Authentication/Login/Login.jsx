import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img from '../../../../assets/banner.png';
import Header from '../../Home/Header/Header';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Header></Header>
      <div className="">
        <div className="lg:flex md:flex">
          <div className="lg:w-1/2 md:w-1/2 sm:w-auto bg-white">
            <div className="pt-48 mx-10 text-center lg:mx-48 ">
              <h3 className="">Welcome to digital village</h3>
              <p className="my-3">
                Dont Have an account?
                <Link to="/signup">
                  <span className="text-primary">Sign up for free</span>{' '}
                </Link>
              </p>
              <button className="flex bg-primary rounded-lg py-2 px-10 lg:w-full md:w-96 items-center w-full mx-auto">
                <BsGoogle
                  className="h-8 w-8 hover:scale-110 hover:text-secondary mx-3"
                  aria-hidden="true"
                />
                <p className="sm:text-center ">Continue With Google</p>
              </button>

              <p>or</p>
            </div>

            <form
              className=" lg:mx-48 mx-10 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="px-7 py-3  my-3  bg-gray-100 w-full"
                {...register('email')}
                placeholder="Email"
              />
              <input
                type="password"
                className="px-7 py-3 my-3  bg-gray-100 w-full"
                {...register('password')}
                placeholder="Password"
              />

              <input
                className="bg-primary px-20 py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20"
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
    </>
  );
};

export default Login;
