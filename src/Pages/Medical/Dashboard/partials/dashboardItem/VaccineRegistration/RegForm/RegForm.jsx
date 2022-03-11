import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const RegForm = () => {
  const user = useSelector((state) => state.user.user);

  const {
    formState: { errors },
    register,
    handleSubmit,
    trigger,
  } = useForm();
  const email = user.email;
  const name = user.name;
  const navigate = useNavigate();
  const redirect_uri = '/medicalDashboard/pdf';

  const onSubmit = (data) => {
    fetch('http://localhost:5000/vaccine/addInfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: 'Want to proceed?',
          // text: 'Once deleted, you will not be able to recover this imaginary file!',
          icon: 'warning',

          buttons: true,
        }).then((willConfirm) => {
          if (willConfirm) {
            console.log('ok');
            swal('Registration Done', {
              icon: 'success',
            });
          }
        });
      });
    navigate(redirect_uri);
  };

  return (
    <>
      <div className="add-events-main my-40 lg:flex  lg:mx-32 md:mx-32 mx-0 border rounded-2xl">
        <div>
          <h1 className="ml-10 mt-6 text-3xl ">Give Your Information</h1>
          <form
            className=" space-y-6 mx-10 mt-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* email */}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('email', {
                required: 'Email is Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              onKeyUp={() => {
                trigger('email');
              }}
              value={email}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('name', { required: 'Name is Required' })}
              onKeyUp={() => {
                trigger('name');
              }}
              placeholder="Full Name"
              value={name}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('fatherName', { required: 'Name is Required' })}
              onKeyUp={() => {
                trigger('fatherName');
              }}
              placeholder="Father Name"
            />
            {errors.fatherName && (
              <small className="text-danger">{errors.fatherName.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('motherName', { required: 'Name is Required' })}
              onKeyUp={() => {
                trigger('motherName');
              }}
              placeholder="Mother Name"
            />
            {errors.motherName && (
              <small className="text-danger">{errors.motherName.message}</small>
            )}
            <input
              type="Date"
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('date')}
              placeholder="Birth date"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('nid', {
                required: 'NID is Required',
                // min: {
                //   value: 12,
                //   message: 'Minimum Required age is 12',
                // },
                // max: {
                //   value: 18,
                //   message: 'Maximum allowed age is 18',
                // },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Only numbers are allowed',
                },
              })}
              onKeyUp={() => {
                trigger('nid');
              }}
              placeholder="NID"
            />
            {errors.nid && (
              <small className="text-danger">{errors.nid.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('mobile', {
                required: 'Phone is Required',
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: 'Invalid phone no',
                },
              })}
              onKeyUp={() => {
                trigger('mobile');
              }}
              placeholder="Contact"
            />
            {errors.mobile && (
              <small className="text-danger">{errors.mobile.message}</small>
            )}

            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('address', {
                required: 'Address is Required',
                pattern: /^[A-Za-z]+$/i,
                maxLength: 50,
              })}
              onKeyUp={() => {
                trigger('address');
              }}
              placeholder="Full address"
            />
            {errors.address && (
              <small className="text-danger">{errors.address.message}</small>
            )}
            {/* submit button */}
            <input
              className=" hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              style={{
                backgroundColor: '#10217d',
                color: 'white',
              }}
              type="submit"
              value="Confirm"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegForm;
