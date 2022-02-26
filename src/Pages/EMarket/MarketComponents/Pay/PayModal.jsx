import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../../../redux/slices/eMarket/modalSlicle';
import Payment from './Payment';

export default function PayModal() {
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
                  <Payment order={{ price: 120, id: 1 }}></Payment>
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
