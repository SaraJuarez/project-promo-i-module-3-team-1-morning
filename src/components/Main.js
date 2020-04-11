import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';
import { useState } from 'react';

let formObject = {
  name: 'pipi',
  job: 'Front End Developer',
  email: 'pipi@gmail.com',
  tel: '644555334',
  linkedin: 'https://www.linkedin.com/in/beatrizfleon/',
  github: 'https://github.com/Beatrizfleon',
};

function Main(props) {
  const [data, setData] = useState([]);
  const handleInputPreview = (value) => {
    console.log(value);
    setData(value);
    console.log(data);
  };
  function handlePalette(value) {
    console.log('Yo soy Main', value);
  }
  return (
    <div className='container-box'>
      <Box1 formObject={formObject} infoFromInput={data} />
      <Box2 handlefunction={handleInputPreview} handlePalette={handlePalette} />
    </div>
  );
}

export default Main;
