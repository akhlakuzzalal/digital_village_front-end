import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Controller, useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { lightFormat } from 'date-fns';

const Reply = () => {
  const [comment,setComment]=useState([]);
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
      } = useForm();

        const handleAddComment = (data) => {
        let newComment=[...comment,data]
        setComment(newComment)
        swal('Successfully!', '!Your Message Send', 'success');
        reset();
      };
//
// console.log(comment)

      

     

    return (
        <div>
            <div>
            <h5 className='my-5 text-2xl'>Comment <span className='w-3 h-3 text-xl text-white rounded-full px-2 py-1 ml-2 bg-blue-600'>{comment?.length}</span></h5>
             
             <ul>
          {
            comment.map(data=><li><div className='border my-4 p-4'>
            <h5 className='text-red-600 text-sm'>{data.name}</h5>
            <p>{data?.comment}</p>
            
            
           </div></li>)
          }
          </ul>
      
            </div>


          <h3 className='my-10 text-white bg-red-600 w-60 p-1'>Leave a Reply</h3>
          <form
          className=" md:grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mr-8 md:mx-10 lg:mx-0"
          onSubmit={handleSubmit(handleAddComment)}
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
          



          <div className=" col-span-2">
            <textarea
              placeholder="Please Write Your Comment"
              className=" w-full bg-gray-100 py-8 px-5"
              {...register('comment')}
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