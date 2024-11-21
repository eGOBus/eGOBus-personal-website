
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Working from './pages/Working';
import Apps from './pages/Apps';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar component should be placed here to show on every page */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/working" element={<Working />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
