import React from 'react';



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../../../assets/slide1.jpg'
import slide2 from '../../../../assets/slide1.jpg'
import slide3 from '../../../../assets/slide1.jpg'
import slide4 from '../../../../assets/slide1.jpg'
import slide5 from '../../../../assets/slide1.jpg'



const Cover = () => {
    return (
        <Carousel className='max-w-screen-xl mx-auto mt-5'>
                <div>
                    <img src={slide1} />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam vel, laudantium doloribus eius dolor necessitatibus voluptatibus quam fuga? Est quos quaerat perferendis hic possimus. Quae consequatur facere neque dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad architecto quae nam voluptatem dolorum molestias dolores sapiente esse. Perferendis rerum porro ex repellendus ipsam quod ipsum fugiat sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio earum similique? Neque, quod nobis! Dolore dolorem perspiciatis similique natus saepe iure consequatur ad quisquam id cum, accusamus, veniam reprehenderit!</p>
                    
                </div>
                <div>
                    <img src={slide2} />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam vel, laudantium doloribus eius dolor necessitatibus voluptatibus quam fuga? Est quos quaerat perferendis hic possimus. Quae consequatur facere neque dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad architecto quae nam voluptatem dolorum molestias dolores sapiente esse. Perferendis rerum porro ex repellendus ipsam quod ipsum fugiat sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio earum similique? Neque, quod nobis! Dolore dolorem perspiciatis similique natus saepe iure consequatur ad quisquam id cum, accusamus, veniam reprehenderit!</p>
                    
                </div>
                <div>
                    <img src={slide3} />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam vel, laudantium doloribus eius dolor necessitatibus voluptatibus quam fuga? Est quos quaerat perferendis hic possimus. Quae consequatur facere neque dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad architecto quae nam voluptatem dolorum molestias dolores sapiente esse. Perferendis rerum porro ex repellendus ipsam quod ipsum fugiat sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio earum similique? Neque, quod nobis! Dolore dolorem perspiciatis similique natus saepe iure consequatur ad quisquam id cum, accusamus, veniam reprehenderit!</p>
                    
                </div>

                <div>
                    <img src={slide1} />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam vel, laudantium doloribus eius dolor necessitatibus voluptatibus quam fuga? Est quos quaerat perferendis hic possimus. Quae consequatur facere neque dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad architecto quae nam voluptatem dolorum molestias dolores sapiente esse. Perferendis rerum porro ex repellendus ipsam quod ipsum fugiat sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio earum similique? Neque, quod nobis! Dolore dolorem perspiciatis similique natus saepe iure consequatur ad quisquam id cum, accusamus, veniam reprehenderit!</p>
                    
                </div>
                <div>
                    <img src={slide2} />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam vel, laudantium doloribus eius dolor necessitatibus voluptatibus quam fuga? Est quos quaerat perferendis hic possimus. Quae consequatur facere neque dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad architecto quae nam voluptatem dolorum molestias dolores sapiente esse. Perferendis rerum porro ex repellendus ipsam quod ipsum fugiat sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio earum similique? Neque, quod nobis! Dolore dolorem perspiciatis similique natus saepe iure consequatur ad quisquam id cum, accusamus, veniam reprehenderit!</p>
                    
                </div>
                <div>
                    <img src={slide3} />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam vel, laudantium doloribus eius dolor necessitatibus voluptatibus quam fuga? Est quos quaerat perferendis hic possimus. Quae consequatur facere neque dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad architecto quae nam voluptatem dolorum molestias dolores sapiente esse. Perferendis rerum porro ex repellendus ipsam quod ipsum fugiat sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio earum similique? Neque, quod nobis! Dolore dolorem perspiciatis similique natus saepe iure consequatur ad quisquam id cum, accusamus, veniam reprehenderit!</p>
                    
                </div>
            </Carousel>
    );
};

export default Cover;