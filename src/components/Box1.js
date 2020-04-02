import React from 'react';

function Box1(props) {
  return (
    <section className='principal container-box__one'>
      <div className='principal__container__button'>
        <button className='principal__button js-btn-reset' type='reset'>
          <i className='fas fa-trash-alt'></i>
          Reset
        </button>
      </div>
      <section className='card js-card'>
        <header className='card__title js-card-title'>
          <div className='card__title__box js-card-title-box'>
            <h2 className='card__title__first js-card-title-first'>Nombre apellido</h2>
            <h3 className='card__title__second js-card-title-second'>Front-end developer</h3>
          </div>
        </header>
        <img className='js-card-img card__img' src='./assets/images/image-rogelia.jpg' alt='card' title='card-image' />
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
    </section>
  );
}

export default Box1;
