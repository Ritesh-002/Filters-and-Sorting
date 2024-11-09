import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value) {
    return `$${value}°C`;
}

const AccordionComponent = () => {
    const [value, setValue] = useState([100, 280]);
    const handlePriceChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
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
                        {['Casual', 'Sportswear', 'Formal', 'Trendy', 'Streetwear'].map((text, index) => (
                            <ListItem className='h-8' key={text} disablePadding>
                                <ListItemButton className='flex justify-between'>
                                    <ListItemText primary={text} />
                                    <span>&gt;</span>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionComponent