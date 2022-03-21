import React, { useEffect, useState } from 'react';
import { useForm} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';
import useFirebase from '../../../../hooks/useFirebase';


const EditReview = () => {
    const {id}=useParams();
    const [review, setReview] = useState([]);
    const { user } = useFirebase();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    trigger,
  } = useForm();

  const handleEditReview =async (data) => {
    data.email = user?.email;
     const response =await axios.put(`/userReview/updateReview?id=${id}`, data)
     reset();
     console.log(response.data);
     if (response?.data?.success) {
       Swal.fire({
         title: 'updated successfully',
         confirmButtonText: 'Okay',
       });
     }
};



  useEffect(() => {
    axios.get(`/userReview/allReview`).then((response) => {
      setReview(response.data);
    });
  }, [id]);
  const result=review.filter(data=>data._id===id)

  return (
    <div className="bg-cover h-[100%]  w-[100%]bg-no-repeat md:pb-10 "
    style={{
      backgroundImage: `url(https://st2.depositphotos.com/3467927/6010/i/600/depositphotos_60107233-stock-photo-businessman-pushing-button-five-star.jpg)`,
    }}>
      <div className=" pb-10 pt-14 md:pt-24 lg:flex   dark:dark-card-bg  rounded-2xl">
        {/* add Review form */}
        <div className="w-full px-10">
          <h1 className=" text-center pt-12  text-4xl md:text-5xl text-white ">Edit Review</h1>
          <form
            className=" space-y-6 w-full md:w-1/2 mx-auto mt-10 "
            onSubmit={handleSubmit(handleEditReview)}
          >
            {/* email */}
            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('name',{
                required: 'Diplay Name required',
                required:true
                
              })}
              placeholder="Name"
              defaultValue={result[0]?.name}
            />
            <input
              className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('description', {
                required: 'Description is Required',
                minLength: {
                  value: 10,
                  message: 'Minimum Required length is 50',
                },
                maxLength: {
                  value: 250,
                  message: 'Maximum allowed length is 250 ',
                },
              })}
              placeholder="Description"
              onKeyUp={() => {
                trigger('description');
              }}
              defaultValue={result[0]?.description}
            />
            {errors.description && (
              <small className="text-danger">
                {errors.description.message}
              </small>
            )}

            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('image', {required: 'Image is Required' })}
              onKeyUp={() => {
                trigger('image');
              }}
              placeholder="Image URL"
              defaultValue={result[0]?.image}
            />
            {errors.image && (
              <small className="text-danger">{errors.image.message}</small>
            )}

            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('rating', {
                required: 'Rating is Required',
                
                min: {
                  value: 1,
                  message: 'Minimum Required rating is 1',
                },
                max: {
                  value: 5,
                  message: 'Maximum allowed rating is 5',
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Only numbers are allowed',
                },
              })}
              onKeyUp={() => {
                trigger('rating');
              }}
              placeholder="Rating in between one to five"
              defaultValue={result[0]?.rating}
            />
            {errors.rating && (
              <small className="text-danger">{errors.rating.message}</small>
            )}

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-6 rounded-lg text-xl  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Submit Review"
            />
          </form>
        </div>

        
      </div>
     
    </div>
  );
};

export default EditReview;
