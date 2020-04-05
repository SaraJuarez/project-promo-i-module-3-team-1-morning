import React from 'react';
import '../stylesheets/Reset.scss';

function Reset(props) {
  return (
    <div class='principal__container__button'>
      <button class='principal__button js-btn-reset' type='reset'>
        <i className='fas fa-trash-alt'></i> Reset
      </button>
    </div>
  );
}

export default Reset;
