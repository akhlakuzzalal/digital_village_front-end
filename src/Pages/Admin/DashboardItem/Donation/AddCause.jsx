import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import { addAnCuase } from '../../../../redux/slices/Donations/donationSlice';

const AddCause = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddCause = (data) => {
        // data.author= user?.name
        data.date= new Date().toLocaleDateString()
        dispatch(addAnCuase(data));
        alert('successfully added');
        reset();
  };
  // title image description category goal date author
    return (
      <div className="flex justify-center items-center mx-auto  mt-[80px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}>
        
        <div className="justify-center items-center min-h-full  space-y-10">
        <h3 className='text-center space-y-2'>Add a new Cause</h3>
        <form
          onSubmit={handleSubmit(handleAddCause)}
          className="space-y-6 mx-auto"
        >
          {/* title */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title')}
          placeholder="Title"
        />
        {/* description */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('description')}
          placeholder="Description"
        />
        {/* image */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('image')}
          placeholder="Image link"
        />
        <div className="flex items-center justify-center">
          {/* category */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('category', { required: true })}
            placeholder="Category"
          />
        </div>
        <div className="flex items-center justify-center">
          {/* goal */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('goal', { required: true})}
            type="number"
            placeholder="Goal"
            defaultValue={500}
          />
        </div>
        <input
          className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Add a new Cause"
        />
      </form>
      </div>
      </div>
    );
};

export default AddCause;