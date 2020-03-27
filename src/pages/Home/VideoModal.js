import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default ({ youtubeId }) => {

    const [play, setPlay] = useState(false);
    return (
        <div
            style={{
                position: "fixed",
                paddingBottom: "50%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
            className="video-modal-container"
        >

            <ReactPlayer
                onReady={() => setPlay(true)}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "80%"
                }}
                height="80%"
                width="100%"
                url={`https://www.youtube.com/watch?v=${youtubeId}`}
                controls={false}
                // light={thumbnail}
                playIcon={null}
                playing={play}
            />
            {console.log("youtubeId", youtubeId)}
        </div>
    );
};