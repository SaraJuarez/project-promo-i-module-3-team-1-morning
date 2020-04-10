import React from 'react';
import Card from './Card';
import Reset from './Reset';
import '../stylesheets/Box1.scss';

function Box1(props) {
  /* console.log(props.infoFromInput); */
  return (
    <section className="principal container-box__one">
      <Reset />
      <Card formObject={props.formObject} />
      {/* <Card properties={props.infoFromInput} /> */}
    </section>
  );
}

export default Box1;
