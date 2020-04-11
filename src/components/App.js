import React from 'react';
// import logo from '../images/logo.svg';
import '../stylesheets/App.scss';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Landing from './Landing';

function App() {
  return (
    <div className='App'>
      <Landing />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
