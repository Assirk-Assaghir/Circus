import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import Gallery from './Components/gallery/gallery.jsx'
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import GalleryItem from "./Components/gallery/galleryItem.jsx"
import EventDetails from './Components/EventDetails/EventDetails'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' render={(props) => <HomePage {...props} />} />
        <Route exact path='/gallery' render={(props) => <Gallery {...props} />} />
        <Route exact path='/gallery/:id' render={(props) => <GalleryItem {...props} />} />
        <Route exact path='/AboutUs' render={(props) => <AboutUs {...props} />} />
        <Route exact path='/event/:id' render={(props) => <EventDetails {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

