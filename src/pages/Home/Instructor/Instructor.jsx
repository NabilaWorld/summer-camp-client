import React, { useEffect } from 'react';
import { useState } from 'react';
import Teacher from './Teacher';

const Instructor = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teacher')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    return (

        <div>
            <h1 className='text-center font-bold text-3xl my-10 text-blue-800'>Instructor Pages</h1>

        <div className='max-w-screen-xl mx-auto mt-10 grid md:grid-cols-3'>
            {
                instructors.map(instructor =>
                    <Teacher key={instructor._id} instructor={instructor}>

                    </Teacher>)
            }

        </div>
        </div>
    );
};

export default Instructor;