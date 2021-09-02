import { makeStyles } from '@material-ui/core';
import React from 'react';
import fotoPerfil from '../../images/foto_perfil.jpg';

const useStyle = makeStyles({
    containerHeader: {

    },
    images: {
        width: '120px'
    }
});

function Header(){
    const classes = useStyle();

    return (
        <div className={classes.containerHeader}>
            <div>
                <img src={fotoPerfil} alt="" />
            </div>
            <div>
                items
            </div>
        </div>
    );
}

export default Header;