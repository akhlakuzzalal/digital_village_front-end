import React from 'react';
import emailjs from '@emailjs/browser';
import { Controller, useForm } from 'react-hook-form';
import swal from 'sweetalert';

const Reply = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: { yes_i_understand: false },
        checkbox:false
      });

          const onSubmit = (data) => {
        console.log(data);
    
        swal('Successfully!', '!Your Message Send', 'success');
        reset();
      };
    return (
        <div>
                    <form
          className=" md:grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mr-8 md:mx-10 lg:mx-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className=" w-full  bg-gray-100 px-20 py-5 rounded mb-5 lg:mb-0"
            {...register('name', { required: true, maxLength: 20 })}
            placeholder="Your Name"
          />


          <input
            className=" w-full mb-5 lg:mb-0 bg-gray-100 px-20 rounded py-5 "
            type="email"
            {...register('email')}
            placeholder="Enter Your Email"
          />
          <div className='flex-cols'>
          <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input type="checkbox" class="default:ring-2 ..." />}
      >
        {/* <p>This is checkboox</p> */}
        
        </Controller>
        <span className='ml-2'>SAVE MY NAME, EMAIL, AND WEBSITE FOR THE NEXT TIME I COMMENT.

</span>
          </div>



          <div className=" col-span-2">
            <textarea
              placeholder="Please Write Your Comment"
              className=" w-full bg-gray-100 py-8 px-5"
              {...register('comment', { required: true, maxLength: 20 })}
            />
          </div>

          <input
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn mx-auto col-span-2 font-bold   px-6 md:w-2/6   py-2 text-white ml-20 lg:ml-0"
            type="submit"
            value="SEND COMMENT"
          />
        </form>
        </div>
    );
};

export default Reply;