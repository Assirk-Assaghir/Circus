import React from 'react'
import HomePage from './Components/HomePage/HomePage'

import './App.css';
import Gallery from './Components/gallery/gallery.jsx'
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h1>Seeerk</h1>
      <HomePage />
    </div>
  );
}




export default App;

