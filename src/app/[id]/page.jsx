'use client'
import React, { useEffect, useState } from 'react';
import useAxiosPublic from './../../hooks/useAxiosPublic/useAxiosPublic';
import Image from 'next/image';
import { FaCartArrowDown } from "react-icons/fa6";
const ServiceDetailPage = ({ params }) => {
      const [service, setService] = useState([]);
    const axiosPublic = useAxiosPublic();
   
    useEffect(() => {
            try{
                axiosPublic.get(`/api?collection=services&id=${params.id}`)
                .then(res => setService(res.data))
            }catch(error){
                console.log(error)
            }
    },[])
     console.log(service)
    return (
        <div className='mt-12 flex flex-col md:flex-row '>
            <div className='w-full'>
                <Image className='w-full' src={service.image} width={500} height={500} alt="service picture"/>
            </div>
            
            <div className='bg-gradient-to-r from-sky-300 to-cyan-50 flex justify-center items-center w-full p-8 md:p-0 lg:p-0'>
                <div>
                <h1 className='text-3xl font-bold text-gray-800'>{service.name}</h1>
                <p className='text-gray-600'>{service.description}</p>
                <div className='mt-6'>
                <p className='text-gray-800 text-xl font-semibold'>Price : {service.price} $</p>
                <p className='text-gray-800 text-xl font-semibold'>Duration : {service.duration} min</p>

                <button className=" bg-gray-800 text-[#fff] rounded-lg px-6 py-2 hover:bg-sky-200 hover:text-gray-800 hover:scale-y-110  transition-all mt-6 flex justify-center items-center gap-6">Add to Card <FaCartArrowDown /></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage ;