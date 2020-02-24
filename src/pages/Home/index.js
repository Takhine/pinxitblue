import React from 'react';
import Clients from './Clients';
import Message from './Message';
import Youtube from './Youtube';

const Home = () => {
    return (
        <div className="home">
            <Youtube youtubeId={'mLyksAFzw5U?controls=0&showinfo=0'} />
            <Clients />
            <Message />
        </div>
    );
}

export default Home;