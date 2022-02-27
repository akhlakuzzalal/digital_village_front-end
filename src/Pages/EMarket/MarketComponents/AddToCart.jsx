import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';
import { MdDoneOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../../redux/slices/eMarket/modalSlicle';
import useCart from './Cart/useCart';

export default function AddToCart({ product }) {
  const { name, id, img, price, description } = product;
  // add a product in cart
  const { handleAddCart } = useCart();
  // redux state
  const showModal = useSelector((state) => state.market.modal.showModal);
  const dispatch = useDispatch();
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <img className="w-full h-4/5" src={img} alt="" />
                    <div>
                      <h3>{name}</h3>
                      <p>Our price</p>
                      <h6 className="text-amber-500 font-semibold">
                        $ {price}
                      </h6>
                      <h6 className="mt-6">Details</h6>
                      <p>{description}</p>
                      <div className="flex justify-around items-center mt-6">
                        <button
                          className="px-8 py-2 bg-secondary rounded-full"
                          onClick={() => handleAddCart(id, name, img, price)}
                        >
                          Add to cart
                        </button>
                        <GiSelfLove
                          className="cursor-pointer"
                          size={25}
                          color={'#c200fb'}
                        />
                      </div>
                      <div className="border-y-[1px] mt-6 border-gray-500">
                        <p className="text-green-700 flex items-center">
                          <MdDoneOutline /> In stock
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* close button for modal */}
                <div className="absolute top-0 right-0 cursor-pointer">
                  <AiOutlineCloseCircle
                    size={30}
                    className="text-primary"
                    onClick={() => dispatch(setShowModal(false))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}