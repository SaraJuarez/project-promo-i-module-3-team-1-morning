import React from 'react';
import logoAdalab from '../images/logo-adalab.png';
import '../stylesheets/Footer.scss';

function Footer(props) {
  return (
    <footer>
      <div class='footer'>
        <p class='footer__text'>Awesome profile-cards @2020</p>
        <img class='footer__logo' src={logoAdalab} title='Logo Adalab' alt='Logo de Adalab' />
      </div>
    </footer>
  );
}

export default Footer;
