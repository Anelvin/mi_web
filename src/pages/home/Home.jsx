import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import backgroundHome from '../../images/background-home.jpg';
import frontend from '../../images/frontend.png';
import backend from '../../images/backend.png';
import mobile from '../../images/mobile.png';

const useStyle = makeStyles({
    home: {
        backgroundImage: `url(${backgroundHome})`,
        height: '100vh'
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10rem 0'
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px'
    },
    p: {
        fontSize: '2rem',
        color: '#fff'
    },
    h1: {
        fontSize: '3rem',
        color: '#fff'
    },
    services: {
        display: 'flex',
        flexDirection: 'row',
        margin: '40px 0'
    },
    service: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '4px',
        maxWidth: '300px',
        margin: '40px 35px'
    },
    textServices: {
        marginTop: '20px'
    },
    image: {
        maxWidth: '70px',
        margin: '20px 0'
    },
    containerImage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

function Home(){

    const clasess = useStyle();

    return (
        <div className={clasess.home}>
            <Header />  
            <div className={clasess.container}>
                <div className={clasess.title}>
                    <h1 className={clasess.h1}>Desarrollador Full Stack</h1>
                    <p className={clasess.p}>Hola. Soy Anelvin, Desarrollador Full Stack con 5 años de experiencia en creación de aplicaciones web y móviles.</p>
                </div>
                <div className={clasess.services}>
                    <div className={clasess.service}>
                        <div className={clasess.containerImage}>
                            <img className={clasess.image} src={frontend} alt="" />
                        </div>
                        <h1>Desarrollo frontend</h1>
                        <p className={clasess.textServices}>Consiste en desarrollar los componentes visuales de un sitio web. Utilizando HTML, CSS y Javascript, creo sitios web rápidos e interactivos.</p>
                        <p className={clasess.textServices}>Crear aplicaciones web receptivas para una óptima experiencia de usuario.</p>
                    </div>
                    <div className={clasess.service}>
                        <div className={clasess.containerImage}>
                            <img className={clasess.image} src={backend} alt="" />
                        </div>
                        <h1>Desarrollo backend</h1>
                        <p className={clasess.textServices}>Diseñar la lógica y las soluciones para todas las acciones solicitadas en una aplicación web sean ejecutadas de manera correcta. Trabaja del lado del servidoe y
                            procesa la información recibidas del frontend.
                        </p>
                    </div>
                    <div className={clasess.service}>
                    <div className={clasess.containerImage}>
                            <img className={clasess.image} src={mobile} alt="" />
                        </div>
                        <h1>Desarrollo de aplicaciones móviles</h1>
                        <p>Desarrollo de aplicaciones para dispositivos informáticos pequeños e inalámbricos, como teléfonos inteligentes y otros dispositivos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;