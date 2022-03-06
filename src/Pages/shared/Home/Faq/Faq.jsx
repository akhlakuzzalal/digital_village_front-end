// import React from 'react';
// import img from '../../../../assets/faq/faq.png';
// const Faq = () => {
//   return (
//     <div className="lg:flex lg:mx-20  mx-2 space-x-5 py-40">
//       <div>
//         <img className="lg:w-[800px] lg:h-[600px] h-[350px]" src={img} alt="" />
//       </div>
//       <div
//         className="pt-[120px] border lg:px-20 px-10"
//         id="accordion-flush"
//         data-accordion="collapse"
//         data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//         data-inactive-classes="text-gray-500 dark:text-gray-400"
//       >
//         <h2 id="accordion-flush-heading-1">
//           <button
//             type="button"
//             class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 rounded-t-xl border-b border-gray-200 dark:border-gray-700 dark:text-white"
//             data-accordion-target="#accordion-flush-body-1"
//             aria-expanded="true"
//             aria-controls="accordion-flush-body-1"
//           >
//             <span>How i can become a donner in digital village?</span>
//             <svg
//               data-accordion-icon=""
//               class="w-6 h-6 rotate-180 shrink-0"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </h2>
//         <div
//           id="accordion-flush-body-1"
//           aria-labelledby="accordion-flush-heading-1"
//         >
//           <div class="py-5 border-b border-gray-200 dark:border-gray-700">
//             <p class="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is an open-source library of interactive components built
//               on top of Tailwind CSS including buttons, dropdowns, modals,
//               navbars, and more.
//             </p>
//             <p class="text-gray-500 dark:text-gray-400">
//               Check out this guide to learn how to{' '}
//               <a
//                 href="https://flowbite.com/docs/getting-started/introduction/"
//                 class="text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 get started
//               </a>{' '}
//               and start developing websites even faster with components on top
//               of Tailwind CSS.
//             </p>
//           </div>
//         </div>
//         <h2 id="accordion-flush-heading-2">
//           <button
//             type="button"
//             class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
//             data-accordion-target="#accordion-flush-body-2"
//             aria-expanded="false"
//             aria-controls="accordion-flush-body-2"
//           >
//             <span>Is the?</span>
//             <svg
//               data-accordion-icon=""
//               class="w-6 h-6 shrink-0"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </h2>
//         <div
//           id="accordion-flush-body-2"
//           class="hidden"
//           aria-labelledby="accordion-flush-heading-2"
//         >
//           <div class="py-5 border-b border-gray-200 dark:border-gray-700">
//             <p class="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is first conceptualized and designed using the Figma
//               software so everything you see in the library has a design
//               equivalent in our Figma file.
//             </p>
//             <p class="text-gray-500 dark:text-gray-400">
//               Check out the{' '}
//               <a
//                 href="https://flowbite.com/figma/"
//                 class="text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Figma design system
//               </a>{' '}
//               based on the utility classes from Tailwind CSS and components from
//               Flowbite.
//             </p>
//           </div>
//         </div>
//         <h2 id="accordion-flush-heading-3">
//           <button
//             type="button"
//             class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
//             data-accordion-target="#accordion-flush-body-3"
//             aria-expanded="false"
//             aria-controls="accordion-flush-body-3"
//           >
//             <span>
//               What are the differences between Flowbite and Tailwind UI?
//             </span>
//             <svg
//               data-accordion-icon=""
//               class="w-6 h-6 shrink-0"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </h2>
//         <div
//           id="accordion-flush-body-3"
//           class="hidden"
//           aria-labelledby="accordion-flush-heading-3"
//         >
//           <div class="py-5 border-b border-gray-200 dark:border-gray-700">
//             <p class="mb-2 text-gray-500 dark:text-gray-400">
//               The main difference is that the core components from Flowbite are
//               open source under the MIT license, whereas Tailwind UI is a paid
//               product. Another difference is that Flowbite relies on smaller and
//               standalone components, whereas Tailwind UI offers sections of
//               pages.
//             </p>
//             <p class="mb-2 text-gray-500 dark:text-gray-400">
//               However, we actually recommend using both Flowbite, Flowbite Pro,
//               and even Tailwind UI as there is no technical reason stopping you
//               from using the best of two worlds.
//             </p>
//             <p class="mb-2 text-gray-500 dark:text-gray-400">
//               Learn more about these technologies:
//             </p>
//             <ul class="pl-5 list-disc text-gray-500 dark:text-gray-400">
//               <li>
//                 <a
//                   href="https://flowbite.com/pro/"
//                   class="text-blue-600 dark:text-blue-500 hover:underline"
//                 >
//                   Flowbite Pro
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://tailwindui.com/"
//                   rel="nofollow"
//                   class="text-blue-600 dark:text-blue-500 hover:underline"
//                 >
//                   Tailwind UI
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;








import React, { useState } from "react";
import {GoDiffAdded} from "react-icons/go"
import {AiOutlineMinusSquare} from "react-icons/ai"



const datas=[{
    id:"1",
    title:"Digital Learning",
    description:"Digital Learning is a service provided by us to improve the literacy rate of our village. We offers full free and quality education."},
    
  {
    id:"2",
    title:"Medical",
    description:"Medical services means Medically Necessary services, including, as the context requires, Confinement, treatments, procedures, tests, examinations .",
    
  },
  {
    id:"3",
    title:"Events",
    description:"Check out some amazing free events in village to take away all the fun experiences. There can be a lot that might be offering but all the events make it unique, distinctive and different from others.",
    
  },
  {
    id:"4",
    title:"Donations",
    description:"We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
    
  },
  {
    id:"5",
    title:"Digital Learning",
    description:"We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
  
  },
  {
    id:"6",
    title:"Digital Learning",
    description:"We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
   
  }]




const Faq1 = () => {
    const [active, setActive] = useState("");
    

    return (
        <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6  px-4">
            <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
            <div className=" flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className=" ">
                    <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 pt-4 ">Here are few of the most frequently asked questions by our valueable customers</p>
                </div>

                
            </div>
            <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className=" md:w-5/12 lg:w-4/12 w-full mb-4  ">
                    <img src="https://myexam.allen.ac.in/wp-content/uploads/2015/10/Digital-India-2.jpg" alt="Img of Glass bottle" className="w-full md:block hidden" />
                    <img src="https://myexam.allen.ac.in/wp-content/uploads/2015/10/Digital-India-2.jpg" alt="Img of Glass bottle" className="w-full md:hidden block " />

                </div>
                <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {/* <!-- Digital Section --> */}
                   
                   {
                     datas.map(data=><div>
                      <div>
                            <div className=" flex justify-between items-center cursor-pointer">
                                <h3 className=" font-semibold text-xl leading-5 text-gray-800">{data.title}</h3>
                               

                                {
                                 active && data.id === active ? <AiOutlineMinusSquare size={30} onClick={()=>setActive("")}/> : <GoDiffAdded size={30} onClick={()=>setActive(data?.id)} />  
                                }


                               
                            </div>
                            <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (data.id ===active ? "block" : "hidden")}>{data?.description}</p>
                        </div>
                         <hr className=" my-7 bg-gray-200" />
                 </div>)
                   }


                </div>



            </div>
        </div>
    );
};

export default Faq1;






