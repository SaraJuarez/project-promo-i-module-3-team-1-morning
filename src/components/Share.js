import React, { useState } from 'react';
import '../stylesheets/Share.scss';
import ShareCard from './ShareCard';
import fetchUrl from '../services/fetchUrl';

function Share(props) {
  const [url, setUrl] = useState('');

  const handleCreateCard = (info) => {
    fetchUrl(info)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (result) {
        setUrl(result.cardURL);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='share__button share__button js-share__button'>
      <button className='share__button__enabled js-button' onClick={() => handleCreateCard(props.stateInfo)}>
        <i className='far fa-address-card'></i>
        <h2 className='share__button__title'>Crear tarjeta</h2>
      </button>
      <ShareCard isShowing={url !== ''} cardURL={url} />
    </div>
  );
}

export default Share;
