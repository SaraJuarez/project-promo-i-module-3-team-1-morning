import React from 'react';
import '../stylesheets/Header.scss';
import imageHeader from '../images/tarjetas-molonas.png';

function Header(props) {
  return (
    <header className="header">
      <img className="header__img" src={imageHeader} alt="header" title="header-image" />
    </header>
  );
}

export default Header;
