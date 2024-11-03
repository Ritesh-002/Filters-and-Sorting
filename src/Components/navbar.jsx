// import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { BsCart, BsCartX } from 'react-icons/bs';
import { Shop } from '@mui/icons-material';
import { FaShop } from 'react-icons/fa6';
import { BiPurchaseTag } from 'react-icons/bi';
import { MdNewReleases } from 'react-icons/md';
import { TbBrandAppleFilled } from 'react-icons/tb';

const drawerWidth = 200;

const NavBar = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <List>
                {['Profile', 'Cart', 'Shop', 'On Sale', 'New arrivals', 'Brands'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <RxAvatar size={'28px'} />}
                                {index === 1 && <BsCart size={'28px'} />}
                                {index === 2 && <FaShop size={'28px'} />}
                                {index === 3 && <BiPurchaseTag size={'28px'} />}
                                {index === 4 && <MdNewReleases size={'28px'} />}
                                {index === 5 && <TbBrandAppleFilled size={'28px'} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className=''>
            <div className='h-7 bg-black text-white text-center w-full text-xs p-[0.2rem]'>
                Sign up and get 20% off to your first order. <span className='underline font-semibold'>Sign Up Now</span>
            </div>
            <div className='flex lg:justify-between w-full items-center p-[0.7rem] lg:pr-[2rem]'>
                <div className='flex items-center'>
                    <Box className="sm:block">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                        <Box
                            component="nav"
                            sx={{ width: { sm: 0 }, flexShrink: { sm: 0 } }}
                            aria-label="mailbox folders"
                        >
                            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                            <Drawer
                                variant="temporary"
                                open={mobileOpen}
                                onTransitionEnd={handleDrawerTransitionEnd}
                                onClose={handleDrawerClose}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                    </Box>
                    <p className='sm:text-xl lg:text-3xl -ml-[1rem] -mt-[0.2rem] font-bold'>SHOP.CO</p>
                </div>

                <Link className='hidden md:block' to={''}>Shop</Link>
                <Link className='hidden md:block' to={''}>On sale</Link>
                <Link className='hidden md:block' to={''}>New Arrivals</Link>
                <Link className='hidden md:block' to={''}>Brands</Link>
                <div className='lg:w-1/3 h-10 border-2 border-black lg:border-0 rounded-3xl flex gap-2 ml-[3rem] items-center bg-gray-200'>
                    <CiSearch size={'35px'} className='pl-[0.5rem]' />
                    <input placeholder='Search for products...' className=' placeholder-transparent lg:placeholder-black bg-gray-200 pl-[0.2rem] ml-[0.2rem] focus:outline-none rounded-3xl w-full h-full' type="text" name="" id="" />
                </div>
                <CiShoppingCart className='hidden md:block' size={'35px'} />
                <RxAvatar className='hidden md:block' size={'35px'} />
            </div>
            <div className='mx-[1rem] md:mx-[2.5rem]'>
                <div className='w-full bg-gray-800 h-[0.9px]'></div>
            </div>
        </div>
    )
}

export default NavBar