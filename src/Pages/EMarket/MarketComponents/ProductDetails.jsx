import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';
import { MdDoneOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { setCart } from '../../../redux/slices/eMarket/cartSlice';
import { setShowModal } from '../../../redux/slices/eMarket/eMarketSlicle';

export default function Modal() {
  // allert confirm
  const handleAlert = () => {
    swal({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 2000,
    });
  };
  // redux state
  const showModal = useSelector((state) => state.market.modal.showModal);
  const dispatch = useDispatch();
  // terms for set different id
  const allcartItems = useSelector((state) => state.market.cart.cart);
  const lastCartItemId = allcartItems.length;
  const newId = lastCartItemId + 1;
  // add a product in cart
  const handleAddCart = () => {
    const cartItem = {
      id: newId,
      name: 'Product name',
      quantity: 1,
      img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2017-11/18/full/1511012328-1605.jpg',
      price: 230,
    };
    dispatch(setCart(cartItem));
    handleAlert();
    dispatch(setShowModal(false));
  };
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
                    <img
                      className="w-full h-4/5"
                      src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/w820bt%20black/edifier-w820bt-headphone-price-in-bd-black-500x500.jpg"
                      alt=""
                    />
                    <div>
                      <h3>Lorem, ipsum dolor.</h3>
                      <p>Our price</p>
                      <h6 className="text-amber-500 font-semibold">$ 300</h6>
                      <h6 className="mt-6">Details</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet quasi dolorem qui incidunt, velit illum eaque non
                        veritatis inventore rem.
                      </p>
                      <div className="flex justify-around items-center mt-6">
                        <button
                          className="px-8 py-2 bg-secondary rounded-full"
                          onClick={handleAddCart}
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
