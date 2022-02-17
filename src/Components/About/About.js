import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="bg-cover bg-no-repeat w-100 h-60" style={{backgroundImage:`url(https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1595428772152.png)`}}>
                
                <h1 className="text-5xl text-center text-green-600 pt-16  font-bold">About Us</h1>
                <h3 className="text-center font-semibold my-3 text-2xl text-red-600	 ">Home  / About Us</h3>
            </div>

            <div className='bg-gray-100'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    <div className='px-12 order-2 md:order-1'>
                        <h1 className='text-3xl font-bold py-8 '>BEST SERVICE</h1>
                        <p className='text-justify '>Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. Etiam pretium varius quam in aliquam. Curabitur malesuada elit sed enim placerat, vitae interdum erat cursus. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate.</p>
                        <div className='py-4  font-bold text-justify border-l-2 pl-'>
                        <h3 >
                        Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt vitae semper quis lectus nulla at volutpate.
                        Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. 
                        </h3>
                        </div>
                       
                    </div>



                    <div className='mt-8 mx-auto md:order-2'>
                        <img className='' src="https://images.unsplash.com/photo-1584697964038-28e16a2b6a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <img src="" alt="" />

            </div>
        </div>
    );
};

export default About;