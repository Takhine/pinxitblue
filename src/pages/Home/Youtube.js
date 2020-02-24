import React, {useState} from 'react';
import ReactPlayer from 'react-player'

import thumbnail from 'static/images/thumbnail.PNG';
export default ({ youtubeId }) => {

    const [play, setPlay] = useState(false);
    return (
        //   <div
        //     className="video"
        //     style={{
        //       position: "relative",
        //       paddingBottom: "56.25%" /* 16:9 */,
        //       paddingTop: 25,
        //       height: 0
        //     }}
        //   >
        //     <iframe
        //       style={{
        //         position: "absolute",
        //         top: 0,
        //         left: 0,
        //         width: "100%",
        //         height: "100%"
        //       }}
        //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        //       src={`https://www.youtube.com/embed/${youtubeId}`}
        //       frameBorder="0"
        //     />
        //   </div>
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
                onReady={()=>setPlay(true)}
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
                playing={play}
            />

        </div>
    );
};