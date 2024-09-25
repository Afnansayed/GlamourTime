import Image from 'next/image';
import React from 'react';
import  image from '../../../public/banner-2.jpg'
const ServicesPage = () => {
    return (
        <div className='relative'>
             <div className='w-full h-[252px]'>
                   <Image className='w-full h-full'  src={image} alt='banner' height={500} width={500}/>
             </div>
             <div className='w-3/4 ml-12 md:ml-0 md:w-1/2 mx-auto bg-gradient-to-t p-8 from-sky-300 to-cyan-50 absolute bottom-[-50px] md:right-[320px] rounded-md'>
                <div className='flex'>
                  <input className='p-2 w-full text-gray-600' type="text" placeholder='search....' />
                  <select className='p-2 w-full text-center text-gray-600 border-l-2'>
                    <option value="">Price Order</option>
                    <option value="asc">High to Low</option>
                    <option value="dsc">Low to High</option>
                  </select>
                </div>
                <div>
                <button className="w-full bg-gray-800 text-[#fff]  p-2 hover:bg-sky-200 hover:text-gray-800 hover:scale-y-110  transition-all">Popular Services</button>
                </div>
             </div>
        </div>
    );
};

export default ServicesPage;