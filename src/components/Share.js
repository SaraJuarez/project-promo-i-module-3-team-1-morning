import React, { useState } from 'react';
import '../stylesheets/Share.scss';
import ShareCard from './ShareCard';
import fetchUrl from '../services/fetchUrl';

function Share(props) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateCard = (info) => {
    //mostrar el "loader"
    setIsLoading(true);
    fetchUrl(info)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (result) {
        setUrl(result.cardURL);
        //ocultar el "loader"
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  let loaderStyle = isLoading ? '' : 'hidden';
  return (
    <div className='share__button share__button js-share__button'>
      <button className='share__button__enabled js-button' onClick={() => handleCreateCard(props.stateInfo)}>
        <i className='far fa-address-card'></i>
        <h2 className='share__button__title'>Crear tarjeta</h2>
      </button>
      <div class={`loader ${loaderStyle}`}></div>

      <ShareCard isShowing={url !== ''} cardURL={url} />
    </div>
  );
}

export default Share;
