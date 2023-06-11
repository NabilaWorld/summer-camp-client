import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



import slide1 from '../../../../assets/slide1.jpg'
import slide2 from '../../../../assets/slide2.jpg'
import slide3 from '../../../../assets/slide3.jpg'
import slide4 from '../../../../assets/slide4.jpg'
import slide5 from '../../../../assets/slide5.jpg'
import slide6 from '../../../../assets/slide6.jpg'



const Cover = () => {
    return (
        <div className='md:mx-10 mx-2 my-2 md:my-10 '>
            <AwesomeSlider className='md:h-[500px] h-96'>

                <div className='flex items-center gap-5 '>
                    <img src={slide1} className='md:w-[800px] w-56  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam saepe excepturi aspernatur possimus totam debitis aperiam quam quos deserunt molestias suscipit ipsum vel nulla nostrum voluptates, rem ipsam quaerat!
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <img src={slide2} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam saepe excepturi aspernatur possimus totam debitis aperiam quam quos deserunt molestias suscipit ipsum vel nulla nostrum voluptates, rem ipsam quaerat!
                    </div>
                </div>


                <div className='flex items-center gap-5'>
                    <img src={slide3} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam saepe excepturi aspernatur possimus totam debitis aperiam quam quos deserunt molestias suscipit ipsum vel nulla nostrum voluptates, rem ipsam quaerat!
                    </div>
                </div>


                <div className='flex items-center gap-5'>
                    <img src={slide4} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam saepe excepturi aspernatur possimus totam debitis aperiam quam quos deserunt molestias suscipit ipsum vel nulla nostrum voluptates, rem ipsam quaerat!
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <img src={slide5} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam saepe excepturi aspernatur possimus totam debitis aperiam quam quos deserunt molestias suscipit ipsum vel nulla nostrum voluptates, rem ipsam quaerat!
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <img src={slide6} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam saepe excepturi aspernatur possimus totam debitis aperiam quam quos deserunt molestias suscipit ipsum vel nulla nostrum voluptates, rem ipsam quaerat!
                    </div>
                </div>



            </AwesomeSlider>
        </div>
    );
};

export default Cover;