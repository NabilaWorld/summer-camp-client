import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Teacher = ({instructor}) => {
    const {image, name, email} = instructor;


    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className='w-80 card border p-5 bg-slate-200 rounded-lg' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >

            <img className='rounded-lg' data-aos="zoom-out-right" data-aos-duration="600"  data-aos-delay="500"  src={image} alt="" />

            <div data-aos="zoom-out-left" data-aos-duration="600"  data-aos-delay="1000" className='bg-yellow-200 text-black p-5 rounded-lg mt-2 text-center'>
                <p> <b>Name:</b> {name} </p>
                <p> <b>Email:</b> {email} </p>
            </div>
        </div>
    );
};

export default Teacher;