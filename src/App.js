import './App.scss';
import React, { lazy, Suspense } from 'react'

import Header from './components/header/Header';
import Services from './components/services/Services';
import About from './components/about/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import WhyUs from './components/why-us/WhyUs';
import Locations from './components/locations/Locations';
//import GalleryShow from './components/gallery/GalleryShow';
import Prices from './components/prices/Prices';

import ToTop from './components/to-top/ToTop'

import LoadingScreen from './components/loading/LoadingScreen';

const GalleryShow = lazy(() => import('./components/gallery/GalleryShow'));
const Coaches = lazy(() => import('./components/coaches/Coaches'));
const Footer = lazy(() => import('./components/footer/Footer'));
function App() {


  return (
    <Router>

      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>


    </Router>




  );
}

export default App;
