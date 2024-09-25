import React from 'react';
import PopularItems from './PopularItems';
import DynamicTittle from '@/components/sheared/dynamcTitttle/DynamicTittle';

const PopularServices = () => {
    return (
        <div >
              <div>
                <DynamicTittle tittle={'Our Popular Services'} description={'Discover a range of professional salon services that cater to your beauty needs. From haircuts and styling to relaxing spa treatments, we provide top-quality services to help you look and feel your best. Our skilled stylists and therapists are here to ensure you receive the pampering you deserve.'} />
              </div>

            <div className='max-w-6xl mx-auto'>
                <PopularItems/>
            </div>
        </div>
    );
};

export default PopularServices;

