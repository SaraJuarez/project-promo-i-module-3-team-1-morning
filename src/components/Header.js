import React from 'react';
import '../stylesheets/Header.scss';
import imageHeader from '../images/tarjetas-molonas.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={imageHeader} alt='header' title='header-image' />
      </Link>
    </header>
  );
}

export default Header;
