import React from 'react';



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../../../assets/slide1.jpg'
import slide2 from '../../../../assets/slide2.jpg'
import slide3 from '../../../../assets/slide3.jpg'
import slide4 from '../../../../assets/slide4.jpg'
import slide5 from '../../../../assets/slide5.jpg'
import slide6 from '../../../../assets/slide6.jpg'



const Cover = () => {
    return (
        <div>
            <Carousel className='max-w-screen-xl mx-auto  md:mt-5'>
                <div>
                    <img src={slide1} />
                    <p className="legend">Don't Waste your summer aimlessly, please join our summer camp drawing class and be a professional artist</p>
                    
                </div>

                <div>
                    <img src={slide2} />
                    <p className="legend">Don't Waste your summer aimlessly, please join our summer camp drawing class and be a professional artist</p>
                 </div>

                <div>
                    <img src={slide3} />
                    <p className="legend">Don't Waste your summer aimlessly, please join our summer camp drawing class and be a professional artist</p>
                </div>

                <div>
                    <img src={slide4} />
                    <p className="legend">Don't Waste your summer aimlessly, please join our summer camp drawing class and be a professional artist</p>
                    
                </div>

                <div>
                    <img src={slide5} />
                    <p className="legend">Don't Waste your summer aimlessly, please join our summer camp drawing class and be a professional artist</p>
                    
                </div>

                <div>
                    <img src={slide6} />
                    <p className="legend">Don't Waste your summer aimlessly, please join our summer camp drawing class and be a professional artist</p>
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Cover;