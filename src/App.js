import './App.scss';

import Header from './components/header/Header';
import Services from './components/services/Services';
import About from './components/about/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import WhyUs from './components/why-us/WhyUs';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path='/' component={About} />
        <Route path='/' component={Services} />
        <WhyUs />
      </div>
    </Router>

  );
}

export default App;
