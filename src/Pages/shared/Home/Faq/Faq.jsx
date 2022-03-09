
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
                                 active && data.id === active ? <AiOutlineMinusSquare className="hover:rotate-180 transition duration-700 ease-in-out" size={30} onClick={()=>setActive("")}/> : <GoDiffAdded className="hover:rotate-180 transition duration-700 ease-in-out" size={30} onClick={()=>setActive(data?.id)} />  
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






