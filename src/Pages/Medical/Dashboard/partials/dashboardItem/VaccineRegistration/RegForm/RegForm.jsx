import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import img from '../../../../../../../assets/events/Add events.PNG';
const RegForm = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const redirect_uri = '/medical/pdf';
  const handleSubmit = (data) => {
    swal({
      title: 'want to proceed?',
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        navigate(redirect_uri);
      }
    });
    // console.log(data);
    // fetch('https://polar-springs-14002.herokuapp.com/services', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire('Good job!', 'Added Successfully', 'success');
    //       reset();

    //     }
    //   });
  };

  return (
    <>
      <div className="add-events-main my-40 lg:flex  lg:mx-32 md:mx-32 mx-0 border rounded-2xl">
        <div>
          <img
            className="lg:h-[780px] md:h-[580px] lg:w-[1000px] md:w-[1000px] w-[100%] h-[300px]"
            src={img}
            alt=""
          />
        </div>
        {/* add event form */}
        <div>
          <h1 className="ml-10 mt-6 text-3xl ">Give Your Information</h1>
          <form className=" space-y-6 mx-10 mt-10" onSubmit={handleSubmit}>
            {/* email */}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('name')}
              placeholder="Your Full Name"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('fatherName')}
              placeholder="Your father's Name"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('motherName')}
              placeholder="Your Mother's Name"
            />
            <input
              type="Date"
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('date')}
              placeholder="date"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('NID number')}
              placeholder="Your NID Number"
            />

            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('place')}
              placeholder="Place"
            />

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
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
