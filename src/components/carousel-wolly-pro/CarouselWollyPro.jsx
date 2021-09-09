import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import wollypro5 from '../../images/wollypro5.png';
import wollypro6 from '../../images/wollypro6.png';
import wollypro7 from '../../images/wollypro7.png';

const useStyle = makeStyles({
    img: {
        maxWidth: '150px',
        boxShadow: '6px 30px 30px rgb(23 43 77 / 10%)'
    }
});

function CarouselWollyPro() {

    const classes = useStyle();

    return (
        <Carousel autoPlay>
            <div>
                <img className={classes.img} src={wollypro5} />
            </div>
            <div>
                <img className={classes.img} src={wollypro6} />
            </div>
            <div>
                <img className={classes.img} src={wollypro7} />
            </div>
        </Carousel>
    );
}

export default CarouselWollyPro;