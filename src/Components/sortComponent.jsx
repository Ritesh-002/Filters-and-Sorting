import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sortProducts } from '../Redux/Features/productSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const SortComponent = () => {
    const products = useSelector(state => state.products);
    const items = products.products;
    const dispatch = useDispatch()
    const [sort, setSort] = useState('');
    const handleSortChange = (event) => {
        console.log(event)
        dispatch(sortProducts(event.target.value))
        setSort(event.target.value);
    };
    return (
        <div className=''>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Sort</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={sort}
                    label="Sort"
                    onChange={handleSortChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Asc'}>Price -- Low to High</MenuItem>
                    <MenuItem value={'Des'}>Price -- High to Low</MenuItem>
                    <MenuItem value={'Des-Pop'}>Popularity</MenuItem>
                    <MenuItem value={'Des-time'}>Latest</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SortComponent