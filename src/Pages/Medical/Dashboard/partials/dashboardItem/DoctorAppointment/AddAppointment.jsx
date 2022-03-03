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
  } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:5000/availableAppointment/saveAppointment', {
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
            {...register('service')}
            placeholder="Service name"
          />
          <input
            className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('description')}
            placeholder="Service Description"
          />
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('time')}
            placeholder="time(am to pm)"
          />
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('price')}
            placeholder="Cost($)"
          />

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
