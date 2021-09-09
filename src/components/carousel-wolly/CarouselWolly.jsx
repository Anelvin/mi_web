import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import wolly1 from '../../images/wolly1.png';
import wolly2 from '../../images/wolly2.png';
import wolly3 from '../../images/wolly3.png';
import wolly4 from '../../images/wolly4.png';
import wolly5 from '../../images/wolly5.png';
import wolly6 from '../../images/wolly6.png';
import wolly7 from '../../images/wolly7.png';

const useStyle = makeStyles({
    img: {
        maxWidth: '600px',
        boxShadow: '6px 30px 30px rgb(23 43 77 / 10%)'
    }
});

function CarouselWolly() {

    const classes = useStyle();

    return (
        <Carousel autoPlay>
            <div>
                <img className={classes.img} src={wolly1} />
            </div>
            <div>
                <img className={classes.img} src={wolly2} />
            </div>
            <div>
                <img className={classes.img} src={wolly3} />
            </div>
            <div>
                <img className={classes.img} src={wolly4} />
            </div>
            <div>
                <img className={classes.img} src={wolly5} />
            </div>
            <div>
                <img className={classes.img} src={wolly6} />
            </div>
            <div>
                <img className={classes.img} src={wolly7} />
            </div>
        </Carousel>
    );
}

export default CarouselWolly;