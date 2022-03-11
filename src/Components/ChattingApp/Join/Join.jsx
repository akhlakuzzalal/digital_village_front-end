import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name,setName]=useState("");
    const [room,setRoom]=useState('')
    return (
        <div className='md:my-48 md:mx-48 '>
            
                <div className='mx-auto drop-shadow-2xl shadow-gray-500/100 w-full md:w-1/2  bg-black py-24 rounded px-12 to-transparent'>
                <h1 className='text-white pb-4 text-center '>Join Us</h1>
               
                <div  >
                <input className='w-full p-4 rounded mb-2 mx-auto' placeholder='Write Your Name' type="text" onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div>
                <input className='w-full p-4 rounded mb-2 mx-auto' placeholder='Write Your Room' type="text" onChange={(event)=>setRoom(event.target.value)}/>
            </div>
            <Link onClick={event=>(!name || !room) ? event.preventDefault() : null} to={`/chat?name${name}&room${room}`}> 
                <button className='button text-xl bg-blue-600 hover:bg-white hover:text-blue-600'  type='submit'>Sign-In</button>
            </Link>
                </div>
        </div>
    );
};

export default Join;