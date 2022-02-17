
import React, { useEffect, useState } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { useParams } from 'react-router-dom';
import DonateTap from '../Donate/DonateTap';

   // CaseSingle details page
const CaseSingle = () => {
 const [causes, setCauses] = useState({});
    const { id } = useParams();    

    useEffect(() => {
        fetch(`https://cryptic-everglades-35803.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setCauses(data))
            
    }, [id])
    // console.log(id, "siglecuase");

    //Progressbar for
    let donationGoal = causes.goal;
    let donationTotal = causes.fee;


  const percentage = (donationTotal, donationGoal) => {
    return (donationTotal / donationGoal) * 100 > 100
      ? 100
      : (donationTotal / donationGoal) * 100;
  };

  let percent = percentage(donationTotal, donationGoal);
    return (
    <>
    <div className="items-center justify-center ">
            <h1 className='text-center text-blue-500'>Page titlle</h1>
    </div>
<div class="container mx-auto flex flex-wrap py-6">
    
      {/* Posts Section */}
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
        
            <article class="flex flex-col shadow my-4 bg-white rounded-xl p-4 box-border overflow-hidden relative justify-between border-l-4 border-green-400">
                 <div className="overflow-hidden">
                <img className="transform hover:scale-125 transition duration-700 object-cover h-full w-full" src={causes.image} alt={causes?.title} />
            </div>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="/" class="text-blue-700 text-sm font-bold uppercase pb-4">{causes?.category}</a>
                    <a href="/" class="text-3xl font-bold hover:text-gray-700 pb-4">{causes?.title}</a>
                    <p href="/" class="text-sm pb-3">
                        By <a href="/" class="font-semibold hover:text-gray-800">Digital Village</a>, Published on April 25th, 2022
                    </p>
                {/* card footer  */}
                <div className="flex items-center justify-between pt-3">
                    <button className="w-100 flex items-center justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6">RAISED {causes?.fee}</button>
                    <button className="w-100 flex items-center justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6">GOAL {causes?.goal}</button>  
                </div>
                <div className="flex flex-col space-y-1 my-3">
               
                    <div class="py-5">
                                <Progress
                                    percent={percent.toFixed(0)}
                                    theme={
                                            {
                                                error: {
                                                symbol: percent.toFixed(0) + '%',
                                                trailColor: 'pink',
                                                color: 'red'
                                                },
                                                default: {
                                                symbol: percent.toFixed(0) + '%',
                                                trailColor: 'lightblue',
                                                color: 'blue',
                                                
                                                
                                                },
                                                active: {
                                                symbol:`${percent.toFixed(0) +'%'}`,
                                                trailColor: 'yellow',
                                                color: '#f55767',
                                                
                                                
                                                },
                                                success: {
                                                symbol: percent.toFixed(0) + '%✅',
                                                trailColor: 'lime',
                                                color: 'green'
                                                }
                                            }
                                            }
                                        />
                                    
                    </div>                   
                    <p className="text-gray-500 text-sm">{causes?.des}</p>
                </div>  
                </div>
            </article>

            <article class="flex flex-col shadow my-4">
                <div class="bg-white flex flex-col justify-center p-6">
                    <p>If you would like to contribute money, click on the <b>Donation Payment</b> button.</p>
                    <br />
                    <p className='my-4'>Click <b>Help Request Donation</b> button if you would like more support than money</p>
                    {/* start */}
                    <DonateTap></DonateTap>
                    {/* end */}
                </div>
            </article>
        </section>

        {/*Right Sidebar Section  */}
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <p class="text-xl font-semibold pb-5">About Us</p>
                <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                <a href="/" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                    Get to know us
                </a>
            </div>

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <p class="text-xl font-semibold pb-5">Donation</p>
                <div class="grid grid-cols-1 gap-3 overflow-y-auto h-96">
                <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                    {/* Card siderbar */}
                <div class="flex items-center space-x-4">
                <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
                </div>
                <div class="flex-grow p-3">
                <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                </div>
                <div class="text-sm text-gray-500">
                    You: Thanks, sounds good! . 8hr
                </div>
                </div>
                <div class="p-2">
                <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1"/>
                </div>
            </div>
            
            <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="relative flex items-center space-x-4">
                <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
                <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                </div>
                <div class="flex-grow p-3">
                <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                </div>
                <div class="text-sm text-gray-500">
                    @ktquez sent a image . 2hr
                </div>
                </div>
                <div class="p-2">
                <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
                </div>
            </div>
            <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="flex items-center space-x-4">
                <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
                </div>
                <div class="flex-grow p-3">
                <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                </div>
                <div class="text-sm text-gray-500">
                    You: Thanks, sounds good! . 8hr
                </div>
                </div>
                <div class="p-2">
                <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1"/>
                </div>
            </div>
            
            <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="relative flex items-center space-x-4">
                <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full"/>
                <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                </div>
                <div class="flex-grow p-3">
                <div class="font-semibold text-gray-700">
                    Antério Vieira da Silva Lima
                </div>
                <div class="text-sm text-gray-500">
                    @ktquez sent a image . 2hr
                </div>
                </div>
                <div class="p-2">
                <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
                </div>
            </div>
                   
                </div>
                <a href="/" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                    <i class="fab fa-instagram mr-2"></i>Follow @Digital_Village
                </a>
            </div>
            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <p class="text-xl font-semibold pb-5">Instagram Photo</p>
                <div class="grid grid-cols-3 gap-3">
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" alt='fgdg'/>
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" alt='fgdg'/>
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" alt='fgdg' />
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" alt='fgdg'/>
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" alt='fgdg'/>
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" alt='fgdg'/>
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" alt='fgdg'/>
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" alt='fgdg'/>
                    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" alt='fgdg'/>
                </div>
                <a href="/" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                    <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
                </a>
            </div>

        </aside>
        </div>
</>
    );
};

export default CaseSingle;

