import React from 'react';
import "./ContactUs.css";
import { useForm } from "react-hook-form";



const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
  
    return (
        <div>
            <div class="contactUs-bg">
                
                <h1 class="text-5xl text-center text-white pt-16 font-bold">Contact Us</h1>
                <h3 class="text-center font-semibold my-3 text-2xl text-white ">Home  / Contact Us</h3>
            </div>
            <div class="pr-8">
                <h3 class="text-center text-2xl font-semibold mt-16 mb-3 text-gray-500">FOLLOW OUR INFO</h3>
                <h1 class="text-5xl text-center font-bold">Contact information</h1>
                <h4 class="text-center mt-5  mx-10 container text-1xl font-semibold">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.We will be happy to answer your questions.enquiries within 24 hours on business days.We will be happy to answer your questions.</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 Container">
                {/* <div > 10:00am to 6:00pm Sunday Closed </div>
                <div > 13005 Greenville Avenue California, TX 70240 </div>
                <div > +1 000999 0099 info@themerange.net </div>
                <div >
                     <h3 class="text-3xl font-semi-bold">Our Socials Links</h3>
                     <p>Print this page to PDF for the complete set of vectors.</p>
                 </div> */}
                <div  class="flex flex-col items-center bg-white rounded-lg pl-10  md:flex-row pl-15     container md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="bg-gray-100 rounded-full">
                    <img class="object-cover rounded-full h-20 w-20" src="https://freepngimg.com/thumb/clock/58348-alarm-icon-cartoon-timer-clock-free-photo-png-thumb.png" alt=""/>
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                    <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">10:00am to 6:00pm</p>
                    <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Sunday Closed</p>
                   </div>
                </div>

                <div  class="flex flex-col items-center bg-white rounded-lg pl-5 md:flex-row  ml-15    container md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover rounded-full h-20 w-20  " src="https://image.pngaaa.com/23/203023-middle.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                    <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">13005 Greenville Avenue</p>
                    <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">California, TX 70240</p>
                   </div>
                </div>

                <div  class="flex flex-col items-center bg-white rounded-lg  md:flex-row pl-10  container md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover rounded-full h-20 w-20" src="https://www.kindpng.com/picc/m/336-3369375_contact-flower-mound-electrician-today-phone-icon-png.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                    <p class="mb-3  text-gray-700 dark:text-gray-400 font-semibold">+1 000999 0099</p>
                    <p class="mb-3  text-gray-700 dark:text-gray-400 font-semibold">info@themerange.net</p>
                   </div>
                </div>

                <div  class="flex flex-col items-center bg-white rounded-lg  md:flex-row      container md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    
                    <div class="flex flex-col justify-between p-4 leading-normal">
                    <h3 class="mb-3  text-gray-700 dark:text-gray-400 text-3xl font-bold">Our Socials Links</h3>
                    <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Print this page to PDF for the complete set of vectors.</p>
                    <div class="inline-grid grid-cols-6">
                       <img class=" d-flex object-cover rounded-full h-10 w-10 m-2" src="https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021.png " alt=""/>
                       <img class=" d-flex object-cover rounded-full h-10 w-10 m-2" src="https://p1.hiclipart.com/preview/1016/686/474/mitu-icon-twitter-png-clipart.jpg" alt=""/>
                       <img class="object-cover rounded-full h-10 w-10 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt=""/>
                       <img class="object-cover rounded-full h-10 w-10 m-2" src="https://i.pinimg.com/originals/72/9f/77/729f7798561be2cb67f39e916a22eb6a.png" alt=""/>
                   </div>
                   </div>
                   
                </div>

                

            </div>
            <div class="mt-10">
                <h5 class="text-center text-1xl font-bold mt-16 mb-3 text-gray-600">DON’T HASITATE TO CONTACT WITH US</h5>
                <h1 class="text-5xl text-center font-bold">Now Very Easy</h1>
                <h4 class="text-center mt-5  px-10 container text-1xl font-semibold">Our approach to SEO is uniquely built around what we know works…and what we know doesn’t work. With over 200 verified factors in playworks…and what we know doesn’t work. With over 200 verified factors in play.</h4>
            </div>

            <div class="mt-10 pt-10 container mx-auto px-4 pb-5" >
                <form class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                   <div class="mr-2 pl-10 ">
                        <input class="w-full py-4 mb-4 shadow-2xl" {...register("name", { required: true, maxLength: 20 })} placeholder='Your Name' />
                   </div>
                   <div class="mr-2 pl-5">
                       <input class="w-full py-4 mb-4 shadow-2xl" type="number" {...register("number", { required: true, maxLength: 20 })} placeholder='Your Phone Number' />
                   </div>
                   <div class="mr-2 pl-10 ">
                       <input class="w-full  py-4 mb-4 shadow-2xl"  type="email" {...register("email")} placeholder='Enter Your Email Number' />
                    </div>
                   <div class="mr-2 pl-5 ">
                       <input class="w-full py-4 mb-4 shadow-2xl"  type="email" {...register("email")} placeholder='Write your Subject' />
                    </div>
                    <div class="ml-5 col-span-2 ">
                         <textarea placeholder='Please Write Your Message' class=" w-full ml-5 py-4 mb-2 shadow-2xl" {...register("firstName", { required: true, maxLength: 20 })} />
                    </div>
                    
                    <input class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn ml-10 font-bold rounded-lg w-2/6 px-4 py-2 text-white" type="submit"value="Submit Now"/>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;