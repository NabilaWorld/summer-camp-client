import React from 'react';
import logo from '../../../assets/sad-girl-illustration-free-vector.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (

        <div>
            <div className='flex gap-5 font-bold text-red-700 mx-[450px] mt-56  text-9xl'>
                <p data-aos="flip-left" data-aos-delay="100" data-aos-duration="500">4</p>
                <p data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000">0</p>
                <p data-aos="flip-left" data-aos-delay="100" data-aos-duration="1500">4</p>

            </div>

            
                <Link className='btn btn-secondary mx-[450px] mt-5' to='/'>Back To Home</Link>
           
        </div>


    );
};

export default ErrorPage;