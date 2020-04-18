import React from 'react';
import '../stylesheets/Share.scss';

const fetchUrl = (jsonString) => {
  console.log(JSON.stringify(jsonString));

  return fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(jsonString),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default fetchUrl;
