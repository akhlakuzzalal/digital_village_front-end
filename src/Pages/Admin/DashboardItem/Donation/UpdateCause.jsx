import React from 'react';
import { updateAnCuase } from '../../../../redux/slices/Donations/donationSlice';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const UpdateCause = () => {
    const { id } = useParams();
    const causes = useSelector((state) => state.donation.causes);
    // console.log(causes, id);
    const cause = causes.find((c) => c._id === id);
// console.log(cause._id);

    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm ();


  const handleUpdateCause = (data) => {
    const newData = {...data,id}
    console.log(newData);
        dispatch(updateAnCuase(data));
        // console.log(newData);
        alert('update successfully added');
        
  };
  // title image description category goal date author
    return (
      <div className="flex justify-center items-center mx-auto  mt-[80px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}>
        
        <div className="justify-center items-center min-h-full  space-y-10">
        <h3 className='text-center space-y-2'>Add a new Cause</h3>
        <form
          onSubmit={handleSubmit(handleUpdateCause)}
          className="space-y-6 mx-auto"
        >
          {/* title */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title')}
          placeholder="Title"
          defaultValue={cause.title}
        />
         {/* image */}
         <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('image')}
          placeholder="Image link"
          defaultValue={cause.image}
        />
        {/* description */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('description')}
          placeholder="Description"
          defaultValue={cause.description}
        />
       
        <div className="flex items-center justify-center">
          {/* category */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('category', { required: true })}
            placeholder="Category"
            defaultValue={cause.category}
          />
        </div>
        <div className="flex items-center justify-center">
          {/* goal */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('goal', { required: true})}
            type="number"
            placeholder="Goal"
            defaultValue={cause.goal}
          />
        </div>
        <div className="flex items-center justify-center">
          {/* category */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('date', { required: true })}
            placeholder="date"
            defaultValue={new Date().toLocaleDateString()}
          />
        </div>
        <input
          className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Add a new Cause"
        />
      </form>
      </div>
      </div>
    );
};

export default UpdateCause;