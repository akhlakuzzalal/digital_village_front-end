import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PayModal from '../../../Components/Pay/PayModal';
import { setPayModal } from '../../../redux/slices/payModal/PayModalSlice';

const DonarForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const handleRegister = async ({
    firstName,
    lastName,
    email,
    amount,
    message,
    address,
  }) => {
    const name = `${firstName} ${lastName}`;
    console.log({ name, email, address, message, amount });
    dispatch(setPayModal(true));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
        {/* name */}
        <div className="flex gap-4">
          {/* first name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('firstName', { required: true, maxLength: 20 })}
            placeholder="First Name"
          />

          {/* last name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
            placeholder="Last Name"
          />
        </div>

        {/* email */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('email')}
          placeholder="Email"
        />
        {/* Message */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('message')}
          placeholder="Message"
        />
        {/* Address */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('address')}
          placeholder="Address"
        />
        {/* house no and zip code */}
        <div className="flex gap-4">
          {/* House no */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('houseno', { required: true, maxLength: 20 })}
            placeholder="House No"
          />

          {/* Post code */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('postcode', { required: true, maxLength: 20 })}
            placeholder="Post code"
          />
        </div>
        <div className="flex items-center justify-center">
          {/* Address */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('amount', { required: true, maxLength: 4 })}
            type="number"
            defaultValues={50}
            placeholder="Amount"
          />
        </div>

        <input
          className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Ready for Donation Payment"
        />
      </form>
      <PayModal price={120} id={2} returnPage={'donation'} />
    </div>
  );
};

export default DonarForm;