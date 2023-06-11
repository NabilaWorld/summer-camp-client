import React from 'react';
import img from '../../../assets/template.png'

const Footer = () => {
    return (
        <div className=' text-white bg-gray-500 py-10 px-5'>
            <div className='grid md:grid-cols-3 '>
            <div>
            <img className='w-40 rounded-3xl' src={img} alt="" />
            <h1 className='font-bold text-3xl'>Let's Learn Drawing</h1>
            </div>

            <div>
                <h1>email: mnabila30163@gmail.com</h1>
                <h1>email: nabila@gmail.com</h1>
                <h1>email: kabir@gmail.com</h1>
                <h1>email: saimon@gmail.com</h1>
            </div>

            <div>
                <h1>Address:</h1>
                <h1>Dhaka</h1>
                <h1>New Market</h1>
                <h1>31 Road</h1>
                <br />
                <h1>Address:</h1>
                <h1>Khulna</h1>
                <h1>Plaza</h1>
                <h1>2 Road</h1>
            </div>

            
        </div>
        <h1 className='text-center font-bold pt-5'>Copy Right: Please Visit Our Website </h1>
        </div>
    );
};

export default Footer;