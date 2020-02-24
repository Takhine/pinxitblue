import React, {useState} from 'react';
import {
    Toolbar,
    AppBar,
    useScrollTrigger,
    Slide,
    Button,
    IconButton,
    Drawer
} from '@material-ui/core';

import {NavLink} from 'react-router-dom';
import logo from 'static/images/logo.png';
import menu from 'static/images/icons/menu.svg';
const HideonScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    const trigger2 = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });


    return (
        <Slide appear={false} direction="down" in={!trigger} elevation={trigger2 ? 2 : 0}>
            {children}
        </Slide>
    )
}

const NavMenu = (props) => {

    return (
        <ul className="nav-menu">
            <li><NavLink exact to="/about"><Button  onClick={props.onClose}>About</Button></NavLink></li>
            <li><NavLink exact to="/about"><Button  onClick={props.onClose}>Benefits</Button></NavLink></li>
            <li><NavLink exact to="/contact"><Button  onClick={props.onClose}>Contact</Button></NavLink></li>
            <li><NavLink exact to="/about"><Button  onClick={props.onClose}>Products</Button></NavLink></li>
        </ul>
    );
}

const Navbar = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    };

    return (
        <HideonScroll {...props}>
            <AppBar
                position="fixed"
                style={{ backgroundColor: '#ffffff' }}
                id="navbar"
            >
                <Toolbar>

                    <NavLink exact to="/"><Button className="logo-container"><img className="logo" width="200" height="auto" src={logo} alt="Pinxitblue" /></Button></NavLink>
                    <div className="grow" />
                    <IconButton onClick={toggleDrawer(true)} edge="start" className="menu-button" color="inherit" aria-label="menu">
                    <img src={menu} alt="Menu Burger" />
                </IconButton>

                </Toolbar>
            </AppBar>
        </HideonScroll>
    );
}
export default Navbar;