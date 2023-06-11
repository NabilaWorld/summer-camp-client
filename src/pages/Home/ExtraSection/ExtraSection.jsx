import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Slide } from "react-awesome-reveal";

import extraImg1 from '../../../assets/extra (1).jpg'
import extraImg2 from '../../../assets/extra (2).jpg'
import extraImg3 from '../../../assets/extra (3).jpg'


const ExtraSection = () => {



    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Slide>
            <div className='mt-20'>
                <h1 className='text-center font-mono mt-10 uppercase text-red-500 font-bold '>welcome to our</h1>

                <h1 className='text-center font-bold text-3xl text-blue-950 mb-5'>HELLO SUMMER CAMP</h1>

                <h1 className='text-center font-bold text-2xl text-blue-950 mb-10'>Don't Miss the First Day of Summer Camp</h1>


                <div className='grid md:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-5 mb-10 '>



                    <div className='card-body bg-slate-100 rounded-xl ' data-aos="flip-left" data-aos-delay="100" data-aos-duration="500">
                        <div>
                            <img data-aos="zoom-out-right" data-aos-duration="600" data-aos-delay="500" className='rounded-3xl' src={extraImg2} alt="" />
                        </div>

                        <div data-aos="fade-up-right" data-aos-duration="600" data-aos-delay="1000" className='text-center font-bold bg-green-300 p-5 rounded-lg h-72'>
                            <h1 className='text-3xl text-white hover:text-[#d39013] duration-700'>Beginner Level:</h1>
                            <p className=' text-[#d39013] text-lg hover:text-white duration-700'> Age: 6-7</p>
                            <p className='text-white font-light'>Primary level drawing is a fundamental artistic activity for young children, encouraging creativity and imagination through basic shapes, lines, and colors. It helps develop fine motor skills and serves as a medium for self-expression and visual storytelling.</p>
                        </div>

                    </div>

                    <div className='card-body bg-slate-100 rounded-xl ' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                        <div>
                            <img data-aos="zoom-out-right" data-aos-duration="600" data-aos-delay="500" className='rounded-3xl' src={extraImg3} alt="" />
                        </div>

                        <div data-aos="fade-up-left" data-aos-duration="600" data-aos-delay="1000" className='text-center font-bold bg-red-300 p-5 rounded-lg h-72'>
                            <h1 className='text-3xl text-white hover:text-[#d39013] duration-700'>Intermediate Level</h1>
                            <p className=' text-[#d39013] text-lg hover:text-white duration-700'> Age: 8-12</p>
                            <p className='text-white font-light'>Intermediate level drawing builds upon the foundational skills, allowing artists to explore more complex subjects, techniques, and compositions. It involves honing proportions, shading, and adding depth to create more realistic and detailed artworks.</p>
                        </div>

                    </div>


                    <div className='card-body bg-slate-100 rounded-xl ' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                        <div>
                            <img data-aos="zoom-out-right" data-aos-duration="600" data-aos-delay="500" className='rounded-3xl' src={extraImg1} alt="" />
                        </div>

                        <div data-aos="fade-up-left" data-aos-duration="600" data-aos-delay="1000" className='text-center font-bold bg-yellow-300 p-5 rounded-lg h-72'>
                            <h1 className='text-3xl text-white hover:text-[#d39013] duration-700'>Advanced Level</h1>
                            <p className=' text-[#d39013] text-lg hover:text-white duration-700'> Age: 13-18</p>
                            <p className='text-white font-light'>Advanced level drawing showcases a mastery of technical skills and a deep understanding of composition, form, and perspective. Artists at this level often push the boundaries of creativity, experimenting with various mediums and styles to create intricate and conceptually rich artworks.</p>
                        </div>

                    </div>
                </div>

            </div>
        </Slide>
    );
};

export default ExtraSection;