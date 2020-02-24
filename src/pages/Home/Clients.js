import React from 'react';
import { Grid } from '@material-ui/core';

// Client images import
import c1 from 'static/images/01.png';
import c2 from 'static/images/02.png';
import c3 from 'static/images/03.png';
import c4 from 'static/images/04.png';
import c5 from 'static/images/05.png';
import c6 from 'static/images/06.png';
import c7 from 'static/images/07.png';
import c8 from 'static/images/08.png';
import c9 from 'static/images/09.png';
import c10 from 'static/images/10.png';
import c11 from 'static/images/11.png';
import c12 from 'static/images/12.png';
import c13 from 'static/images/13.png';
import c14 from 'static/images/14.png';

const clients = [
    {
        id: 1,
        img: c1
    },
    {
        id: 2,
        img: c2
    },
    {
        id: 3,
        img: c3
    },
    {
        id: 4,
        img: c4
    },
    {
        id: 5,
        img: c5
    },
    {
        id: 6,
        img: c6
    },
    {
        id: 7,
        img: c7
    },
    {
        id: 8,
        img: c8
    },
    {
        id: 9,
        img: c9
    },
    {
        id: 10,
        img: c10
    }, {
        id: 11,
        img: c11
    },
    {
        id: 12,
        img: c12
    },
    {
        id: 13,
        img: c13
    },
    {
        id: 14,
        img: c14
    }
]

const Clients = () => {
    return (
        <div className="clients container">
            {/* Title */}
            <div className="clients__title">
                <h2 className="clients__title__heading">Clients</h2>
            </div>

            {/* Client Images */}

            <Grid container spacing={2} direction="row" alignItems="center"
                    >
                {clients.map((client) => {
                    return (
                        <Grid className="clients__grid" key={client.id} item xs={6} sm={4} lg={3}>
                            <div className="clients__grid__child">
                                <img className="clients__logo" src={client.img} alt={client.img} />
                            </div>
                        </Grid>
                    );
                })

                }
            </Grid>


        </div>
    );
}

export default Clients;