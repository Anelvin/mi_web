import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

function Home(){
    return (
        <div>
            <Header />
            <h1>Home page</h1>
            <Link to='/mi_web/about'>About</Link>
        </div>
    );
}

export default Home;