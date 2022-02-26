import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { removeFromCart } from '../../../../redux/slices/eMarket/cartSlice';

const TableBody = ({ data }) => {
  const dispatch = useDispatch();
  let [quantity, setQuantity] = useState(data.quantity);
  const quantityHandler = (method) => {
    switch (method) {
      case 'increase':
        setQuantity((quantity += 1));
        // data.quantity += 1;
        break;
      case 'decrease':
        if (quantity > 1) {
          setQuantity((quantity -= 1));
        }
        break;
      default:
        quantity = 1;
    }
  };
  // alert swl for remove items from cart
  const handleAlert = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        dispatch(removeFromCart(data));
        swal('Confirmed!', {
          icon: 'success',
        });
      }
    });
  };
  return (
    <tr class="bg-white border-b dark:bg-gray-800">
      {/* product name */}
      <td class="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap d">
        {data.name}
      </td>
      {/* product image */}
      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
        <img className="h-20 w-20" src={data.img} alt="" />
      </td>
      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
        {/* increase decrease btn */}
        <div className="flex items-center">
          <button
            onClick={() => quantityHandler('decrease')}
            className="inline px-2 text-xl hover:bg-primary hover:text-white h-full rounded-l-lg"
          >
            -
          </button>
          <p className="inline px-3 ">{quantity}</p>
          <button
            onClick={() => quantityHandler('increase')}
            className="inline px-2 text-xl hover:bg-primary hover:text-white h-full rounded-r-lg"
          >
            +
          </button>
        </div>
      </td>
      {/* price */}
      <td class="py-4 px-6 text-sm text-green-700 font-semibold whitespace-nowrap">
        $ {data.price}
      </td>
      {/* remove action */}
      <td class="py-4 px-6 text-sm font-medium text-right text-danger cursor-pointer whitespace-nowrap">
        <button onClick={handleAlert}>Remove</button>
      </td>
    </tr>
  );
};

export default TableBody;
