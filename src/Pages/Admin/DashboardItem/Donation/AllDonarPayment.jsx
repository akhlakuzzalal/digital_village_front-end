import React from 'react';
import { FaDonate, FaFilePdf, FaHandsHelping } from 'react-icons/fa';
import { FcApproval} from 'react-icons/fc';

const AllDonarPayment = () => {
    return (
        <section className="my-16 max-w-6xl mx-auto px-3 mt-[80px]"
        style={{ minHeight: 'calc(100vh - 700px)' }}>
            <h3 className='text-center space-y-2'>All Donar Payment</h3>
            <div className="col-span-3 flex flex-col space-y-2">

                            <div  className="grid grid-cols-1 lg:grid-cols-4 gap-3 bg-white rounded-lg shadow-xl p-3 box-border">
                                {/* {/_ image _/} */}
                                <div className="col-span-1">
                                    <img className="w-full h-full rounded-lg" src="http://primehostingindia.com/templatemonster/react/aidup/assets/img/donations/5.jpg" alt='Mercedes-benz B Class 170' />
                                </div>
                                {/* {/_ details _/} */}
                                <div className="col-span-2">
                                    <h1 className="text-gray-700 text-lg font-primary">Need Help For Treatment</h1>
                                    <p className="text-gray-500 text-sm">Most forms of charity are concerned with providing basic necessities such as food, water, clothing, healthcare and shelter</p>
                                    {/* {/_ others info _/} */}
                                    <div className="flex flex-col lg:flex-row items-start lg:space-x-12 py-4 space-y-4 lg:items-center">
                                        {/* {/_ status _/} */}
                                        <div className="flex items-center space-x-3">
                                            <div className="flex flex-col">
                                                <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-primary text-sm">Pending</span>
                                            </div>
                                        </div>
                                        {/* {/_ duration _/} */}
                                        <div className="flex items-center space-x-3">
                                            <FaHandsHelping className="text-red-500 text-xl" />
                                            <div className="flex flex-col">
                                                <p className="text-sm font-primary text-gray-700">Raised</p>
                                                <span className="text-sm text-gray-500">5000 $</span>
                                            </div>
                                        </div>
                                        {/* {/_ group _/} */}
                                        <div className="flex items-center space-x-3">
                                            <FaDonate className="text-red-500 text-2xl" />
                                            <div className="flex flex-col">
                                                <p className="text-sm font-primary text-gray-700">Goal</p>
                                                <span className="text-sm text-gray-500">8000 $</span>
                                            </div>
                                        </div>
                                        {/* {/_ price _/} */}
                                        <div>
                                            <h1 className="font-primary font-semibold text-gray-900 text-2xl">$ 200</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 flex items-center lg:justify-end">
                                    <button className="btn-danger px-2 w-36 mr-auto lg:ml-auto  mt-4 bg-green-200 border border-transparent rounded-md py-2 flex items-center justify-center text-base font-medium text-white hover:bg-3reen-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"><FcApproval className='text-red-400 text-2xl'/></button>
                                    <button className="btn-danger w-36 mr-auto lg:ml-auto  mt-4 bg-green-400 border border-transparent rounded-md py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"><FaFilePdf className='text-red-400 text-2xl'/></button>
                                </div>
                                
                            </div>
                    
            </div>

        </section>
    );
};

export default AllDonarPayment;