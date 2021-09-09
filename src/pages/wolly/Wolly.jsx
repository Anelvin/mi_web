import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../../components/header/Header';
import backgroundHome from '../../images/background-home.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselWolly from '../../components/carousel-wolly/CarouselWolly';
import react from '../../images/react.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import nodejs from '../../images/nodejs.png';
import expressjs from '../../images/expressjs.png';
import mongo from '../../images/mongo.jpg';


const useStyle = makeStyles({
    container: {
        background: `url(${backgroundHome})`,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    h1: {
        color: '#000',
        textAlign: 'center',
        marginBottom: '15px'
    },
    bodyContainer: {
        marginTop: '10px',
        backgroundColor: '#fff',
        maxWidth: '1200px',
        minWidth: '1000px',
        borderRadius: '4px',
        padding: '30px 10px'
    },
    tecnologies: {

    },
    image: {
        width: '70px',
        marginRight: '15px'
    }
});

function Wolly(){

    const classes = useStyle();

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.bodyContainer}>
            <h1 className={classes.h1}>Wolly</h1>
                <CarouselWolly />
                <h2>Tecnologías</h2>
                <h3>Frontend</h3>
                <div className={classes.tecnologies}>
                    <img className={classes.image} src={html} alt="" />
                    <img className={classes.image} src={css} alt="" />
                    <img className={classes.image} src={javascript} alt="" />
                    <img className={classes.image} src={react} alt="" />
                </div>
                <h3>Backend</h3>
                <div className={classes.tecnologies}>
                    <img className={classes.image} src={nodejs} alt="" />
                    <img className={classes.image} src={expressjs} alt="" />
                    <img className={classes.image} src={mongo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Wolly;