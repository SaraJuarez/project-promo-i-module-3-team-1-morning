import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

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
