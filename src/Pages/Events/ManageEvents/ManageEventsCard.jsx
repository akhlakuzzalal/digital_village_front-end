import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDoubleArrow } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div className="flex justify-between mx-5">
          <button
            className="  text-primary  flex"
            onClick={() => handleAlert(_id)}
          >
            Delete <MdDoubleArrow className="w-full mt-1" />
          </button>
          <Link to="/updateEvent">
            <AiFillEdit
              size={30}
              color={'white'}
              className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageEventsCard;
