import React from 'react'

import background from 'static/images/message-background.jpg';
import {
    Grid
} from '@material-ui/core';

import topLeft from 'static/images/top-left.png';
import topRight from 'static/images/top-right.png';
import bottom from 'static/images/bottom.png';

const prevMessage = () => {
    return (
        <div className="message">
            <img src={background} className="message__background" />
            <div className="message__container">
                <p className="message__content">
                    <q>I am indeed very grateful for your contribution in the D'damas and the glitterati launch in India.</q>
                    <br />
                    <b>- Mehul Choksi, CMD</b>
                </p>
            </div>
        </div>
    )
}
export default function Message() {
    return (
        <div className="message-grid">
            <Grid container>
                <Grid className="top-container" item xs={12} lg={6}>
                    <img src={topLeft} alt="Top Left" />
                    <div className="message-container george">
                        <p className="message-content white">
                            “I really appreciate the efforts put in by you and your creative team in coming up with a wonderful theme for socratix.”
                    <br />
                            <b>- Gorge Poul, BPCL</b>
                        </p>
                    </div>
                </Grid>
                <Grid className="top-container" item xs={12} lg={6}>
                    <img src={topRight} alt="Top Right" />
                    <div className="message-container david">

                        <p className="message-content">
                            "It was a pleasure working with you in the last 5 months, i was amazed by your high standard and quality of work.
                    <br />
                            <b>- David Bengal, Amdocs</b>
                        </p>
                    </div>
                </Grid>
                <Grid className="bottom-container" item xs={12}>
                    <img src={bottom} alt="Top Right" />
                    <div className="message-container mehul">

                        <p className="message-content">
                            “I am indeed very grateful for your contribution in the D'damas and the glitterati launch in India.”
                    <br />
                            <b>- Mehul Choksi, D’damas</b>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
