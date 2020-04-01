import React from 'react';
import '../stylesheets/Header.scss';
import imageHeader from '../images/tarjetas-molonas.png';

function Header(props) {
  return (
    <header class='header'>
      <img class='header__img' src={imageHeader} alt='header-image' title='header-image' />
    </header>
  );
}

export default Header;
