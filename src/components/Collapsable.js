import React from 'react';
import '../stylesheets/Collapsable.scss';

function Collapsable(props) {
  return (
    <div className='title-collapse js-title-collapse'>
      <div className='title-collapse__box'>
        <img className='title-collapse__box__icon' src={props.icon} alt='Icono' />
        <h2 className='title-collapse__box__title'>{props.title}</h2>
      </div>
      <i className='fas fa-chevron-down title-collapse__arrow'></i>
    </div>
  );
}

export default Collapsable;
