import React from 'react';

const Search = () => {
  return (
    <div className="flex items-center border-2 p-1 border-gray-200 sm:w-3/4 mx-2 mt-3 sm:mx-auto rounded-xl md:shadow-2xl shadow-lg">
      <input
        className="w-full pl-4 pr-2 text-2xl outline-none dark:bg-black dark:text-white"
        type="search"
        placeholder="Find what you need"
      />
      <div className="rounded-md shadow ml-auto">
        <button
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base
font-medium rounded-md text-white bg-info hover:bg-opacity-50 md:text-lg md:px-10"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
