import React from 'react';
// import logo from '../images/logo.svg';
import '../stylesheets/App.scss';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
