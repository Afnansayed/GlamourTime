'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic/useAxiosPublic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DynamicTittle from '@/components/sheared/dynamcTitttle/DynamicTittle';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    const axiosPublic = useAxiosPublic();

    useEffect(() => {
           axiosPublic.get('/api?collection=reviews')
           .then(res => {
              setReviews(res.data)
           })
    
    },[])

    const setings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    }
    return (
        <div className='mt-12'>
             <div>
                 <DynamicTittle tittle={'What Our Customers Say About Us'}/>
             </div>
              <Slider {...setings}>
                  {
                    reviews.map(review => <section
                         key={review._id}
                         review={review}
                     className="p-6 h-[400px]">
                        <div className="container max-w-xl mx-auto">
                            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50 text-gray-800">
                                <Image className="w-24 h-24 rounded-full" src={review?.image} alt='men image' width={100} height={100}/>
                                <blockquote className="max-w-lg text-lg italic font-medium text-center h-[80px]">{review?.comment}</blockquote>
                                <div className="text-center text-gray-600">
                                    <p>{review?.name}</p>
                                    <p>{review?.userId}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full bg-gray-900"></button>
                                    <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full bg-gray-400"></button>
                                    <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full bg-gray-400"></button>
                                    <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full bg-gray-400"></button>
                                </div>
                            </div>
                        </div>
                    </section>)
                  }
              </Slider>
        </div>
    );
};

export default Testimonial;