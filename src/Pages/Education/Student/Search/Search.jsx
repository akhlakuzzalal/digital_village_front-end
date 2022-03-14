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
      <input
        className="w-full rounded-sm pl-4 pr-2 text-2xl outline-none dark:bg-black dark:text-white"
        {...register('search', { required: "Search is Required" })}
        onKeyUp={() => {
          trigger("search");
        }}
        placeholder="Find what you need"
      />
      {errors.search && (
        <small className="text-danger">{errors.search.message}</small>
      )}
      <div className="rounded-md shadow ml-auto">
        <button
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base
font-medium rounded-md text-white bg-info hover:bg-opacity-50 md:text-lg md:px-10"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
