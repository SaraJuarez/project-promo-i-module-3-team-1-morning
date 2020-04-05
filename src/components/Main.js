import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';

let formObject = {
  name: 'Pippi Långstrump',
  job: 'Front End developer',
  email: 'pipi@gmail.com',
  tel: '644555334',
  linkedin: 'https://www.linkedin.com/in/beatrizfleon/',
  github: 'https://github.com/Beatrizfleon',
};

function Main(props) {
  return (
    <div className='Main'>
      <Box1 formObject={formObject} />
      <Box2 />
    </div>
  );
}

export default Main;
