import React from 'react'
import {
    Toolbar,
    AppBar,
    Button,
    IconButton,
    Grid,
    TextField
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import logoWhite from 'static/images/logo-white.svg';
import cancel from 'static/images/icons/cancel.svg';

export default function Menu(props) {
    return (
        <div className={props.navMenu ? "main-menu" : "hidden-menu"}>
            <AppBar
                position="fixed"
                id="navbar"
            >
                <Toolbar>
                    <NavLink exact to="/"><Button onClick={() => props.setNavmenu(false)} className="logo-container"><img style={{ transition: '1s ease' }} className="logo" width="200" height="auto" src={logoWhite} alt="Pinxitblue" /></Button></NavLink>
                    <div className="grow" />
                    <IconButton onClick={() => props.setNavmenu(false)} edge="start" className="menu-button" color="inherit" aria-label="menu">
                        <img src={cancel} className="cancel-button" alt="Cancel button" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="contact-form">
                <h2 className="title">Get in touch</h2>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={8}>
                        <form>
                            <TextField className="form-field" variant="outlined" placeholder="Name" />
                            <TextField className="form-field" variant="outlined" placeholder="Designation" />
                            <TextField className="form-field" variant="outlined" placeholder="Company" />
                            <TextField className="form-field" variant="outlined" placeholder="Message" />
                            <Button className="send-button">Send</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h2 className="nav__column__title">Mumbai</h2>
                        <section className="nav__column__content">
                            <p className="nav__content">Super Processors Compound, 2nd Floor, Industrial Estate, Lalbaug, <b className="nav__content__city">Mumbai - 400 012.</b></p>
                            <a href="tel:02224710505" className="nav__content">Tel: +91(0)22-2471 0505</a>
                            <p className="nav__content">Fax: +91(0)22-2471 1525</p>
                            <a className="nav__content">Mobile: +91 98200 10452</a>
                        </section>
                        <br />
                        <h2 className="nav__column__title">Banglore</h2>
                        <section className="nav__column__content">
                            <p className="nav__content">3/1, Ground Floor, Gangadhar Chetty Road, Ulsoor, <b className="nav__content__city">Banglore - 560 042.</b></p>
                            <a href="tel:80411332135" className="nav__content">Tel: +91(0)80-4113 3213</a>
                            <p className="nav__content">Telefax: +91(0)80-4113 1411</p>
                        </section>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
