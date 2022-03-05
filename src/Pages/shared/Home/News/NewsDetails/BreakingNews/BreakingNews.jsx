import React from 'react';

const BreakingNews = () => {
    return (
        <div className="mt-5 md:mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-auto md:my-8 border-black'>
            <div className='col-span-3 md:grid-cols-1 mx-2 border-r-4'>
                <h1 className=' text-2xl md:text-4xl md:mb-10 text-center  md:w-full '>BREAKING NEWS</h1>
                <hr className='border-b-8 mb-4 md:mb-8' />
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOasSJt4tnq6Tvl_rIcG40kZ0GSvGi_NGQwQ&usqp=CAU" alt="" />

                <div className=' my-2 md:my-5 p-2 shadow-lg rounded mx-2'>
                    <span className='text-gray-500'>February,28,2022 / by </span>
                      <span className='text-red-400'> Digital Village Authority</span>
                      <h1 className=' text-xl md:text-3xl my-3'>The Impact of Family Structure on the Health of Children: Effects of Divorce</h1>
                      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos sociosqu ad litora.</p>
                      <hr className='md:my-8 mb-5' />
                </div>
                <div className='my-2 md:my-5 p-2 shadow-lg rounded mx-2'>
                    <span className='text-gray-500'>January,01,2022 / by </span>
                      <span className='text-red-400'> Digital Village Authority</span>
                      <h1 className=' text-xl md:text-3xl my-3'>Sex Education Based on Abstinence? There’s a Real Absence of Evidence</h1>
                      <p>Sed sapien tortor, aliquet a velit ut, lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus.</p>
                      <hr className='md:my-8' />
                </div>
            </div>



            <div >
                <h1 className='text-2xl md:text-4xl md:mb-10 text-center my-2  md:w-full'>DAILY FEED</h1>
                <hr className='border-b-8 mb-8' />
                <ul>
                    
                    <div className='border my-2 md:my-8 mx-2 md:mx-3 p-2  shadow-lg'>
                    <li><h5 className='font-bolder text-xl text-left mb-2 '>LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS </h5></li>
                    <li><span>The Impact of Family Structure on the Health of Children: Effects of Divorce</span></li>
                    </div>
                    <div className='border my-2 md:my-8 mx-2 md:mx-3 p-2  shadow-lg'>
                    <li><h5 className='font-bolder text-xl text-left mb-2 '>LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS </h5></li>
                    <li><span>The Impact of Family Structure on the Health of Children: Effects of Divorce</span></li>
                    </div>
                    <div className='border my-2 md:my-8 mx-2 md:mx-3 p-2  shadow-lg'>
                    <li><h5 className='font-bolder text-xl text-left mb-2 '>LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS </h5></li>
                    <li><span>The Impact of Family Structure on the Health of Children: Effects of Divorce</span></li>
                    </div>
                    <div className='border my-2 md:my-8 mx-2 md:mx-3 p-2  shadow-lg'>
                    <li><h5 className='font-bolder text-xl text-left mb-2 '>LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS </h5></li>
                    <li><span>The Impact of Family Structure on the Health of Children: Effects of Divorce</span></li>
                    </div>
                    <div className='border my-2 md:my-8 mx-2 md:mx-3 p-2  shadow-lg'>
                    <li><h5 className='font-bolder text-xl text-left mb-2 '>LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS </h5></li>
                    <li><span>The Impact of Family Structure on the Health of Children: Effects of Divorce</span></li>
                    </div>
                    <div className='border my-2 md:my-8 mx-2 md:mx-3 p-2  shadow-lg'>
                    <li><h5 className='font-bolder text-xl text-left mb-2 '>LIVERPOOL TOPS HOFFENHEIM IN FIRST LEG OF CHAMPIONS </h5></li>
                    <li><span>The Impact of Family Structure on the Health of Children: Effects of Divorce</span></li>
                    </div>
                   

                    
                </ul>
                
            </div>

            </div>
            
        </div>
    );
};

export default BreakingNews;