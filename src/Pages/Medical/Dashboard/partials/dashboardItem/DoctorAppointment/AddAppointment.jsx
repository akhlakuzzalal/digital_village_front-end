import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import axios from '../../../../../../api/axios';

const AddAppointment = () => {
  const user = useSelector((state) => state.user.user);

  const {
    formState: { errors },
    register,
    handleSubmit,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('/availableAppointment/saveAppointment', data)
      .then((response) => {
        if (response?.data) {
          swal('appointment added', {
            icon: 'success',
          });
        } else {
          swal('failed to add', {
            icon: 'error',
          });
        }
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
            {...register('appointment', {
              required: 'appointment name is required',
              maxLength: {
                value: 30,
                message: "Don't exceed 30 letters",
              },
            })}
            placeholder="Appointment Name"
          />
          {errors.appointment && (
            <small className="text-danger">{errors.appointment.message}</small>
          )}

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
            type="time"
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('time', { required: true })}
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
