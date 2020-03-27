import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';

import deal from 'static/images/thumbnails/dealaw18.PNG';
import rextraut from 'static/images/thumbnails/rextraut.PNG';
import kulodayDbatin from 'static/images/thumbnails/kuloday-debatin.PNG';
import mefoil from 'static/images/thumbnails/mefoil.PNG';
import mefoilTamil from 'static/images/thumbnails/mefoil-tamil.PNG';
import barclays from 'static/images/thumbnails/barclays.PNG';

import VideoModal from './VideoModal';


const videos = [
    {
        id: 1,
        thumbnail: deal,
        title: 'Deal AW18',
        caption: 'Get In To Get Out',
        ytid: 'RQ0YrMaUnRA'
    },

    {
        id: 2,
        thumbnail: rextraut,
        title: 'Rexstraut',
        caption: 'The Urban Drifter',
        ytid: 'text'
    },

    {
        id: 3,
        thumbnail: mefoil,
        title: 'Me Foil',
        caption: 'Hindi',
        ytid: 'a8FA91pTOmE'
    },

    {
        id: 4,
        thumbnail: mefoilTamil,
        title: 'Me Foil',
        caption: 'Tamil',
        ytid: 'aqeaiTs4o_U'
    },

    {
        id: 5,
        thumbnail: kulodayDbatin,
        title: 'Kuloday Debatin',
        caption: 'Animation',
        ytid: 'dp-KvVemiIs'
    },

    {
        id: 6,
        thumbnail: barclays,
        title: 'Barclays',
        caption: 'Corporate Firm',
        ytid: 'DcaAohrRBlg'
    }
]

export default function Videos() {

    const [modal, openModal] = useState(false);
    const [yid, setYid] = useState(null);
    
    const handleOpen = (ytid) => () => {
        openModal(true);
        setYid(ytid);
    };

    const handleClose = () => {
        setYid(null);
        openModal(false);
    };

    return (
        <div className="videos-container">
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={modal}
                onClose={handleClose}
            >

                <VideoModal className="modal_styles" youtubeId={yid} />
            </Modal>

            <Grid container spacing={2} direction="row" alignItems="center">

                {videos.map((video) => {
                    return (
                        <Grid className="videos__grid" key={video.id} item xs={12} sm={6} lg={4} onClick={handleOpen(video.ytid)} >
                            <div className="videos__grid__child">
                                <img className={video.size ? "videos__thumbnail size" : "videos__thumbnail"} src={video.thumbnail} alt={video.thumbnail} />
                                <div className="videos__title">
                                    <h2 className="videos__title__heading">
                                        {video.title}
                                    </h2>
                                    <h4 className="videos__title__subheading">
                                        {video.caption}
                                    </h4>
                                </div>
                            </div>
                        </Grid>
                    );
                })
                }
            </Grid>
        </div>
    )
}
