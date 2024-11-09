import Filter from '../Components/filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductCard from '../Components/productCard';
import Pagination from '@mui/material/Pagination';
import SortComponent from '../Components/sortComponent';
import FilterDrawer from '../Components/mobileFilterDrawer';


const Product = () => {
    const products = useSelector(state => state.products);
    const items = products.products;
    const dispatch = useDispatch()
    const totalItems = items.length;
    const [pageNum, setPageNum] = useState(1)

    const handlePageChange = (event, value) => {
        setPageNum(value)
        console.log(pageNum)
    }

    const p = useEffect(() => {
        // console.log(items)
        return () => {

        };
    }, []);

    return (
        <div className='p-[1rem] lg:pr-[2rem] lg:pl-[2.5rem]'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <p>Home</p>
                    <p className='text-lg'>&gt;</p>
                    <p className='font-semibold'>Casual</p>
                </div>
                <SortComponent />
            </div>
            <div className='flex justify-between items-center pt-[0.5rem]'>
                <div className='flex items-baseline gap-2'>
                    <p className='text-xl font-bold'>Casual</p>
                    {
                        pageNum == 1 ?
                            <p className='text-sm text-gray-600'>Showing {totalItems>0?<span>1</span>:<span>0</span>}-{items.slice(0, 9).length} of {totalItems} Items</p> :
                            <p className='text-sm text-gray-600'>Showing {totalItems>0?<span>{pageNum * 9 - 9}</span>:<span>0</span>}-{items.slice(0, pageNum*9).length} of {totalItems} Items</p>
                    }
                </div>
                <FilterDrawer />
            </div>
            <div className='lg:flex lg:gap-8'>
                <div className='w-1/3 h-auto'>
                    <Filter />
                </div>
                {
                    totalItems > 0 ? <div className='lg:w-3/4 lg:h-fit flex flex-wrap lg:gap-8 gap-6'>
                        {
                            pageNum == 1 ? items.slice(0, 9).map((p, idx) => {
                                return (
                                    <ProductCard key={idx} data={p} />
                                )
                            }) : items.slice(pageNum * 9 - 9, pageNum * 9).map((p, idx) => {
                                return (
                                    <ProductCard key={idx} data={p} />
                                )
                            })
                        }
                        <div className='flex  items-center mt-5 justify-center'>
                            {totalItems>9 && <Pagination page={pageNum} onChange={handlePageChange} className='lg:h-fit' count={5} shape="rounded" />}
                        </div>
                    </div> : <p className='text-center flex items-center m-auto h-fit'>No more products</p>
                }
            </div>
        </div>
    )
}

export default Product