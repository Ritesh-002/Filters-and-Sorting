import * as React from 'react';
import Divider from '@mui/material/Divider';
import AccordionComponent from './accordionComponent';
import FilterHeader from './filterHeader';

// laptop filter
const Filter = () => {

    return (
        <div className='border-2 border-gray-300 rounded-md p-2 mt-5 hidden lg:block'>
            <div className='p-[1rem] flex justify-between items-center'>
                <p className='font-semibold text-xl'>Filters</p>
            </div>
            <Divider />
            <FilterHeader />
            <Divider />
            <AccordionComponent />
            <button className='text-white bg-black font-semibold flex items-center justify-center h-12 my-3 w-full rounded-full'>Apply filters</button>
        </div>
    )
}

export default Filter