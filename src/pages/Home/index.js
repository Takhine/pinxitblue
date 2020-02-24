import React from 'react';
import Carousel from './Carousel';

import Clients from './Clients';
import Message from './Message';
import Youtube from './Youtube';

const Home = () => {
    return (
        <div className="home">
            <Carousel />
            <Youtube youtubeId={'mLyksAFzw5U?controls=0&showinfo=0'} />
            <Clients />
            <Message />
        </div>
    );
}

export default Home;