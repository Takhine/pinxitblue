import React, { useState, useEffect, useRef } from 'react';
import {
    Toolbar,
    AppBar,
    useScrollTrigger,
    Slide,
    Button,
    IconButton,
    Drawer
} from '@material-ui/core';
import NavMenu from './Menu';
import { NavLink } from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import logoWhite from 'static/images/logo-white.svg';
import logo from 'static/images/logo.svg';

import menu from 'static/images/icons/menu.svg';
const HideonScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    const trigger2 = useScrollTrigger({
        disableHysteresis: true,
        threshold: 2
    });


    return (
        <Slide appear={false} direction="down" in={!trigger} elevation={trigger2 ? 2 : 0}>
            {children}
        </Slide>
    )
}


const Navbar = (props) => {

    const [navBackground, setNavBackground] = useState(false);
    const [navMenu, setNavmenu] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 60
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        let bod= document.getElementsByTagName('BODY')[0];
        let htm= document.getElementsByTagName('html');
        
        if(navMenu){
            bod.style.overflow='hidden';
        }
        else{
            bod.style.overflow='unset';
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const openMenu = () =>{
        setNavmenu(true);
    }
    useEffect(()=>{
        console.log(navMenu);
    },[navMenu])
    return (
        <>
            {navMenu!==true &&
                <HideonScroll {...props}>
                <AppBar
                    position="fixed"
                    style={{ backgroundColor: `${navBackground ? 'white' :isTabletOrMobile? 'white':'transparent'}`, transition: '1s ease' }}
                    id="navbar"
                >
                    <Toolbar>
                        <NavLink exact to="/"><Button className="logo-container"><img style={{ transition: '1s ease' }} className="logo" width="200" height="auto" src={navBackground  ? logo :isTabletOrMobile? logo:logoWhite} alt="Pinxitblue" /></Button></NavLink>
                        <div className="grow" />
                        <IconButton onClick={openMenu} edge="start" className="menu-button" color="inherit" aria-label="menu">
                            <img src={menu} width="25" alt="Menu Burger" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideonScroll>
            }
            <NavMenu setNavmenu={setNavmenu} navMenu={navMenu} />

        </>
    );
}
export default Navbar;