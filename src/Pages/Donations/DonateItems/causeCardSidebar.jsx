import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cardcausesidber = (props) => {
    const { _id, title, image, category} = props;
    const navigate = useNavigate();

    // handing donetion
    const handleDonate = () => {
      //  handle Donations(rout props);
      navigate(`/causedetails/${_id}`);
    };
    return (
        <div onClick={handleDonate} class=" hover:bg-slate-100 hover:ring-gray-800 w-full flex items-center p-2 rounded-xl shadow border">
        <div class="relative flex items-center space-x-4">
          <img
            src={image}
            alt="My profile"
            class="w-16 h-16 mx-auto rounded-full ring-2 ring-green-400 sm:mx-0 sm:flex-shrink-0"
          />
          <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
        </div>
        <div class="flex-grow p-3">
          <div class="font-semibold text-gray-700">
            {title}
          </div>
          <div class="text-sm text-gray-500">
            {category}
          </div>
        </div>
        <div class="p-2">
          <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
        </div>
      </div> 
    );
};

export default Cardcausesidber;