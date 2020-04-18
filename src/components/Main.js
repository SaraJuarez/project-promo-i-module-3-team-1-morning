import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';
import { useState, useEffect } from 'react';

function Main(props) {
  //Establecemos un 'estado inicial' del que partir si no tenemos datos/los borramos
  const initialState = { palette: 1 };
  const [data, setData] = useState(initialState);
  //Consultamos si hay info guardada en el local, la recuperamos
  useEffect(() => {
    const info = localStorage.getItem('userInfo');
    //De haberla, la guardamos en el estado
    if (info) {
      setData(JSON.parse(info));
    }
  }, []);
  //Cada vez que data se vea modificada data, guardamos los nuevos valores en el local storage
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(data));
    //Metemos data en el 'famoso' array vacío para que useEffect se ejecute cada vez que haya cambios en ella
  }, [data]);

  const handlePalette = (value) => {
    const newData = {
      ...data,
      [value.name]: parseInt(value.value),
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
  console.log('data contains', data);
  return (
    <div className='container-box'>
      <Box1 infoFromInput={data} />
      <Box2 handlefunction={handleUserInfo} handlePalette={handlePalette} stateInfo={data} handleSaveImg={saveDataImg} photo={data.photo} />
    </div>
  );
}

export default Main;
