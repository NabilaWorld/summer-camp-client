import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import StdClass from './StdClass';

import { Fade } from "react-awesome-reveal";



const Class = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-steel.vercel.app/class')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {

            setIsLoading(false);
        }, 2000);
    }, []);

    return (

        
            <div>
            {isLoading ? (
                <div className='text-center font-bold text-yellow-500'>
                    <span className="loading loading-spinner text-warning"></span>
                     Waiting I'm Coming 
                    <span className="loading loading-spinner text-warning"></span>
                    </div>
            ) : (

                <div>
                    <Fade duration={500} delay={200}><h1 className='text-center font-bold text-3xl my-10 text-blue-800 '>Class Pages</h1></Fade>

                    <div className='grid md:grid-cols-3 gap-8 mt-5 md:max-w-screen-xl md:mx-auto ml-20 mb-5'>
                        {
                            classes.map((myClass) => <StdClass
                                key={myClass._id}
                                myClass={myClass}
                               
                            ></StdClass>)
                        }
                    </div>
                </div>
            )}
        </div>
        
    );
};

export default Class;