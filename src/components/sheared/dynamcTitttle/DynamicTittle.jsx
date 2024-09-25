import React from 'react';

const DynamicTittle = ({tittle , description}) => {
    return (
<div className='bg-gradient-to-r from-sky-300 to-cyan-50 my-6 p-8 rounded-lg'>
    <h3 className='text-xl md:text-2xl font-bold text-gray-800 w-full md:w-1/2 mx-auto flex items-center justify-center'>
        <span className='w-[30px] h-[4px] bg-[#fff] mr-2'></span> 
          {tittle}
        <span className='w-[30px] h-[4px] bg-[#fff] ml-2'></span> 
    </h3>
    <p className='text-gray-600 w-full md:w-1/2  mx-auto text-center mt-4'>
      {description}
    </p>
</div>

    );
};

export default DynamicTittle;