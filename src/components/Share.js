import React from 'react';
import '../stylesheets/Share.scss';

function Share(props) {
  return (
    <div className='share__button share__button hidden js-share__button'>
      <button className='share__button__enabled js-button'>
        <i className='far fa-address-card'></i>
        <h2 className='share__button__title'>Crear tarjeta</h2>
      </button>

      <div className='share__card js-share__card hidden'>
        <span className='share__card__text'>La tarjeta ha sido creada:</span>
        {/* <a href='/' className='share__card__link js-share-link'></a> */}
        {/* Reemplazar la URL a compartir por la http de google  */}
        <a
          href='/'
          target='_blank'
          className='share__card__twitter js-share-button'
        >
          <i className='fab fa-twitter'></i>Compartir en twitter
        </a>
      </div>
    </div>
  );
}

export default Share;
