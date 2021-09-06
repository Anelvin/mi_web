import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import fotoPerfil from '../../images/foto_perfil.jpg';

const useStyle = makeStyles({
    containerHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1200px',
        maxWidth: '1200px'
    },
    containerImage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    images: {
        width: '60px',
        borderRadius: '50%',
        marginRight: '10px'
    },
    containerItems: {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none'
    },
    item: {
        margin: '0 10px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold'
    },
    h2: {
        color: '#fff'
    }
});

function Header(){
    const classes = useStyle();

    return (
        <div className={classes.containerHeader}>
            <div className={classes.header}>
                <div className={classes.containerImage}>
                    <img className={classes.images} src={fotoPerfil} alt="" /> 
                    <h2 className={classes.h2}>Anelvin Mejía</h2>
                </div>
                <div>
                    <ul className={classes.containerItems}>
                        <li className={classes.item}><Link className={classes.link}>Home</Link></li>
                        <li className={classes.item}><Link className={classes.link}>Proyectos</Link></li>
                        <li className={classes.item}><Link className={classes.link}>Sobre mi</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;