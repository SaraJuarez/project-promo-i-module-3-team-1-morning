import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';
import {useState, useEffect} from 'react';

function Main(props) {
  const [data, setData] = useState({palette: 'green'});
  /* useEffect(() => {
    console.log('Estoy al principio de useEffect');
    let getLocalStore = JSON.parse(localStorage.getItem('userInfo'));
    setData(getLocalStore);
  }, []); */

  // const handleInputPreview = (value) => {
  //   const newData = {
  //     ...data,
  //     [value.name]: value.value,
  //   };
  //   setData(newData);
  // };

  const handleUserInfo = (value) => {
    const newData = {
      ...data,
      [value.name]: value.value,
    };
    setData(newData);
    setLocalStorage();
  };

  const saveDataImg = (dtaImg) => {
    const newImg = {
      ...data,
      photo: dtaImg.photo,
    };
    setData(newImg);
    setLocalStorage();
  };

  const setLocalStorage = () => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  };

  return (
    <div className="container-box">
      <Box1 infoFromInput={data} />
      <Box2 handlefunction={handleUserInfo} handlePalette={handleUserInfo} stateInfo={data} handleSaveImg={saveDataImg} photo={data.photo} />
    </div>
  );
}

export default Main;
