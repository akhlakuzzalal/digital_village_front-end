import React from 'react';
import { useForm } from 'react-hook-form';

const Search = ({ handleSearch }) => {
  const { register, handleSubmit,trigger,
    formState: { errors }
  } = useForm ();
  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="flex items-center border-2 p-1 border-gray-200 sm:w-3/4 mx-2 mt-3 sm:mx-auto rounded-xl md:shadow-2xl shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-4 w-full ">
          {/* first name */}
          <div className='w-full md:w-2/2'>
          <input
        className="w-full pl-4 pr-2 text-2xl dark:bg-black dark:text-white"
        {...register('search', { required: "Search is Required" })}
        onKeyUp={() => {
          trigger("search");
        }}
        className="w-full rounded-sm md:rounded-xl p-2 focus:outline-none focus:ring focus:border-blue-500 flex items-center"
        placeholder="Find what you need"
      />
      {errors.search && (
        <small className="text-danger">{errors.search.message}</small>
      )}
          </div>

          {/* last name */}
          <div className='w-full md:w-1/2'>
          <div className="rounded-md shadow ml-auto">
        <button
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base
          font-medium rounded-md text-white bg-info hover:bg-opacity-50 md:text-lg md:px-10"
        >
          Search
        </button>
      </div>
          </div>
        </div>
    </form>
  );
};

export default Search;
