import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import wollypro1 from '../../images/wollypro1.png';
import wollypro2 from '../../images/wollypro2.png';
import wollypro3 from '../../images/wollypro3.png';
import wollypro4 from '../../images/wollypro4.png';

const useStyle = makeStyles({
    img: {
        maxWidth: '600px',
        boxShadow: '6px 30px 30px rgb(23 43 77 / 10%)'
    }
});

function CarouselWollyProWeb() {

    const classes = useStyle();

    return (
        <Carousel autoPlay>
            <div>
                <img className={classes.img} src={wollypro1} />
            </div>
            <div>
                <img className={classes.img} src={wollypro2} />
            </div>
            <div>
                <img className={classes.img} src={wollypro3} />
            </div>
            <div>
                <img className={classes.img} src={wollypro4} />
            </div>
        </Carousel>
    );
}

export default CarouselWollyProWeb;