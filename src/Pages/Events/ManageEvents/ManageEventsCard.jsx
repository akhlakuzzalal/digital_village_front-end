import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { deleteAnEvent } from '../../../redux/slices/event/eventSlice';

const ManageEventsCard = ({
  event: { _id, title, type, image, date, time, place },
  setDeleteEvent,
}) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const response = await dispatch(deleteAnEvent(_id));
    setDeleteEvent(response?.payload?.deletedCount);
  };

  const handleAlert = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        handleDelete(_id);
        swal('Confirmed!', {
          icon: 'success',
        });
      }
    });
  };
  return (
    <div className="border rounded-xl w-[260px]">
      <img className="h-[200px] w-[400px]" src={image} alt={title} />
      <div>
        <div className=" p-4 md:p-10">
          <div className=""></div>
          <div className="">
            <p className="text-xl">{type}</p>
            <h3 className=" md:text-lg text-lg pb-1 border-y-2">{title}</h3>
            <p>{time}</p>
            <p>
              at <span>{place}</span>
            </p>
          </div>
        </div>
        <button
          className="lg:mx-[100px] md:mx-[40px] mx-20 text-primary mb-5 flex"
          onClick={() => handleAlert(_id)}
        >
          Delete <MdDoubleArrow className="w-full mt-1" />
        </button>
      </div>
    </div>
  );
};

export default ManageEventsCard;
