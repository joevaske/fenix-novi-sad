import './App.scss';

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



function App() {
  return (
    <Router>
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




      </div>
    </Router>

  );
}

export default App;
