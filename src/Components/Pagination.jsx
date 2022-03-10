import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const Pagination = ({ currPage, setCurrPage, pageCount }) => {
  const dispatch = useDispatch();
  return (
    <ul className="flex space-x-1 md:space-x-4 items-center justify-center my-3">
      <li>
        <button
          className={`${
            currPage === 0
              ? 'bg-info/20 hover:bg-info/30 cursor-not-allowed'
              : 'bg-info hover:bg-info/80'
          } btn m-0 px-4 md:px-6  rounded-lg`}
          onClick={() => currPage !== 0 && dispatch(setCurrPage(currPage - 1))}
        >
          <FaArrowLeft color="#fff" />
        </button>
      </li>
      {[...Array(pageCount).keys()].map((num) => (
        <li key={num}>
          <button
            className={`${
              num === currPage
                ? 'bg-primary hover:bg-primary/90 text-white'
                : 'bg-gray-50 hover:bg-gray-100 text-primary'
            } border-2 border-gray-500  rounded-sm p-1 md:px-3 text-sm md:text-xl font-extrabold`}
            onClick={() => dispatch(setCurrPage(num))}
          >
            {num}
          </button>
        </li>
      ))}
      <li>
        <button
          className={`${
            currPage === pageCount - 1
              ? 'bg-info/20 hover:bg-info/30 cursor-not-allowed'
              : 'bg-info hover:bg-info/80'
          } btn px-4 md:px-6 rounded-lg`}
          onClick={() =>
            currPage !== pageCount - 1 && dispatch(setCurrPage(currPage + 1))
          }
        >
          <FaArrowRight color="#fff" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
