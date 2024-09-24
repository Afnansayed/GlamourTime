import React from 'react';
import PopularItems from './PopularItems';
import DynamicTittle from '@/components/sheared/dynamcTitttle/DynamicTittle';

const PopularServices = () => {
    return (
        <div >
              <div>
                <DynamicTittle/>
              </div>

            <div className='max-w-6xl mx-auto'>
                <PopularItems/>
            </div>
        </div>
    );
};

export default PopularServices;