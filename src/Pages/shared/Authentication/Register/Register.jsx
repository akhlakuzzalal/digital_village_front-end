import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../../../assets/banner.png';
const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="">
        <div className="flex">
          <div className="w-1/2 bg-white">
            <div>
              <h1>Creat an Accound</h1>
              <p className="my-3">
                Already Registered? <Link to="/login">Log In</Link>
              </p>
            </div>
            <form
              className="border-2 mx-32 my-80"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="px-7 py-3 mx-3 my-3 bg-gray-100 w-48"
                {...register('firstName', { required: true, maxLength: 20 })}
                placeholder="First Name"
              />
              <input
                className="px-7 py-3 mx-3 my-3 bg-gray-100 w-48"
                {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
                placeholder="Last Name"
              />

              <input
                className="px-7 py-3 mx-3 my-3 w-96 bg-gray-100"
                {...register('email')}
                placeholder="Email"
              />
              <input
                className="px-7 py-3 mx-3 my-3 w-96 bg-gray-100"
                {...register('email')}
                placeholder="DropDown"
              />

              <input
                className="bg-primary px-20 py-3"
                type="submit"
                value="Signup with Email"
              />
            </form>
          </div>
          <div className="w-1/2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

{
  /* <form className=" border-2 mx-32 my-80">
          <div className="flex">
            <input
              className="px-7 py-3 mx-3 my-3 bg-gray-100 w-48"
              type="text"
              class="peer ..."
              placeholder="First Name"
            />
            <input
              className="px-7 py-3 mx-3 my-3 bg-gray-100 w-48"
              type="text"
              class="peer ..."
              placeholder="Second Name"
            />
          </div>
          <input
            className="px-7 py-3 mx-3 my-3 w-96 bg-gray-100"
            type="email"
            class="peer ..."
            placeholder="Your Email"
          />

         
        </form> */
}
