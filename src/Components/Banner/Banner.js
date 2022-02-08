import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <h5 className='text-5xl font-bold text-red-700'>This is Banner Page</h5>
            <div className='grid grid-cols-2'>
                <div className='my-8'>
                    <h1 className='text-center text-4xl font-bold py-2'>DEGITAL VILLAGE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nisi minima error! Similique ex adipisci iusto impedit illo debitis id maxime consequuntur harum vero. Earum rem eos corporis repellat quaerat et assumenda quis, facilis ducimus quo saepe vel tempore iste cum libero fugit, officiis nisi. Porro necessitatibus labore tempora recusandae.</p>
                    <button className='rounded-none bg-blue'>Explore More</button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
            </div>
        </div>

    );
};

export default Banner;