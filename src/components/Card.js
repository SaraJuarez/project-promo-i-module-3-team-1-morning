import React from 'react';
import '../stylesheets/Card.scss';
import '../stylesheets/Theme1.scss';
import '../stylesheets/Theme2.scss';
import '../stylesheets/Theme3.scss';
import rogelia from '../images/image-rogelia.jpg';

function Card(props) {
  // console.log('soy propers', props.properties);
  return (
    // <section className={`card js-card ${props.properties.palette === 'green' ? 'card--theme1' : 'card--theme2'}`}>
    <section className={`card js-card ${props.properties.palette === 'green' ? 'card--theme1' : props.properties.palette === 'red' ? 'card--theme2' : 'card--theme3'}`}>
      <header className='card__title js-card-title'>
        <div className='card__title__box js-card-title-box'>
          <h2 className='card__title__first js-card-title-first'>{props.properties.name || 'Nombre y Apellidos'}</h2>
          <h3 className='card__title__second js-card-title-second'></h3>
        </div>
      </header>
      <img className='js-card-img card__img' src={rogelia} alt='card' title='card-image' />
      <nav className='card__menu js-card-menu'>
        <ul className='card__menu__links js-card-menu-links'>
          <li className='card__menu__links__icon js-card-menu-links-icon'>
            <a className='card__menu__item js-a-mobile' href='/'>
              <i className='fas fa-mobile-alt'></i>
            </a>
          </li>
          <li className='card__menu__links__icon js-card-menu-links-icon'>
            <a className='card__menu__item js-a-mail' href='/'>
              <i className='far fa-envelope'></i>
            </a>
          </li>
          <li className='card__menu__links__icon js-card-menu-links-icon'>
            <a className='card__menu__item js-a-linkedin' href='/' target='_blank'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
          <li className='card__menu__links__icon js-card-menu-links-icon'>
            <a className='card__menu__item js-a-github' href='/' target='_blank'>
              <i className='fab fa-github-alt'></i>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Card;
