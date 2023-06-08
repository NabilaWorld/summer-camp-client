import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Teacher = ({instructor}) => {
    const {image, name, email} = instructor;


    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className='card border mx-10 py-5 bg-slate-100  items-center mb-5' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
            <img data-aos="zoom-out-right" data-aos-duration="600"  data-aos-delay="500" className='w-60 rounded-lg hover:opacity-50' src={image} alt="" />

            <div data-aos="zoom-out-left" data-aos-duration="600"  data-aos-delay="1000" className='text-center '>
                <p> <b>Name:</b> {name} </p>
                <p> <b>Email:</b> {email} </p>
            </div>
        </div>
    );
};

export default Teacher;