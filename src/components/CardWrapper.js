import React from 'react';
// import logo from '../images/logo.svg';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Landing from './Landing';

function CardWrapper() {
  return (
    <div className='CardWrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default CardWrapper;
