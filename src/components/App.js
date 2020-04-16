import React from 'react';
// import logo from '../images/logo.svg';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Landing from './Landing';
import CardWrapper from './CardWrapper';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Landing} />
        <Route path='/Card' component={CardWrapper} />
      </Switch>
    </div>
  );
}

export default App;
