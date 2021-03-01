import './App.scss';
import React, { useState, useEffect } from 'react'

import Header from './components/header/Header';
import Services from './components/services/Services';
import About from './components/about/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import WhyUs from './components/why-us/WhyUs';
import Locations from './components/locations/Locations';
import GalleryShow from './components/gallery/GalleryShow';
import Prices from './components/prices/Prices';
import Coaches from './components/coaches/Coaches';
import ToTop from './components/to-top/ToTop'
import Footer from './components/footer/Footer';
import LoadingScreen from './components/loading/LoadingScreen';



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <Router>

      {
        loading === false ? (
          <div className="App">
            <Header />
            <Route path='/' component={About} />
            <Route path='/' component={Services} />
            <WhyUs />
            <Prices />
            <Locations />
            <GalleryShow />
            <Coaches />
            <ToTop />
            <Footer />
          </div>
        ) : (
            <LoadingScreen />
          )
      }

    </Router>




  );
}

export default App;
