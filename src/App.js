import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import Navigation from './components/Navigation';

import Footer from './components/Footer';
// import { Route, Routes, Router } from 'react-router';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        {/* Include Navbar */}
        <Navigation />
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
