import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

const AddAppointment = () => {
  const user = useSelector((state) => state.user.user);

  const {
    formState: { errors },
    register,
    handleSubmit,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    fetch(
      'https://digital-village.herokuapp.com/availableAppointment/saveAppointment',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    )
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
            swal('Service Added', {
              icon: 'success',
            });
          }
        });
      });
  };
  return (
    <div
      className="add-events-main my-40 lg:flex  lg:mx-32 md:mx-32 
        mx-0 border rounded-2xl"
    >
      <div>
        <h1 className="ml-10 mt-6 text-3xl ">Give Your Information</h1>
        <form
          className=" space-y-6 mx-10 mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('service', {
              required: 'Service is Required',
              pattern: /^[A-Za-z]+$/i,
              maxLength: 20,
            })}
            onKeyUp={() => {
              trigger('service');
            }}
            placeholder="Service Name"
          />
          <input
            className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('description', {
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
            placeholder="Write Service description"
            required
            onKeyUp={() => {
              trigger('description');
            }}
          />
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('time', { required: true })}
            placeholder="time(am to pm)"
          />
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('price', {
              required: 'price is Required',
              min: {
                value: 5,
                message: 'Minimum Required price is 5',
              },
              max: {
                value: 500000,
                message: 'Maximum allowed price is 50000',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Only numbers are allowed',
              },
            })}
            onKeyUp={() => {
              trigger('price');
            }}
            placeholder="Cost($)"
          />
          {errors.price && (
            <small className="text-danger">{errors.price.message}</small>
          )}

          {/* submit button */}
          <input
            className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            type="submit"
            value="ADD"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
