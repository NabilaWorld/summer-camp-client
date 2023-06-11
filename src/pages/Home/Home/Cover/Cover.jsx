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
                        <h1 className='text-center font-bold text-white text-2xl'>Oil Pastel</h1> <br />

                        <p className='text-center font-bold text-white'>In our Summer Camp drawing class provide you the oil pastel drawing class according to primary, Intermediate and high level drawing training </p> <br />


                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <img src={slide2} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        <h1 className='text-center font-bold text-white text-2xl'>Water Color</h1> <br />

                        <p className='text-center font-bold text-white'>In our Summer Camp drawing class provide you the Water Color drawing class according to primary, Intermediate and high level drawing training </p> <br />
                    </div>
                </div>


                <div className='flex items-center gap-5'>
                    <img src={slide3} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        <h1 className='text-center font-bold text-white text-2xl'>Poster Color</h1> <br />

                        <p className='text-center font-bold text-white'>In our Summer Camp drawing class provide you the Poster Color drawing class according to primary, Intermediate and high level drawing training </p> <br />
                    </div>
                </div>


                <div className='flex items-center gap-5'>
                    <img src={slide4} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        <h1 className='text-center font-bold text-white text-2xl'>Color Pencil</h1> <br />

                        <p className='text-center font-bold text-white'>In our Summer Camp drawing class provide you the Color Pencil drawing class according to primary, Intermediate and high level drawing training </p> <br />
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <img src={slide5} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        <h1 className='text-center font-bold text-white text-2xl'>Pencil</h1> <br />

                        <p className='text-center font-bold text-white'>In our Summer Camp drawing class provide you the Pencil drawing class according to primary, Intermediate and high level drawing training </p> <br />
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <img src={slide6} className='md:w-[800px] w-60  rounded-3xl' alt="" />

                    <div className=' md:w-96 w-60 text-white ' >
                        <h1 className='text-center font-bold text-white text-2xl'>Wax Color</h1> <br />

                        <p className='text-center font-bold text-white'>In our Summer Camp drawing class provide you the wax color drawing class according to primary, Intermediate and high level drawing training </p> <br />
                    </div>
                </div>



            </AwesomeSlider>
        </div>
    );
};

export default Cover;