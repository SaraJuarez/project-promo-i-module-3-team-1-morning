import React from 'react';
import Card from './Card';
import Reset from './Reset';
import '../stylesheets/Box1.scss';

function Box1(props) {
  return (
    <section className='principal container-box__one'>
      <Reset />
      <Card properties={props.infoFromInput} photo={props.photo} />
    </section>
  );
}

export default Box1;
