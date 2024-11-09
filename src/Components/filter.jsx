import * as React from 'react';
import Divider from '@mui/material/Divider';
import AccordionComponent from './accordionComponent';
import FilterHeader from './filterHeader';
import { SelectionContext } from '../App';
import { useDispatch } from 'react-redux';
import { filterProductsByColor, filterProductsByPriceRange, filterProductsByType } from '../Redux/Features/productSlice';

// laptop filter
const Filter = () => {
    const { selectedItems, setSelectedItems, selectedItemsPriceRange, selectedItemsColors } = React.useContext(SelectionContext)
    const selectedText = selectedItems.map(index => ['T-Shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'][index]);
    // ['bg-black', 'bg-red-500', 'bg-green-500', 'bg-gray-50', 'bg-pink-500', 'bg-yellow-500', 'bg-gray-400']
    const selectedItemColor = selectedItemsColors.map(index => ['black', 'red', 'green', 'white', 'pink', 'yellow', 'gray'][index])
    const dispatch = useDispatch();
    const handleApplyFilterClick = (selectedText) => {
        dispatch(filterProductsByType(selectedText))
    }
    const handleApplyFilterPriceClick = (selectedItemsPriceRange) => {
        dispatch(filterProductsByPriceRange(selectedItemsPriceRange))
    }
    const handleApplyColorClick = (selectedItemColor) => {
        dispatch(filterProductsByColor(selectedItemColor));
    }
    const handleMultipleActions = (text) => {
        handleApplyFilterPriceClick(selectedItemsPriceRange);
        handleApplyFilterClick(text);
        handleApplyColorClick(selectedItemColor);
    };
    return (
        <div className='border-2 border-gray-300 rounded-md p-2 mt-5 hidden lg:block'>
            <div className='p-[1rem] flex justify-between items-center'>
                <p className='font-semibold text-xl'>Filters</p>
            </div>
            <Divider />
            <FilterHeader />
            <Divider />
            <AccordionComponent />
            <button onClick={() => handleMultipleActions(selectedText)} className='text-white bg-black font-semibold flex items-center justify-center h-12 my-3 w-full rounded-full'>Apply filters</button>
        </div>
    )
}

export default Filter