import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const FilterHeader = () => {
    return (
        <List>
            {['T-Shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((text, index) => (
                <ListItem className='h-8' key={text} disablePadding>
                    <ListItemButton className='flex justify-between'>
                        <ListItemText primary={text} />
                        <span>&gt;</span>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default FilterHeader