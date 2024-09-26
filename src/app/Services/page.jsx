'use client'
import Image from 'next/image';
import React from 'react';
import  image from '../../../public/banner-2.jpg'
import ServiceItem from '@/components/servicePage/serviceItem/ServiceItem';
import { useEffect, useState } from 'react';
const ServicesPage = () => {
    const [price, setPrice] = useState('');
    const [search, setSearch] = useState('');

    // price filter
    const handlePrice = (e) => {
        const value = e.target.value;
        setPrice(value);
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    console.log(search)
    return (
    <div>
        <div className='relative'>
             <div className='w-full h-[252px]'>
                   <Image className='w-full h-full'  src={image} alt='banner' height={500} width={500}/>
             </div>
             <div className='w-3/4 ml-12  md:w-1/2 mx-auto bg-gradient-to-t p-8 from-sky-300 to-cyan-50 absolute bottom-[-50px] md:right-[220px] lg:right-[320px] rounded-md'>
                <div className='flex'>
                  <input onChange={handleSearch} className='p-2 w-full text-gray-600' type="text" placeholder='search....' />
                  <select onChange={handlePrice} className='p-2 w-full text-center text-gray-600 border-l-2'>
                    <option value="">Price Order</option>
                    <option value="dsc">High to Low</option>
                    <option value="asc">Low to High</option>
                  </select>
                </div>
                <div>
                <button className="w-full bg-gray-800 text-[#fff]  p-2 hover:bg-sky-200 hover:text-gray-800 hover:scale-y-110  transition-all">Popular Services</button>
                </div>
             </div>
        </div>
        {/* banner section end */}

        <div className='mt-16 md:mt-24'>
            <ServiceItem price={price} search={search} />
        </div>

    </div>    
    );
};

export default ServicesPage;