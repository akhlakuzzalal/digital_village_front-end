import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import swal from 'sweetalert';
import { addAnCuase } from '../../../../redux/slices/Donations/donationSlice';

const AddCause = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const handleAddCause = (data) => {
        // data.author= user?.name
        data.raised= '0'
        // data.donars= []
        data.date= new Date().toLocaleDateString()
        dispatch(addAnCuase(data));
        swal({
          position: 'top-end',
          icon: 'success',
          title: 'Your cause has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
    
        reset();

  };
  // title image description category goal date author
    return (
      <div className="flex justify-center items-center mx-auto  mt-[80px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}>
        
        <div className="justify-center items-center min-h-full space-y-10">
        <h3 className='text-center space-y-2'>Add a new Cause</h3>
        <form
          onSubmit={handleSubmit(handleAddCause)}
          className="space-y-6 mt-10 w-full md:w-1/2  mx-auto"
        >
          {/* title */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title', { required: "Title is Required", maxLength: {
            value: 30,
            message: "First Name shouldn't exceed 30words",
          }})}
          
          onKeyUp={() => {
            trigger("title");
          }}
          placeholder="Add a Title"
        />
        {errors.title && (
          <p className="text-danger">{errors.title.message}</p>
        )}
        {/* description */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          
          {...register('description', { required: "Message is Required",
          minLength: {
            value: 10,
            message: "Minimum Required length is 10",
          },
          maxLength: {
            value: 50,
            message: "Maximum allowed length is 150 ",
          }
         })}
         placeholder="Write Cause description"
          required
         onKeyUp={() => {
          trigger("description");
        }}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
        {/* image */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('image', { required: "Image is Required" })}
          
          onKeyUp={() => {
            trigger("image");
          }}
          placeholder="Add a image Link"
        />
        {errors.image && (
          <p className="text-danger mb-2">{errors.image.message}</p>
        )}
          {/* category */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('category', { required: "category is Required" })}
          
            onKeyUp={() => {
              trigger("category");
            }}
            placeholder="Category"
          />
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        {/* <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
          {/* goal */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('goal', {
              required: "Goal is Required",
                    min: {
                      value: 500,
                      message: "Minimum Required Goal is 500",
                    },
                    max: {
                      value: 500000,
                      message: "Maximum allowed age is 50000",
                    },
                    pattern: {
                      value: /^[0-5._%+-]*$/,
                      message: "Only numbers are allowed",
                    }
                  })}
                  type="number"
                  placeholder="Acquired Goal"
                  defaultValue={500}
                  required
                  onKeyUp={() => {
                    trigger("goal");
                  }}
                />
                
                {errors.goal && (
                  <p className="text-danger mb-2">{errors.goal.message}</p>
                )}
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