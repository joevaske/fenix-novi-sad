import './App.scss';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';

import About from './components/about/About';
import WhyUs from './components/why-us/WhyUs';
import Locations from './components/locations/Locations';
import Prices from './components/prices/Prices';
import ToTop from './components/to-top/ToTop';
import LoadingScreen from './components/loading/LoadingScreen';
import Schedule from './components/schedule/Schedule';

const Services = lazy(() => import('./components/services/Services'));
const GalleryShow = lazy(() => import('./components/gallery/GalleryShow'));
const Coaches = lazy(() => import('./components/coaches/Coaches'));
const News = lazy(() => import('./components/news/News'));
const Footer = lazy(() => import('./components/footer/Footer'));
function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <div className='App'>
          <Header />
          <Route path='/' component={About} />
          <Route path='/' component={Services} />
          <WhyUs />
          <Schedule />
          {/*
              <Prices />
            */}

          <Locations />
          <GalleryShow />
          <Coaches />
          {/*
                <News />
            */}

          <ToTop />
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
