import React from 'react';
import logoAdalab from '../images/logo-adalab.png';
import imageHeader from '../images/tarjetas-molonas.png';
import iconFill from '../images/keyboard-regular.svg';
import iconDesign from '../images/object-ungroup-regular.svg';
import iconShare from '../images/share-alt-solid.svg';
import '../stylesheets/Landing.scss';
import CardWrapper from './CardWrapper.js';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Landing(props) {
  return (
    <body>
      <main className='main-landing'>
        <div className='img-container'>
          <img
            className='img-container__image'
            src={imageHeader}
            alt='Logotipo de Awasome profile-cards'
            title='Awasome profile-cards'
          />
        </div>
        <h1 className='main-landing__title'>Crea tu tarjeta de visita</h1>
        <h3 className='main-landing__subtitle'>
          Crea mejores contactos profesionales de forma fácil y cómoda
        </h3>
        <section className='info'>
          <div className='info__icon-container'>
            <img
              className='info__icon'
              src={iconDesign}
              title='Diseña'
              alt='Icono de diseña'
            />
            <h5 className='info__text'>Diseña</h5>
          </div>
          <div className='info__icon-container'>
            <img
              className='info__icon'
              src={iconFill}
              title='Rellena'
              alt='Icono de rellena'
            />
            <h5 className='info__text'>Rellena</h5>
          </div>
          <div className='info__icon-container'>
            <img
              className='info__icon'
              src={iconShare}
              title='Comparte'
              alt='Icono de comparte'
            />
            <h5 className='info__text'>Comparte</h5>
          </div>
        </section>
        <div className='container'>
          <Link to='/CardWrapper' className='container__btn'>
            Comenzar
          </Link>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}
export default Landing;
