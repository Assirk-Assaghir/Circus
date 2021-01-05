import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <h1>Seeerk</h1> */}
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage otherprops={props} />} />
        <Route exact path='/aboutus' render={(props) => <AboutUs otherprops={props} />} />
      </Switch>
    </div>
  );
}

export default App;



