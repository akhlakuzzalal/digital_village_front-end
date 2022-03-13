import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import PayModal from '../../../Components/Pay/PayModal';
import { setPayModal } from '../../../redux/slices/payModal/PayModalSlice';

const DonarForm = (props) => {
  const { _id, title, image, goal, category } = props;
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

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
    dispatch(setPayModal(true));
    swal({
      position: 'top-end',
      icon: 'success',
      title: 'Your payment has been successfull',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(purchase)} className="space-y-6">
        {/* name */}
        <div className="flex flex-col  md:flex-row gap-4 w-full ">
          {/* first name */}
          <div className='w-full md:w-1/2'>
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
          </div>

          {/* last name */}
          <div className='w-full md:w-1/2'>
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
        </div>
        {/* email */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('email', {
            required: 'Email required',
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
          <p className="text-danger">{errors.message.message}</p>
        )}
        {/* Address */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('address', { required: "Address is Required" , maxLength: 50  })}
          onKeyUp={() => {
            trigger('address');
          }}
          placeholder="Full address"
        />
        {errors.address && (
          <p className="text-danger">{errors.address.message}</p>
        )}
        {/* house no and zip code */}
        <div className="flex flex-col  md:flex-row gap-4 w-full ">
          {/* fHouse no */}
          <div className='w-full md:w-1/2'>
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
            <p className="text-danger">{errors.houseno.message}</p>
          )}
          </div>

          {/* last name */}
          <div className='w-full md:w-1/2'>
         {/* Post code */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('postcode', { required: "Postcode no is Required", maxLength: 10  })}
            onKeyUp={() => {
              trigger("postcode");
            }}
            placeholder="Postcode no"
          />
          {errors.postcode && (
            <p className="text-danger">{errors.postcode.message}</p>
          )}
          </div>
        </div>
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('amount',
            {
              required: "Amount is Required",
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
            type="number"
            defaultValues={50}
            placeholder="Amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        {/* </div> */}

        <input
          className="bg-primary text-sm hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Ready for Donation Payment"
        />
      </form>
      <PayModal price={60} id={12} returnPage="donation" />
    </div>
  );
};

export default DonarForm;
