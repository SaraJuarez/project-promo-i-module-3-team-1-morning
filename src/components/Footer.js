import React from 'react';
import logoAdalab from '../images/logo-adalab.png';
import '../stylesheets/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <p className='footer__text'>Awesome profile-cards @2020</p>
        <img className='footer__logo' src={logoAdalab} title='Logo Adalab' alt='Logo de Adalab' />
      </div>
    </footer>
  );
}

export default Footer;
