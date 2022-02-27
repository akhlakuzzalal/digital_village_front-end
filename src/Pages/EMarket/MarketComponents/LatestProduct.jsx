import React from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from '../../../redux/slices/eMarket/cartSlice';
import handleCart from './Cart/handleCart';

const LatestProduct = ({ lastProduct }) => {
  const dispatch = useDispatch();
  const { name, id, img, price } = lastProduct;
  // Product add to cart
  const { handleAlert, handleAddCart } = handleCart();
  const AddCart = () => {
    const cartItem = handleAddCart(id, name, img, price);
    dispatch(setCart(cartItem));
    handleAlert();
  };
  return (
    <div
      className="mt-6 shadow-md rounded-lg overflow-hidden p-4 md:p-0"
      style={{ height: '88%' }}
    >
      <div
        className="w-full h-64 md:h-3/6 rounded-t-lg bg-cover bg-no-repeat hover:scale-105 transition-all duration-300"
        style={{ backgroundImage: `url('${lastProduct.img}')` }}
      ></div>
      <div className="text-center mt-6 mx-8">
        <h6>{lastProduct.title}</h6>
        <h6 className="text-yellow-500">$ {lastProduct.price}</h6>
        <p>{lastProduct.description.slice(0, 120)}</p>
      </div>
      <div className="w-full flex justify-center mt-6">
        <button
          onClick={AddCart}
          className="px-8 rounded-full py-2 bg-secondary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default LatestProduct;
