import React from 'react';
import '../stylesheets/Collapsable.scss';

function Collapsable(props) {
  return (
    <div class="title-collapse js-title-collapse">
      <div class="title-collapse__box">
        <img class="title-collapse__box__icon" src={props.icon} alt="Icono" />
        <h2 class="title-collapse__box__title">{props.title}</h2>
      </div>
      <i class="fas fa-chevron-down title-collapse__arrow"></i>
    </div>
  );
}

export default Collapsable;
