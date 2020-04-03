import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import {
    ClickAwayListener
} from '@material-ui/core';
import thumbnail from 'static/images/thumbnail.PNG';

export default ({ youtubeId }) => {

    const [player, setPlay] = useState({
        play:false,
        ready:false
    });
    return (
        <ClickAwayListener onClickAway={() => setPlay(false)}>
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
            >
                <ReactPlayer
                    onReady={() => {
                        if(player.ready!==true){
                            setPlay({...player, play: true, ready: true})
                        }
                    }}
                    onPlay={()=>setPlay({
                        ...player,
                        play: true
                    })}
                    onPause={()=>setPlay({
                        ...player,
                        play: false
                    })}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    height="100%"
                    width="100%"
                    url={`https://www.youtube.com/watch?v=${youtubeId}`}
                    controls={false}
                    light={thumbnail}
                    playIcon={null}
                    playing={player.play}
                />

            </div>
        </ClickAwayListener>

    );
};