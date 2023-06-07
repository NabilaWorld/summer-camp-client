import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import extraImg1 from '../../../assets/extra (1).jpg'
import extraImg2 from '../../../assets/extra (2).jpg'
import extraImg3 from '../../../assets/extra (3).jpg'

const ExtraSection = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div>
            <h1 className='text-center font-mono mt-10 uppercase text-red-500 font-bold '>welcome to our</h1>

            <h1 className='text-center font-bold text-3xl text-blue-950 mb-10'>HELLO SUMMER CAMP</h1>

            <div className='grid md:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-5 mb-10 '>

                <div className='card-body bg-slate-100 rounded-xl ' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                    <div>
                        <img data-aos="zoom-out-right" data-aos-duration="600"  data-aos-delay="2000" className='rounded-3xl' src={extraImg1} alt="" />
                    </div>

                    <div data-aos="fade-up-left" data-aos-duration="600"  data-aos-delay="3000" className='text-center font-bold bg-yellow-300 p-5 rounded-lg'>
                        <h1 className='text-3xl text-white hover:text-[#d39013] duration-700'>Water Color</h1>
                        <p className=' text-[#d39013] text-lg hover:text-white duration-700'> Age: 6-7</p>
                        <p className='text-white font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus delectus corporis quo quos obcaecati ullam aliquam nobis! Doloribus rem, nesciunt obcaecati iusto cumque deserunt sed sit totam voluptate maiores.</p>
                    </div>

                </div>

                <div className='card-body bg-slate-100 rounded-xl ' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                    <div>
                        <img data-aos="zoom-out-right" data-aos-duration="600"  data-aos-delay="2000" className='rounded-3xl' src={extraImg2} alt="" />
                    </div>

                    <div data-aos="fade-up-right" data-aos-duration="600"  data-aos-delay="3000" className='text-center font-bold bg-green-300 p-5 rounded-lg'>
                        <h1 className='text-3xl text-white hover:text-[#d39013] duration-700'>Water Color</h1>
                        <p className=' text-[#d39013] text-lg hover:text-white duration-700'> Age: 6-7</p>
                        <p className='text-white font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus delectus corporis quo quos obcaecati ullam aliquam nobis! Doloribus rem, nesciunt obcaecati iusto cumque deserunt sed sit totam voluptate maiores.</p>
                    </div>

                </div>

                <div className='card-body bg-slate-100 rounded-xl ' data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                    <div>
                        <img data-aos="zoom-out-right" data-aos-duration="600"  data-aos-delay="2000" className='rounded-3xl' src={extraImg3} alt="" />
                    </div>

                    <div data-aos="fade-up-left" data-aos-duration="600"  data-aos-delay="3000" className='text-center font-bold bg-red-300 p-5 rounded-lg'>
                        <h1 className='text-3xl text-white hover:text-[#d39013] duration-700'>Water Color</h1>
                        <p className=' text-[#d39013] text-lg hover:text-white duration-700'> Age: 6-7</p>
                        <p className='text-white font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus delectus corporis quo quos obcaecati ullam aliquam nobis! Doloribus rem, nesciunt obcaecati iusto cumque deserunt sed sit totam voluptate maiores.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ExtraSection;