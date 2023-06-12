import React, { useEffect } from 'react';
import { useState } from 'react';
import Teacher from './Teacher';

const Instructor = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-steel.vercel.app/teacher')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {

            setIsLoading(false);
        }, 2000);
    }, []);


    return (

        <div>
            <div>
                {isLoading ? (
                    <div className='text-center font-bold text-yellow-500'>
                        <span className="loading loading-spinner text-warning"></span>
                         Waiting I'm Coming 
                        <span className="loading loading-spinner text-warning"></span>
                        </div>
                ) : (


                    <div>
                        <h1 className='text-center font-bold text-3xl my-10 text-blue-800 '>Instructor Pages</h1>

                        <div className='grid md:grid-cols-3 gap-8 mt-5 md:max-w-screen-xl md:mx-auto ml-20 mb-5'>
                            {
                                instructors.map(instructor =>
                                    <Teacher key={instructor._id} instructor={instructor}>

                                    </Teacher>)
                            }

                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Instructor;