import React from 'react';
import { FcHome, FcGraduationCap,FcShop,FcDonate,FcCalendar} from "react-icons/fc";
import { MdLocalHospital} from "react-icons/md";

const ServiceBoard = ({ setControl, control }) => {

    return (
        <>

<div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24">
        <div class="grid gap-4 grid-cols-2">
        
        <div class="flex flex-row w-full">
        <li className={`${control === "learn" && "bg-green-600 text-white"} flex items-center rounded-md py-1 cursor-pointer px-1`}>
                    <div onClick={() => setControl('learn')} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                        <div class="shrink-0">
                        <FcGraduationCap className='text-center' size={70} />
                        </div>
                        <div>
                        <div class="text-xl font-medium text-black">Digital Learning</div>
                        <p class="text-slate-500 text-sm">Digital Village Service!</p>
                        </div>
                    </div>
        </li>
        </div>
        <div class="flex flex-row w-full">
        <li className={`${control === "appoinment" && "bg-green-600"} flex items-center rounded-md py-1 cursor-pointer px-1`}>
                    <div onClick={() => setControl('appoinment')} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                        <div class="shrink-0">
                        < MdLocalHospital className='text-center' size={70} />
                        </div>
                        <div>
                        <div class="text-xl font-medium text-black">Healthcare</div>
                        <p class="text-slate-500 text-sm">Digital Village Service!</p>
                        </div>
                    </div>
        </li>
        </div>
        <div class="flex flex-row w-full">
        <li className={`${control === "pepole" && "bg-green-600 text-white"} flex items-center rounded-md py-1 cursor-pointer px-1`}>
                    <div onClick={() => setControl('pepole')} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                        <div class="shrink-0">
                        <FcHome className='text-center' size={70} />
                        </div>
                        <div>
                        <div class="text-xl font-medium text-black">Village Pepole</div>
                        <p class="text-slate-500 text-sm">Digital Village Service!</p>
                        </div>
                    </div>
        </li>
        </div>
        <div class="flex flex-row w-full">
        <li className={`${control === "donate" && "bg-green-600 text-white"} flex items-center rounded-md py-1 cursor-pointer px-1`}>
                    <div onClick={() => setControl('donate')} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                        <div class="shrink-0">
                        <FcDonate className='text-center' size={70} />
                        </div>
                        <div>
                        <div class="text-xl font-medium text-black">Donations</div>
                        <p class="text-slate-500 text-sm">Digital Village Service!</p>
                        </div>
                    </div>
        </li>
        </div>
        <div class="flex flex-row w-full">
        <li className={`${control === "market" && "bg-green-600 text-white"} flex items-center rounded-md py-1 cursor-pointer px-1`}>
                    <div onClick={() => setControl('market')} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                        <div class="shrink-0">
                        <FcShop className='text-center' size={70} />
                        </div>
                        <div>
                        <div class="text-xl font-medium text-black">E-Market</div>
                        <p class="text-slate-500 text-sm">Digital Village Service!</p>
                        </div>
                    </div>
        </li>
        </div>
        <div class="flex flex-row w-full">
        <li className={`${control === "event" && "bg-green-600 text-white"} flex items-center rounded-md py-1 cursor-pointer px-1`}>
                    <div onClick={() => setControl('event')} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                        <div class="shrink-0">
                        <FcCalendar className='text-center' size={70} />
                        </div>
                        <div>
                        <div class="text-xl font-medium text-black">Events</div>
                        <p class="text-slate-500 text-sm">Digital Village Service!</p>
                        </div>
                    </div>
        </li>
        </div>   
        </div>
        </div>
            
        </>
    );
};

export default ServiceBoard;