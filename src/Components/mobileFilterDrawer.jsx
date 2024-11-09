import * as React from 'react'
import { GiSettingsKnobs } from 'react-icons/gi';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import AccordionComponent from './accordionComponent';
import FilterHeader from './filterHeader';
import { filterProductsByColor, filterProductsByPriceRange, filterProductsByType } from '../Redux/Features/productSlice';
import { SelectionContext } from '../App';

const FilterDrawer = () => {
    const products = useSelector(state => state.products);
    const [state, setState] = useState({
        bottom: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const { selectedItems, setSelectedItems, selectedItemsColors, selectedItemsPriceRange, setSelectedItemsPriceRange } = React.useContext(SelectionContext)
    const selectedText = selectedItems.map(index => ['T-Shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'][index]);
    const dispatch = useDispatch();
    const selectedItemColor = selectedItemsColors.map(index => ['black', 'red', 'green', 'white', 'pink', 'yellow', 'gray'][index])
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
    const list = (anchor) => (
        <Box
            sx={{ width: 'full' }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className=''>
                <div className='p-[1rem] flex justify-between items-center'>
                    <p className='font-semibold text-xl'>Filters</p>
                    <ImCross className="hover:cursor-pointer" onClick={toggleDrawer(anchor, false)} />
                </div>
                <Divider />
                <FilterHeader />
                <Divider />
                <AccordionComponent />
            </div>
            <button onClick={() => handleMultipleActions(selectedText)} className='text-white -mb-1 bg-black font-semibold flex items-center justify-center h-12 w-full '>Apply filters</button>
        </Box>
    );
    return (
        <div className='pr-[0.5rem]'>
            <div className='lg:hidden'>
                <Button onClick={toggleDrawer('bottom', true)}><GiSettingsKnobs className='text-black' size={'25px'} /></Button>
                <Drawer
                    anchor={'bottom'}
                    open={state['bottom']}
                    onClose={toggleDrawer('bottom', false)}
                >
                    {list('bottom')}
                </Drawer>
            </div>
        </div>
    )
}

export default FilterDrawer