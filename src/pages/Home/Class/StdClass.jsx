import React, {  useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


const StdClass = ({ myClass }) => {
    const { image, name, email, available_seat, price } = myClass;

   

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div>
            
            <div className='card w-80 border p-4 bg-slate-200' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">

            <img data-aos="zoom-out-right" data-aos-duration="600" data-aos-delay="500" className='rounded-lg ' src={image} alt="" />

            <div data-aos="zoom-out-left" data-aos-duration="600"  data-aos-delay="1000" className='bg-yellow-200 text-black p-5 rounded-lg mt-2 text-center'>
                <p> <b>Name:</b> {name} </p>
                <p> <b>Email:</b> {email} </p>
                <p> <b>Available_Seat:</b> {available_seat} </p>
                <p> <b>Price:</b> {price} </p>
            </div>
            <button data-aos="zoom-out-left" data-aos-duration="600"  data-aos-delay="1200" className='btn btn-warning mt-2'>Add Class</button>
        </div>
        
        </div>
    );
};

export default StdClass;