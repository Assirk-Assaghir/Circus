import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import Gallery from './Components/gallery/gallery.jsx'
import './App.css';
import Header from './Components/Header/Header';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' render={(props) => <HomePage {...props} />} />
        <Route exact path='/gallery' render={(props) => <Gallery {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

