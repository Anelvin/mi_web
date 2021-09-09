import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import inout from '../../images/inout.png';
import inout1 from '../../images/inout1.png';
import inout2 from '../../images/inout2.png';
import inout3 from '../../images/inout3.png';

const useStyle = makeStyles({
    img: {
        maxWidth: '500px',
        boxShadow: '6px 30px 30px rgb(23 43 77 / 10%)'
    }
});

function CarouselInOut() {

    const classes = useStyle();

    return (
        <Carousel autoPlay>
            <div>
                <img className={classes.img} src={inout} />
            </div>
            <div>
                <img className={classes.img} src={inout1} />
            </div>
            <div>
                <img className={classes.img} src={inout2} />
            </div>
        </Carousel>
    );
}

export default CarouselInOut;