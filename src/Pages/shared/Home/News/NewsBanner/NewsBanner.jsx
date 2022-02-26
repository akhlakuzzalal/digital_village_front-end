import React from 'react';

const NewsBanner = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-1 mx-5'>
                <div className='col-span-2 hover:scale-105 transition duration-700  ease-in-out'>
                    <div>
                <p className=' absolute mt-36 py-3 px-4 text-3xl text-black text-center bg-green-400 '>Latest News</p>
                <h4 className='absolute mt-36 mx-48 hover:text-blue cursor-pointer text-white text-2xl  invisible hover:visibleinvisible hover:visible"'>Visit More</h4>
                
                    <img className='w-full h-96' src="https://images.unsplash.com/photo-1528726164383-33c4a223b78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                   
                </div>
                <div className=''>
                    <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    <p className=' absolute mt-20 py-3 px-2 text-white text-center bg-orange-500 visible hover:invisible'>Learning News</p>

                        <img className=' h-48 w-96' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/e_learning_new_0.png?HdQc4PgJXVKd6bGfZsdga3gn0GWvcPMv&size=770:433" alt="" />
                        
                    </div>

                    <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    <p className=' absolute mt-20 py-3 px-2 text-white text-center bg-red-400 '>Medical News</p>
                        <img className='mt-1 h-48 w-96' src="https://medicsmarketing.com/wp-content/uploads/2019/03/Medical_writing.jpg" alt="" />
                    </div>

                </div>
                <div className=''>
                    <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    <p className=' absolute mt-20 py-3 px-2 text-black text-center bg-lime-400'>Events News</p>

                        <img className=' h-48 w-96' src="https://www.elmens.com/wp-content/uploads/2020/04/charity.jpg" alt="" />
                        
                    </div>

                    <div className='hover:scale-105 transition duration-700 ease-in-out'>
                    <p className=' absolute mt-20 py-3 px-2 text-white text-center bg-blue-600 '>Donation News</p>
                        <img className='mt- h-48 w-96' src="https://media.istockphoto.com/photos/gathering-items-to-be-donated-to-charity-items-are-placed-on-a-futon-picture-id1339697803?b=1&k=20&m=1339697803&s=170667a&w=0&h=bYarLvJS8g6GLQcj9WHuCOAFr6ouMjgu7mTktgolsEc=" alt="" />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default NewsBanner;