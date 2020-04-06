import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';

let formObject = {
  name: 'pipi',
  job: 'Front End Developer',
  email: 'pipi@gmail.com',
  tel: '644555334',
  linkedin: 'https://www.linkedin.com/in/beatrizfleon/',
  github: 'https://github.com/Beatrizfleon',
};

function Main(props) {
  return (
    <div className="container-box">
      <Box1 formObject={formObject} />
      <Box2 />
    </div>
  );
}

export default Main;
