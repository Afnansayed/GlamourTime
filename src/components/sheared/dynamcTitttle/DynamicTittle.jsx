import React from 'react';

const DynamicTittle = () => {
    return (
<div className='bg-gradient-to-r from-sky-300 to-cyan-50 my-6 p-12 rounded-lg'>
    <h3 className='text-xl md:text-2xl font-bold text-gray-800 w-full md:w-1/2 mx-auto flex items-center justify-center'>
        <span className='w-[30px] h-[4px] bg-[#fff] mr-2'></span> 
        Our Popular Services
        <span className='w-[30px] h-[4px] bg-[#fff] ml-2'></span> 
    </h3>
    <p className='text-gray-600 w-full md:w-1/2  mx-auto text-center mt-4'>
        Discover a range of professional salon services that cater to your beauty needs. From haircuts and styling to relaxing spa treatments, we provide top-quality services to help you look and feel your best. Our skilled stylists and therapists are here to ensure you receive the pampering you deserve.
    </p>
</div>

    );
};

export default DynamicTittle;