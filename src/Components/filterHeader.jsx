import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useContext, useRef, useState } from 'react';
import { SelectionContext } from '../App';

const FilterHeader = () => {
    // const [selectedItems, setSelectedItems] = useState([]);
    const {selectedItems, setSelectedItems} = useContext(SelectionContext);
    const handleFilterHeaderClick = (index) => {
        setSelectedItems((prevSelected) => {
            if (prevSelected.includes(index)) {
                // Remove from selected if already selected
                return prevSelected.filter((itemIndex) => itemIndex !== index);
            } else {
                // Add to selected if not selected
                return [...prevSelected, index];
            }
        });
    }
    return (
        <List>
            {['T-Shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((text, index) => (
                <ListItem style={{
                    fontWeight: selectedItems.includes(index) ? 'bolder' : 'normal', // Apply bold if selected
                }} onClick={() => handleFilterHeaderClick(index)} className='h-8' key={text} disablePadding>
                    <ListItemButton style={{
                        fontWeight: selectedItems.includes(index) ? 'bolder' : 'normal', // Apply bold if selected
                    }} className='flex justify-between'>
                        <ListItemText style={{fontWeight: 'bolder'}}>
                            {text}
                        </ListItemText>
                        <span>&gt;</span>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default FilterHeader