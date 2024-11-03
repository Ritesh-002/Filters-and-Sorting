// import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GiSettingsKnobs } from 'react-icons/gi';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ImCross } from 'react-icons/im';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import Filter from '../Components/filter';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductCard from '../Components/productCard';

function valuetext(value) {
    return `$${value}°C`;
}

const Product = () => {
    const products = useSelector(state => state.products);
    const [age, setAge] = useState('');

    const [state, setState] = useState({
        bottom: false,
    });

    const [value, setValue] = useState([100, 280]);

    const handlePriceChange = (event, newValue) => {
        setValue(newValue);
    };

    const p = useEffect(() => {
        console.log(products)
        return () => {
            
        };
    }, []);

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
                <List>
                    {['T-Shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((text, index) => (
                        <ListItem className='h-8' key={text} disablePadding>
                            <ListItemButton className='flex justify-between'>
                                <ListItemText primary={text} />
                                {/* <ListItemIcon> */}
                                <span>&gt;</span>
                                {/* </ListItemIcon> */}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className='text-xl font-semibold'
                        >
                            Price
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ width: 'full' }}>
                                <Slider
                                    color='black'
                                    getAriaLabel={() => 'Price range'}
                                    value={value}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="on"
                                    getAriaValueText={valuetext}
                                    min={10}
                                    max={500}
                                    valueLabelFormat={(value) => `$${value}`}
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className='text-xl font-semibold'
                        >
                            Color
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex gap-5 flex-wrap mb-3">
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-black"></div>
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-red-500"></div>
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-green-500"></div>
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-blue-500"></div>
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-gray-50"></div>
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-pink-500"></div>
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-yellow-500"></div>
                                <div className="hover:cursor-pointer h-8 w-8 rounded-full bg-gray-400"></div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            className='text-xl font-semibold'
                        >
                            Size
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='flex gap-3 flex-wrap'>
                                <div className='bg-gray-200 h-12 w-28 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>XX-Small</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-24 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>X-Small</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-28 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>XX-Large</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-24 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>Small</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-24 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>Medium</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-28 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>2X-Large</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-28 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>3X-Large</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-28 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>4X-Large</p>
                                </div>
                                <div className='bg-gray-200 h-12 w-24 rounded-full text-center pt-2'>
                                    <p className='text-gray-500'>X-Large</p>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                            className='text-xl font-semibold'
                        >
                            Dress Style
                        </AccordionSummary>
                        <AccordionDetails>
                            <List className=''>
                                {['T-Shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((text, index) => (
                                    <ListItem className='h-8' key={text} disablePadding>
                                        <ListItemButton className='flex justify-between'>
                                            <ListItemText primary={text} />
                                            {/* <ListItemIcon> */}
                                            <span>&gt;</span>
                                            {/* </ListItemIcon> */}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </Box>
    );

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='p-[1rem] lg:pr-[2rem] lg:pl-[2.5rem]'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <p>Home</p>
                    <p className='text-lg'>&gt;</p>
                    <p className='font-semibold'>Casual</p>
                </div>
                <div className=''>
                    {/* <p className='text-gray-500'>Sort by:</p> */}
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Sort</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Sort"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Price -- Low to High</MenuItem>
                            <MenuItem value={20}>Price -- High to Low</MenuItem>
                            <MenuItem value={30}>Popularity</MenuItem>
                            <MenuItem value={30}>Latest</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='flex justify-between items-center pt-[0.5rem]'>
                <div className='flex items-baseline gap-2'>
                    <p className='text-xl font-bold'>Casual</p>
                    <p className='text-sm text-gray-600'>Showing 1-10 of 100 products</p>
                </div>
                <div className='pr-[0.5rem]'>
                    {/* <GiSettingsKnobs size={'25px'} /> */}
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
            </div>
            <div className='lg:flex lg:gap-5'>
                <div className='w-1/4 h-auto'>
                    <Filter/>
                </div>
                <div className='lg:w-3/4 lg:h-fit flex flex-wrap lg:gap-8 gap-6'>
                    {
                        products.slice(0,6).map((p, idx) => {
                            return (
                                <ProductCard key={idx} data={p} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product