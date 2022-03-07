import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import swal from 'sweetalert';

const ManageNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/news/allNews')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/news/deleteNews/${id}`, {
      method: 'DELETE',
    })
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
        } else {
          swal('Your News  file is safe!');
        }
      });
  };
  return (
    <article className="flex flex-wrap justify-evenly items-center gap-6 md:mx-24 md:my-24">
      {news.map((data) => (
        <div className="bg-white rounded-xl p-4 relative max-w-[400px] shadow-2xl">
          <div className="overflow-hidden rounded-xl h-52 cursor-pointer">
            <img
              className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
              src={data.image}
              alt={''}
            />
          </div>

          <div className="flex flex-col flex-grow">
            {/* title and description */}
            <div className="flex flex-col space-y-1 my-4">
              <h2 className="text-gray-700 font-primary text-lg">
                {data?.title.slice(0, 30)}...
              </h2>
              <p className="text-gray-500 text-sm">
                {data?.description.slice(0, 30)}
              </p>
            </div>
          </div>

          {/* card footer  */}
          <div className="flex items-center justify-between pt-3">
            <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(data._id)}
              className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ManageNews;
