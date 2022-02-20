
import React, { useEffect, useState } from 'react';
import CauseCard from './CauseCard';

const Causes = () => {
    const [causes, setCauses] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-everglades-35803.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setCauses(data))
            
    }, [])
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center py-7">
          <h3 className="animate-bounce text-green-500">Welcome to Village Donations</h3>
          <p>You can donate the available from here and Get Help Request</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                causes?.map(item => {
                    return (

                        <CauseCard key={item._id} {...item} />               
                    )
                })
            }
        </div>
        </section>
    );
};

export default Causes;