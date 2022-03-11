import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const DonarForm = (props) => {
  const { _id, title, image, goal, category } = props;
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const purchase = (data) => {
    const info = {
      product_name: title,
      product_profile: category,
      product_image: image,
      total_amount: goal,
      cus_name: user?.displayName,
      cus_email: user?.email,
    };
    fetch(`https://digital-village.herokuapp.com/sslpayment/init`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(purchase)} className="space-y-6">
        {/* name */}
        <div className="flex gap-4">
          {/* first name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('firstName', {
              required: 'Name is Required',
              pattern: /^[A-Za-z]+$/i,
              maxLength: 20,
            })}
            onKeyUp={() => {
              trigger('firstName');
            }}
            placeholder="First Name"
          />
          {errors.firstName && (
            <small className="text-danger">{errors.firstName.message}</small>
          )}

          {/* last name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('lastName', {
              required: 'Name is Required',
              pattern: /^[A-Za-z]+$/i,
              maxLength: 20,
            })}
            onKeyUp={() => {
              trigger('lastName');
            }}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <small className="text-danger">{errors.lastName.message}</small>
          )}
        </div>

        {/* email */}
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

        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        {/* Message */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('message', {
            required: 'Message is Required',
            minLength: {
              value: 10,
              message: 'Minimum Required length is 10',
            },
            maxLength: {
              value: 50,
              message: 'Maximum allowed length is 50 ',
            },
          })}
          onKeyUp={() => {
            trigger('message');
          }}
        ></textarea>
        {errors.message && (
          <small className="text-danger">{errors.message.message}</small>
        )}
        {/* Address */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
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
        {/* house no and zip code */}
        <div className="flex gap-4">
          {/* House no */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('houseno', {
              required: 'House no is Required',
              maxLength: 10,
            })}
            onKeyUp={() => {
              trigger('houseno');
            }}
            placeholder="House no"
          />
          {errors.houseno && (
            <small className="text-danger">{errors.houseno.message}</small>
          )}

          {/* Post code */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('postcode', { required: true, maxLength: 10 })}
            placeholder="Post code"
          />
        </div>
        <div className="flex items-center justify-center">
          {/* Address */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('amount', {
              required: 'Amount is Required',
              min: {
                value: 49,
                message: 'Minimum Required amount is 49',
              },
              max: {
                value: 50000,
                message: 'Maximum allowed amount is 50000',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Only numbers price allowed',
              },
            })}
            onKeyUp={() => {
              trigger('amount');
            }}
            type="number"
            defaultValues={50}
            placeholder="Amount"
          />
          {errors.amount && (
            <small className="text-danger">{errors.amount.message}</small>
          )}
        </div>

        <input
          className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Ready for Donation Payment"
        />
      </form>
    </div>
  );
};

export default DonarForm;
