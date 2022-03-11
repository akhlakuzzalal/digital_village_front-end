import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Rating from '../../../../Components/Rating';
import useFirebase from '../../../../hooks/useFirebase';

const MyReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useFirebase();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://digital-village.herokuapp.com/userReview/singleReview/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  const handleDelete = (id) => {
    setIsLoading(true);
    fetch(
      `https://digital-village.herokuapp.com/userReview/deleteReview/${id}`,
      {
        method: 'DELETE',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this imaginary file!',
          icon: 'warning',
          buttons: true,
          dangerMode: true,
        });

        if (data?.deletedCount) {
          swal('Delete! Your News Fille has been deleted!', {
            icon: 'success',
          });
          setIsLoading(false);
        } else {
          swal('Your News  file is safe!');
        }
      });
  };
  //   const changeRating=( newRating, name )=>{
  //     this.setState({
  //       rating: newRating
  //     })};
  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-4 justify-evenly items-center gap-6 md:mx-24 md:my-24">
        {review.map((data) => (
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10 pt-4">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={data?.image}
                alt=""
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {data?.name}
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400 p-4">
                {data?.description.slice(0, 200)}...
              </span>
              <div className="flex">
                <Rating rating={data?.rating} />
              </div>
              <div class="flex mt-4 space-x-3 lg:mt-6">
                <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {' '}
                  Update
                </button>
                <button
                  onClick={() => handleDelete(data?._id)}
                  class="inline-flex bg-red-700 text-white font-bold items-center py-2 px-4 text-sm text-center rounded-lg border hover:text-blue-600 border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default MyReview;
