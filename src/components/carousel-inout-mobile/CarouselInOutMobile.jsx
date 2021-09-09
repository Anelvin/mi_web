import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import inoutmobile1 from '../../images/inoutmobile1.png';
import inoutmobile2 from '../../images/inoutmobile2.png';
import inoutmobile3 from '../../images/inoutmobile3.png';

const useStyle = makeStyles({
    img: {
        maxWidth: '150px',
        boxShadow: '6px 30px 30px rgb(23 43 77 / 10%)'
    }
});

function CarouselInOutMobile() {

    const classes = useStyle();

    return (
        <Carousel autoPlay>
            <div>
                <img className={classes.img} src={inoutmobile1} />
            </div>
            <div>
                <img className={classes.img} src={inoutmobile2} />
            </div>
            <div>
                <img className={classes.img} src={inoutmobile3} />
            </div>
        </Carousel>
    );
}

export default CarouselInOutMobile;