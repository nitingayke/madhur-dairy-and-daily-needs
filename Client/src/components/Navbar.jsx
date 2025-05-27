import React, { useState, useContext } from 'react';
import {
    Box, Drawer, Avatar, IconButton, Menu, MenuItem, Badge, Tooltip,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { ThemeContext } from '../context/ThemeContext.jsx';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [loginUser] = useState({ username: "Nitin Valmik Gayke", image: "" });
    const [userStatus] = useState("admin");
    const orderCount = 3;

    const toggleDrawer = (newOpen) => () => setOpen(newOpen);
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const linkStyle = `${theme === 'light' ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'} flex items-center gap-2 hover:text-aqua px-2 py-1 cursor-pointer transition-colors`;
    const navItems = [
        { label: 'Home', icon: <HomeIcon />, visible: true },
        { label: 'Products', icon: <StorefrontIcon />, visible: true },
        { label: 'Customers', icon: <PeopleIcon />, visible: userStatus === 'admin' },
        { label: 'Dairy Orders', icon: <ReceiptLongIcon />, visible: userStatus === 'admin' },
    ];

    return (
        <>
            <nav className={`sticky top-0 left-0 w-full z-50 shadow-md px-4 py-2 flex justify-between items-center ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-[#282828] text-white'}`}>
                <div className="flex items-center gap-4">
                    <div className="md:hidden">
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuIcon className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'} />
                        </IconButton>
                    </div>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="h-8 rounded-lg object-cover" />
                    </Link>
                    <div className="hidden md:flex gap-4">
                        {navItems.map((item, i) =>
                            item.visible && (
                                <Link key={i * 0.6} to={`/${item.label.toLowerCase()}`} className={linkStyle}>
                                    {item.icon} {item.label}
                                </Link>
                            )
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <IconButton onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <Brightness4Icon className="text-gray-600 hover:text-black" />
                        ) : (
                            <Brightness7Icon className="text-gray-300 hover:text-white" />
                        )}
                    </IconButton>

                    {loginUser && (
                        <>
                            <Link to={`/my-orders`}>
                                <Tooltip title="Orders">
                                    <Badge badgeContent={orderCount} color={theme === 'light' ? 'primary' : 'secondary'}>
                                        <ShoppingCartIcon className={`${theme === 'light' ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'} hover:text-aqua cursor-pointer`} />
                                    </Badge>
                                </Tooltip>
                            </Link>
                            <IconButton onClick={handleMenuClick}>
                                <Avatar alt={loginUser.username} src={loginUser.image} />
                            </IconButton>
                        </>

                    )}
                    {!loginUser && <Link to={'/login'} className={`${linkStyle} ${theme === 'light' ? "hover:bg-gray-200" : "hover:bg-[#363636]"} rounded-md`}>Login</Link>}
                </div>
            </nav>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
                <MenuItem onClick={toggleTheme}>Theme: {theme === 'light' ? 'Light' : 'Dark'}</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box className={`w-64 p-4 flex flex-col gap-4 h-full ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-[#282828] text-white'}`}>
                    {navItems.map((item, i) =>
                        item.visible && (
                            <Link key={i * 0.5} to={`/${item.label.toLowerCase()}`} className={linkStyle}>
                                {item.icon} {item.label}
                            </Link>
                        )
                    )}
                    {loginUser && (
                        <Link to={`/my-orders`} className={linkStyle}>
                            <Badge badgeContent={orderCount} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                            Orders
                        </Link>
                    )}
                    {!loginUser && <Link to={'/login'} className={`${linkStyle} ${theme === 'light' ? "hover:bg-gray-200" : "hover:bg-[#363636]"} rounded-md`}>Login</Link>}
                </Box>
            </Drawer>
        </>
    );
}
