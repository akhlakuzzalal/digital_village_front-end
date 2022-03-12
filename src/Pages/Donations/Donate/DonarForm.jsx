
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import PayModal from '../../../Components/Pay/PayModal';
import { setPayModal } from '../../../redux/slices/payModal/PayModalSlice';

const DonarForm = (props) => {
  const { _id} =props;
  // const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { register, handleSubmit, trigger,
    formState: { errors }
  } = useForm ();

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
    swal({
      position: 'top-end',
      icon: 'success',
      title: 'Your cause has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
 
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
        {/* name */}
        <div className="flex gap-4">
          {/* first name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('firstName', { required: "Name is Required" , pattern: /^[A-Za-z]+$/i , maxLength: 50 })}
            onKeyUp={() => {
              trigger("firstName");
            }}
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-danger mb-2">{errors.firstName.message}</p>
          )}

          {/* last name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('lastName', { required: "Name is Required" , pattern: /^[A-Za-z]+$/i , maxLength: 50 })}
            onKeyUp={() => {
              trigger("lastName");
            }}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-danger">{errors.lastName.message}</p>
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

        {errors.email && (
          <p className="text-danger">{errors.email.message}</p>
        )}
        {/* Message */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('message', { required: "Message is Required",
          minLength: {
            value: 10,
            message: "Minimum Required length is 10",
          },
          maxLength: {
            value: 50,
            message: "Maximum allowed length is 50 ",
          }
         })}
         onKeyUp={() => {
          trigger("message");
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
            trigger("address");
          }}
          placeholder="Full address"
        />
        {errors.address && (
          <p className="text-danger">{errors.address.message}</p>
        )}
        {/* house no and zip code */}
        <div className="flex gap-4">
          {/* House no */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('houseno', { required: "House no is Required", maxLength: 10  })}
            onKeyUp={() => {
              trigger("houseno");
            }}
            placeholder="House no"
          />
          {errors.houseno && (
            <p className="text-danger">{errors.houseno.message}</p>
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
            {...register('amount',
            {
              required: "Amount is Required",
              min: {
                value: 49,
                message: "Minimum Required amount is 49",
              },
              max: {
                value: 50000,
                message: "Maximum allowed amount is 50000",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "Only numbers price allowed",
              }
            })}
            onKeyUp={() => {
              trigger("amount");
            }}
            type="number"
            defaultValues={50}
            placeholder="Amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <input
          className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value= "Ready for Donation Payment"
        />

      </form>
      <PayModal price={50} id={1} returnPage={"/admin/paymentcauses"} />
    </div>
  );
};

export default DonarForm;