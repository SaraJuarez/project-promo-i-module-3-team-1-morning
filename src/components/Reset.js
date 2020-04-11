import React from 'react';
import '../stylesheets/Reset.scss';

function Reset(props) {
  return (
    <div className='principal__container__button'>
      <button className='principal__button js-btn-reset' type='reset'>
        <i className='fas fa-trash-alt'></i> Reset
      </button>
    </div>
  );
}

export default Reset;
