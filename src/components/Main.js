import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';
import { useState } from 'react';

//  let formObject = {
//   name: 'pipi',
//   job: 'Front End Developer',
//   email: 'pipi@gmail.com',
//   tel: '644555334',
//   linkedin: 'https://www.linkedin.com/in/beatrizfleon/',
//   github: 'https://github.com/Beatrizfleon',
// };

function Main(props) {
  const [data, setData] = useState({ palette: 'green' });
  localStorage.setItem('userInfo', JSON.stringify(data));

  const handleInputPreview = (value) => {
    const newData = {
      ...data,
      [value.name]: value.value,
    };
    setData(newData);
  };

  const handleUserInfo = (value) => {
    const newData = {
      ...data,
      [value.name]: value.value,
    };
    setData(newData);
  };

  const saveDataImg = (dtaImg) => {
    const newImg = {
      ...data,
      photo: dtaImg.photo,
    };
    setData(newImg);
  };

  return (
    <div className='container-box'>
      <Box1 infoFromInput={data} />
      <Box2 handlefunction={handleInputPreview} handlePalette={handleUserInfo} stateInfo={data} handleSaveImg={saveDataImg} photo={data.photo} />
    </div>
  );
}

export default Main;
