import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import img from '../../../assets/events/Add events.PNG';
import { addAnEvent } from '../../../redux/slices/event/eventSlice';
const AddEvents = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const handleAddEvent = (data) => {
    dispatch(addAnEvent(data));
    alert('successfully added');
  };

  return (
    <>
      <div className="add-events-main my-40 lg:flex  lg:mx-32 md:mx-32 mx-0 border rounded-2xl">
        <div>
          <img
            className="lg:h-[780px] md:h-[580px] lg:w-[1000px] md:w-[1000px] w-[100%] h-[300px]"
            src={img}
            alt=""
          />
        </div>
        {/* add event form */}
        <div>
          <h1 className="ml-10 mt-6 text-3xl ">Add Events</h1>
          <form
            className=" space-y-6 mx-10 mt-10"
            onSubmit={handleSubmit(handleAddEvent)}
          >
            {/* email */}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('title')}
              placeholder="title"
            />
            <input
              className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('description')}
              placeholder="description"
            />
            <input
              type="Date"
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('date')}
              placeholder="date"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('image')}
              placeholder="Image URL"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('category')}
              placeholder="Category"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('time')}
              placeholder="Time"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('place')}
              placeholder="Place"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('eventType')}
              placeholder="EventType (Upcoming or Archived) "
            />

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Confirm"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEvents;

// https://i.ibb.co/37FHs2H/Cap.png
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/dLKtQ2z/ta-W8-Os-Lp-400x400.jpg" alt="ta-W8-Os-Lp-400x400" border="0"></a>

//<a href="https://ibb.co/zV897mc"><img src="https://i.ibb.co/r2b8cQP/trade-fair.jpg" alt="trade-fair" border="0"></a>

//<a href="https://ibb.co/BqKQW8x"><img src="https://i.ibb.co/WgpM8Sw/children-listening-in-computer-class.jpg" alt="children-listening-in-computer-class" border="0"></a>

//<a href="https://imgbb.com/"><img src="https://i.ibb.co/sFGrp51/cricket.jpg" alt="cricket" border="0"></a>

//<a href="https://ibb.co/16v8rX7"><img src="https://i.ibb.co/ZmLWBgG/tree.jpg" alt="tree" border="0"></a>
