import React from 'react';
import Card from './Card';
import Reset from './Reset';

function Box1(props) {
  return (
    <section className='principal container-box__one'>
      <Reset />
      <Card />
    </section>
  );
}

export default Box1;
