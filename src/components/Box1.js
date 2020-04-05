import React from 'react';
import Card from './Card';
import Reset from './Reset';

function Box1(props) {
  return (
    <section className='principal container-box__one'>
      <Reset />
      <Card formObject={props.formObject} />
    </section>
  );
}

export default Box1;
