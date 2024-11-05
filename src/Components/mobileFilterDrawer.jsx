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
                <FilterHeader/>
                <Divider />
                <AccordionComponent/>
            </div>
            <button className='text-white -mb-1 bg-black font-semibold flex items-center justify-center h-12 w-full '>Apply filters</button>
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