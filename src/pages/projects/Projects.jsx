import { AppBar, Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../../components/header/Header';
import backgroundHome from '../../images/background-home.jpg';
import wollyHome from '../../images/wolly1.png';
import inout from '../../images/inout.png';
import wollyPro from '../../images/wollypro5.png';
import wollyPro1 from '../../images/wollypro1.png';
import inoutMobile from '../../images/inoutmobile1.png';

import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyle = makeStyles((theme) => ({
    app: {
        backgroundColor: '#fff',
        color: '#000'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        maxWidth: 1200,
        width: 1000,
        height: '90vh',
        position: 'relative'
    },
    home: {
        backgroundImage: `url(${backgroundHome})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerProjects: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: '4px'
    },
    containerProject: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '25px',
        width: '90%',
        height: '80%'
    },
    h1: {
        color: '#fff'
    },
    image:{
        width: '300px',
        boxShadow: '6px 30px 30px rgb(23 43 77 / 10%)',
        borderRadius: '4px',
        marginRight: '25px'
    }, 
    link: {
        textDecoration: 'none',
        fontSize: '2rem',
        color: '#000',
        '&:hover':{
            textDecoration: 'underline'
        }
    },
    tabPanel: {
        height: '94%',
        overflow: 'auto'
    }
}));


function Projects(){

    const classes = useStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className={classes.home}>
            <Header />  
            <h1 className={classes.h1}>Mis proyectos</h1>
            <div className={classes.root}>
            <AppBar className={classes.app} position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Web" {...a11yProps(0)} />
                        <Tab label="Móvil" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel className={classes.tabPanel} value={value} index={0}>
                <div>
                    <div className={classes.containerProjects}>
                        <div className={classes.containerProject}>
                            <img className={classes.image} src={wollyHome} alt="" />
                            <div>
                                <Link className={classes.link} to='/mi_web/wolly'>Wolly Home</Link>
                                <p>Encuentra los mejores Profesionales para tu Hogar.</p>
                            </div>
                        </div>
                        <div className={classes.containerProject}>
                            <img className={classes.image} src={wollyPro1} alt="" />
                            <div>
                                <Link className={classes.link} to='/mi_web/wolly-pro1'>Wolly Pro</Link>
                                <p>Aplicación web para la gestión de los trabajos de los profesionales.</p>
                            </div>
                        </div>
                        <div className={classes.containerProject}>
                            <img className={classes.image} src={inout} alt="" />
                            <div>
                                <Link className={classes.link} to='/mi_web/inout'>InOut</Link>
                                <p>Sistema para el control de fichajes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </TabPanel>
                <TabPanel className={classes.tabPanel} value={value} index={1}>
                    <div className={classes.containerProject}>
                        <img className={classes.image} src={wollyPro} alt="" />
                        <div>
                            <Link className={classes.link} to='/mi_web/wolly-pro'>Wolly Pro</Link>
                            <p>Aplicación móvil para profesionales Wolly.</p>
                        </div>
                    </div>
                    <div className={classes.containerProject}>
                        <img className={classes.image} src={inoutMobile} alt="" />
                        <div>
                            <Link className={classes.link} to='/mi_web/inout-mobile'>InOut Mobile</Link>
                            <p>Aplicación móvil para el cnotrol del fichaje.</p>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}

export default Projects;