import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const ExploreBlogs = () => {
    
    const [toursPack, setToursPack] = useState([]);

    useEffect(() => {
        // fetch('https://sm-travel-solo.herokuapp.com/tours')

        fetch('https://powerful-taiga-35420.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setToursPack(data))
            
    }, [])
    return (
        <>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">         
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                toursPack?.map(item => {
                    return (

                        <SingleBlog key={item._id} {...item} />               
                    )
                })
            }
        </div>
        </section>  
        </>
    );
};

export default ExploreBlogs;