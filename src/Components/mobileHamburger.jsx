// import React from 'react'
import { RxAvatar } from 'react-icons/rx'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { BsCart } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';
import { BiPurchaseTag } from 'react-icons/bi';
import { MdNewReleases } from 'react-icons/md';
import { TbBrandAppleFilled } from 'react-icons/tb';

const drawerWidth = 200;
const MobileHamburger = () => {
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
        <div className='flex lg:justify-between w-full items-center p-[0.7rem] lg:pr-[2rem]'>
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
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true,
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
        </div>
    )
}

export default MobileHamburger