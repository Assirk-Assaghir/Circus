import React from 'react'
import './App.css';
import Gallery from './Components/gallery/gallery.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/gallery' render={(props) => <Gallery {...props} />} />
          <Route exact path='/AboutUs' render={(props) => <AboutUs {...props} />} />
        </Switch>
      </div>
    )
  }
}




export default App;

