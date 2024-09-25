'use client'
import useAxiosPublic from '@/hooks/useAxiosPublic/useAxiosPublic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DynamicTittle from '@/components/sheared/dynamcTitttle/DynamicTittle';
import { AiFillFacebook, AiFillInstagram, AiFillTwitch } from "react-icons/ai";

const OurTeam = () => {
     const [team, setTeam] = useState([]);
     const axiosPublic = useAxiosPublic();

     useEffect(()=> {
          try{
               axiosPublic.get('/api?collection=stylists')
               .then(res => setTeam(res.data))
          }catch(err){
            console.log(err)
          } 
     },[])

     const settings = {
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
    };
     console.log(team)
    return (
        <div>
             <DynamicTittle tittle={'Our Team'} description={'Meet our stylists and their expertise'}></DynamicTittle>
            <Slider {...settings}>
                    {
                        team.map(stylist =>  <div className='p-4 shadow-xl mx-6' key={stylist._id}>
                          <div className='w-48 h-48 mx-auto'>
                          <Image className='w-full h-full rounded-tr-[100px] rounded-bl-[100px] ' src={stylist.image} alt="stylist picture" width={500} height={500}/> 
                          </div>
                          <div>
                            <h3 className='bg-gradient-to-r from-black to-cyan-50 bg-clip-text text-transparent text-xl font-semibold'>{stylist.name}</h3>
                            <div className='text-center flex gap-4'>
                                <a href='https://www.facebook.com/zofaf.razin' target='_blank'><AiFillFacebook className='text-3xl text-cyan-500' /></a>
                                <a href='https://www.instagram.com/mdbin_razin/' target='_blank'><AiFillInstagram className='text-3xl text-cyan-500' /></a>
                            </div>
                          </div>
                        </div>)
                    }
            </Slider>
        </div>
    );
};

export default OurTeam;