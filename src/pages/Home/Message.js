import React from 'react'

import background from 'static/images/message-background.jpg';

export default function Message() {
    return (
        <div className="message">
        <img src={background} className="message__background" />
        <div className="message__container">
        <p className="message__content">
            <q>I am indeed very grateful for your contribution in the D'damas and the glitterati launch in India.</q>
            <br/>
            <b>- Mehul Choksi, CMD</b>
        </p>
        </div>
        </div>
    )
}
