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
import express from '../../images/expressjs.png';
import php from '../../images/php.png';
import laravel from '../../images/laravel.png';
import lumen from '../../images/lumen.png';
import nestjs from '../../images/nestjs.svg';
import symfony from '../../images/symfony.jpg';
import ionic from '../../images/ionic.png';
import flutter from '../../images/flutter.png';
import docker from '../../images/docker.png';
import agile from '../../images/agile.jpg';
import github from '../../images/github.png';
import mysql from '../../images/mysql.png';
import mongo from '../../images/mongo.jpg';
import trello from '../../images/trello.png';
import jira from '../../images/jira.png';
import aws from '../../images/aws.png';
import bitbucket from '../../images/bitbucket.jpg';

import { LinearProgress } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        backgroundImage: `url(${backgroundHome})`,
        height: '100vh'
    },
    containerSkill: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    divSkill: {
        display: 'flex',
        flexDirection: 'column',
        margin: '30px 15px',
        maxWidth: '300px',
        width: '300px',
        maxHeight: '60vh',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '4px',
        overflow: 'auto'
    }, 
    itemsSkill: {
        margin: '25px 0',
        display: 'flex',
        flexDirection: 'column',

    },
    image: {
        width: '40px',
        marginRight: '10px'
    },
    skill: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5px 0'
    },
    h1: {
        marginBottom: '20px',
        color: '#fff',
        textAlign: 'center'
    },
    h2: {
        margin: '10px 0'
    }
});

function Skill(){

    const classes = useStyle();

    return (
        <div className={classes.container}>
            <Header />
            <h1 className={classes.h1}>Habilidades</h1>
            <div className={classes.containerSkill}>
                <div className={classes.divSkill}>
                    <h2 className={classes.h2}>Frontend</h2>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={html} alt="" />
                            <h3>HTML5</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={95} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={css} alt="" />
                            <h3>CSS3</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={javascript} alt="" />
                            <h3>Javascript</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={85} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={typescript} alt="" />
                            <h3>Typescript</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={85} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={angular} alt="" />
                            <h3>Angular 2+</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={react} alt="" />
                            <h3>Reactjs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={vue} alt="" />
                            <h3>Vuejs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={90} />
                        </div>
                    </div>
                </div>
                <div className={classes.divSkill}>
                    <h2 className={classes.h2}>Backend</h2>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={node} alt="" />
                            <h3>Nodejs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={express} alt="" />
                            <h3>Expressjs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={nestjs} alt="" />
                            <h3>Nestjs</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={php} alt="" />
                            <h3>PHP</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={laravel} alt="" />
                            <h3>Laravel</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={lumen} alt="" />
                            <h3>Lumen</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={symfony} alt="" />
                            <h3>Symfony</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                </div>
                <div className={classes.divSkill}>
                    <h2 className={classes.h2}>Móvil</h2>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={ionic} alt="" />
                            <h3>Ionic</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={flutter} alt="" />
                            <h3>Flutter</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                </div>
                <div className={classes.divSkill}>
                    <h2 className={classes.h2}>Otras herramientas</h2>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={docker} alt="" />
                            <h3>Docker</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={65} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={aws} alt="" />
                            <h3>AWS</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={60} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={bitbucket} alt="" />
                            <h3>Bitbucket</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={75} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={agile} alt="" />
                            <h3>Agile</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={github} alt="" />
                            <h3>GitHub</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={80} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={mysql} alt="" />
                            <h3>MySQL</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={75} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={mongo} alt="" />
                            <h3>MongoDB</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={70} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={trello} alt="" />
                            <h3>Trello</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={85} />
                        </div>
                    </div>
                    <div className={classes.itemsSkill}>
                        <div className={classes.skill}>
                            <img className={classes.image} src={jira} alt="" />
                            <h3>Jira</h3>
                        </div>
                        <div>
                            <LinearProgress variant="determinate" value={70} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skill;