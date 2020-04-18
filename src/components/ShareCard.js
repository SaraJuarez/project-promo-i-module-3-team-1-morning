import React from 'react';
import '../stylesheets/Share.scss';

function ShareCard(props) {
  let showShareButton = props.isShowing ? '' : 'hidden';
  return (
    <div className={`share__card js-share__card ${showShareButton}`}>
      <span className='share__card__text'>La tarjeta ha sido creada:</span>
      <a href={props.cardURL} className='share__card__link js-share-link'>
        {props.cardURL}
      </a>

      <a href={`https://twitter.com/intent/tweet?text=Mi+tarjeta+se+ha+creado+${props.cardURL}`} target='_blank' className='share__card__twitter js-share-button'>
        <i className='fab fa-twitter'></i>Compartir en twitter
      </a>
    </div>
  );
}

export default ShareCard;
