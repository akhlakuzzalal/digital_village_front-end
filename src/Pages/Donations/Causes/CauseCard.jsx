import React from 'react';
import { FaDonate, FaHandsHelping, FaHeart } from 'react-icons/fa';
import { FcDonate } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const CauseCard = (props) => {
    const { _id, title, image, description, goal, fee} = props;

    const navigate = useNavigate();
    
    // handing donetion
    const handleDonate = () => {
        //  handle Donations(rout props);
        navigate(`/causedetails/${_id}`);
       
    }
        //Progressbar for
        let donationGoal = goal;
        let donationTotal = fee;
    
    
      const percentage = (donationTotal, donationGoal) => {
        return (donationTotal / donationGoal) * 100 > 100
          ? 100
          : (donationTotal / donationGoal) * 100;
      };
    
      let percent = percentage(donationTotal, donationGoal);

    return (
        <div className="bg-white rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between border-l-4 border-purple-400">
        {/* image  */}
        <div className="overflow-hidden lg:rounded-full h-full w-full">
            <img className="transform hover:scale-125 transition duration-700 h-96 object-cover lg:rounded-full border-2 border-indigo-500" src={image} alt={title} />
        </div>
         {/* card footer  */}
         <div className="flex items-center justify-between pt-3">
            <button className="w-100 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6"><FaHandsHelping/>  RAISED {fee}</button>
            <button className="w-100 flex items-center justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6"><FaDonate></FaDonate> GOAL {goal}</button>
            
        </div>

        <div className="flex flex-col flex-grow">
            {/* title and description */}
            <div className="flex flex-col space-y-1 my-4">
                <h2 className="text-gray-700 font-primary text-lg">{title}</h2>
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
                <p className="text-gray-500 text-sm">{description.slice(0, 100)}</p>

            </div>
        </div>
        <div className="flex items-center justify-between pt-3">
            <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"onClick={handleDonate}><FaHeart/> : 250</button>
            <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"onClick={handleDonate}><FcDonate></FcDonate> Donate</button>
        </div>
    </div>
    );
};

export default CauseCard;