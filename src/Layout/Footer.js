import React from 'react';

import {
    Grid,
} from '@material-ui/core';

import facebook from 'static/images/icons/facebook.png';
import linkedin from 'static/images/icons/linkedin.png';
import twitter from 'static/images/icons/twitter.png';
import instagram from 'static/images/icons/instagram.png';
import youtube from 'static/images/icons/youtube.png';
import affiliation from 'static/images/one-agent.png';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer container">
                <Grid className="footer__grid" container spacing={6}>
                    <Grid className="footer__column" item xs={12} md={4}>
                        <h2 className="footer__column__title">Mumbai</h2>
                        <section className="footer__column__content">
                            <p className="footer__content">Super Processors Compound, 2nd Floor, Industrial Estate, Lalbaug, <b className="footer__content__city">Mumbai - 400 012.</b></p>
                            <a href="tel:02224710505" className="footer__content">Tel: +91(0)22-2471 0505</a>
                            <p className="footer__content">Fax: +91(0)22-2471 1525</p>
                            <a className="footer__content">Mobile: +91 98200 10452</a>
                        </section>
                    </Grid>
                    <Grid className="footer__column" item xs={12} md={4}>
                        <h2 className="footer__column__title">Banglore</h2>
                        <section className="footer__column__content">
                            <p className="footer__content">3/1, Ground Floor, Gangadhar Chetty Road, Ulsoor, <b className="footer__content__city">Banglore - 560 042.</b></p>
                            <a href="tel:80411332135" className="footer__content">Tel: +91(0)80-4113 3213</a>
                            <p className="footer__content">Telefax: +91(0)80-4113 1411</p>
                        </section>
                    </Grid>
                    <Grid className="footer__column" item xs={12} md={4}>
                        <h2 className="footer__column__title">Global Affiliation</h2>
                        <section className="footer__column__content">
                          <img src={affiliation} alt="Global Affiliation" />
                        </section>
                    </Grid>
                </Grid>

                <Grid className="footer__bottom" container spacing={6}>
                    <Grid className="footer__column copyright" item xs={12} lg={6}>&copy; 2020 PinxitBlue</Grid>
                    {/*<Grid className="footer__column" item xs={12} lg={4}>
                        <ul className="footer__menu">
                            <li className="footer__menu__item">Home</li>
                            <li className="footer__menu__item">About Us</li>
                            <li className="footer__menu__item">Our Work</li>
                            <li className="footer__menu__item">Contact Us</li>
                        </ul>
    </Grid>*/}
                    <Grid className="footer__column" item xs={12} lg={6}>
                        <div className="footer__social">
                            <a className="footer__social__link" href="https://www.facebook.com/Pinxitblue/" target="_blank"><img className="footer__social__logo facebook" src={facebook} alt="Pinxitblue Facebook" /></a>
                            <a className="footer__social__link" href="https://www.linkedin.com/company/pinxit-blue/" target="_blank"><img className="footer__social__logo linkedin" src={linkedin} alt="Pinxitblue LinkedIn" /></a>
                            <a className="footer__social__link" href="https://www.instagram.com/pinxitblue/" target="_blank"><img className="footer__social__logo instagram" src={instagram} alt="Pinxitblue Instagram" /></a>
                            <a className="footer__social__link" href="https://twitter.com/PinxitBlue" target="_blank"><img className="footer__social__logo twitter" src={twitter} alt="Pinxitblue Twitter" /></a>
                            <a className="footer__social__link" href="https://www.youtube.com/channel/UC85bKzILFiyJJ_-pCbYWPYA" target="_blank"><img className="footer__social__logo youtube" src={youtube} alt="Pinxitblue Youtube" /></a>

                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Footer;