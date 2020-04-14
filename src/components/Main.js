import React, { useEffect } from 'react';
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
  const [data, setData] = useState({ palette: 'green' });
  localStorage.setItem('userInfo', JSON.stringify(data));
  // useEffect(()=>{

  // }
  console.log('Soy data', data);
  const handleInputPreview = (value) => {
    // console.log('Ahoy', value);
    const newData = {
      ...data,
      [value.name]: value.value,
    };
    setData(newData);
  };
  const handleUserInfo = (value) => {
    // console.log('Yo soy Paleta', value);
    const newData = {
      ...data,
      [value.name]: value.value,
    };
    setData(newData);
  };

  return (
    <div className='container-box'>
      <Box1 formObject={formObject} stateInfo={data} />
      <Box2 handlefunction={handleInputPreview} handlePalette={handleUserInfo} stateInfo={data} />
    </div>
  );
}

export default Main;
