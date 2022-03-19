import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import PayModal from '../../../../Components/Pay/PayModal';
import { giveDonation } from '../../../../redux/slices/Donations/donationSlice';

const DonarForm = ({ cause }) => {
  const uId = useSelector((state) => state.user.uId);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  // const purchase = (data) => {
  //   const info = {
  //     product_name: title,
  //     product_profile: category,
  //     product_image: image,
  //     total_amount: goal,
  //     cus_name: user?.displayName,
  //     cus_email: user?.email,
  //   };
  //   fetch(`https://digital-village.herokuapp.com/sslpayment/init`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       window.location.replace(data);
  //     });
  //   dispatch(setPayModal(true));
  //   swal({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Your payment has been successfull',
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // };

  const handleGiveDonation = async (data) => {
    dispatch(giveDonation({ data, uId, causeId: cause?._id })).then(() => {
      Swal.fire({
        title: 'updated successfully',
        confirmButtonText: 'Okay',
      });
    });
    // const response = await axios.put('/donationCause/take', {
    //   ...data,
    //   donarId: uId,
    //   causeId: cause?._id,
    // });
    // console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleGiveDonation)} className="space-y-6">
        <select
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('amount')}
        >
          <option defaultValue="500">500</option>
          <option value="1000">1000</option>
          <option value="5000">5000</option>
          <option value="10000">10000</option>
          <option value="20000">20000</option>
          <option value="30000">30000</option>
          <option value="40000">40000</option>
          <option value="50000">50000</option>
        </select>

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
