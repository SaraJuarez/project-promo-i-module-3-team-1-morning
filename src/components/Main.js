import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';
import { useState } from 'react';

function Main(props) {
  const [data, setData] = useState({ palette: 'green' });

  localStorage.setItem('userInfo', JSON.stringify(data));

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

  console.log(data);

  return (
    <div className='container-box'>
      <Box1 infoFromInput={data} />
      <Box2
        handlefunction={handleUserInfo}
        handlePalette={handleUserInfo}
        stateInfo={data}
        handleSaveImg={saveDataImg}
        photo={data.photo}
      />
    </div>
  );
}

export default Main;
