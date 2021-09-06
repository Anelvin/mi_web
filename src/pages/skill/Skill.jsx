import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../../components/header/Header';
import backgroundHome from '../../images/background-home.jpg';
import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import typescript from '../../images/typescript.png';
import angular from '../../images/angular.png';
import react from '../../images/react.png';
import vue from '../../images/vue.png';
import node from '../../images/nodejs.png';


import { LinearProgress } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        backgroundImage: `url(${backgroundHome})`,
        height: '100vh'
    },
    containerSkill: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    divSkill: {
        maxWidth: '1000px',
        backgroundColor: '#fff',
        width: '60vw',
        padding: '20px',
        borderRadius: '4px'
    }, 
    image: {
        width: '40px'
    },
    skill: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5px 0'
    }
});

function Skill(){

    const classes = useStyle();

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.containerSkill}>
                <div className={classes.divSkill}>
                    <h1>Habilidades</h1>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={html} alt="" />
                            <h3>HTML5</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={95} />
                        </div>
                    </div>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={css} alt="" />
                            <h3>CSS3</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={javascript} alt="" />
                            <h3>Javascript</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={85} />
                        </div>
                    </div>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={typescript} alt="" />
                            <h3>Typescript</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={85} />
                        </div>
                    </div>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={angular} alt="" />
                            <h3>Angular 2+</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={react} alt="" />
                            <h3>Reactjs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={vue} alt="" />
                            <h3>Vuejs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                    <div>
                        <div className={classes.skill}>
                            <img className={classes.image} src={node} alt="" />
                            <h3>Nodejs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={85} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;