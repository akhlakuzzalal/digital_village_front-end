import React from 'react';
import { FaDonate, FaHandsHelping, FaHeart } from 'react-icons/fa';
import { FcDonate } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const CauseCard = (props) => {
    const { _id, title, image, description, goal, raised, category, donars} = props;

    const navigate = useNavigate();
    
    // handing donetion
    const handleDonate = () => {
        //  handle Donations(rout props);
        navigate(`/causedetails/${_id}`);
       
    }
        //Progressbar for
        let donationGoal = goal;
        let donationTotal = raised;
    
    
      const percentage = (donationTotal, donationGoal) => {
        return (donationTotal / donationGoal) * 100 > 100
          ? 100
          : (donationTotal / donationGoal) * 100;
      };
    
      let percent = percentage(donationTotal, donationGoal);

    return (
        <div className="rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between border-l-4  bg-blue-50 shadow hover:shadow-md">
        <div className="overflow-hidden rounded-xl h-full w-full">
        <div className="absolute top-10 text-white text-md left-0 z-50 bg-red-600 font-primary px-4 py-1 rounded-lg">{category}</div>
            <img className="transform hover:scale-125 transition duration-700 w-full h-full object-cover" src={image} alt={title} />
        </div>
          

        <div className="flex flex-col flex-grow">
            {/* title and description */}
            <div className="flex flex-col space-y-1 my-4">
                <h2 className="text-gray-900 font-semibold text-lg">{title}</h2>
                
                <p className="text-gray-500 text-sm">{description.slice(0, 110)}</p>                   
            </div>
        </div>
        {/* card footer  */}
        <div className="flex items-center justify-between pt-3">
            <button className="w-100 space-x-1 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-r-indigo-500"><FaHandsHelping className='text-2xl text-red-400'/><p>RAISED {raised}</p></button>
            
            <button className="w-100  space-x-1 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-l-indigo-500"><FaDonate className='text-2xl text-red-400'></FaDonate><p> GOAL  {goal}</p></button>
            
        </div>
        <div class="py-5">
        <p class="text-gray-600">Raised {percent.toFixed(0)}% completed</p>
                                <Progress
                                    percent={percent.toFixed(0)}
                                    theme={
                                             {
                                                error: {
                                                symbol: percent.toFixed(0) + '%',
                                                trailColor: 'red',
                                                color: 'red'
                                                },
                                                default: {
                                                symbol: percent.toFixed(0) + '%',
                                                trailColor: 'lightblue',
                                                color: 'blue',
                                                
                                                
                                                },
                                                active: {
                                                symbol:`${percent.toFixed(0) +'%'}`,
                                                trailColor: 'purple',
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
        {/* Button */}
        <div className="flex items-center justify-between pt-3">
            <button className="w-100 flex items-center justify-center px-3 bg-transparent border-1 border-red-500 text-red-500 text-lg rounded-lg"><FaHeart className='text-2xl text-red-400'/> {donars.length} </button>
            <button className="w-100 flex items-center justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl"onClick={handleDonate}><FcDonate className='text-2xl'></FcDonate> Donate</button>
        </div>
    </div>
    );
};

export default CauseCard;