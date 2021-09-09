import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import wolly1 from '../../../images/wolly1.png';
import wolly2 from '../../../images/wolly2.png';
import wolly3 from '../../../images/wolly3.png';


const useStyle = makeStyles({
    img: {
        maxWidth: '600px'
    }
});

function DemoCarousel() {

    const classes = useStyle();

    return (
        <Carousel autoPlay>
            <div>
                <img className={classes.img} src={wolly1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img className={classes.img} src={wolly2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img className={classes.img} src={wolly3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;