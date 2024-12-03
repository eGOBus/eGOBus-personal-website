import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import Home from "./pages/Home"; // Example components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apps from "./pages/Apps";
import WorkingDriver from "./pages/WorkingDriver"; // Example section components
import WorkingParent from "./pages/WorkingParent";
import WorkingSchool from "./pages/WorkingSchool";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is included */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/workingDriver" element={<WorkingDriver />} />
        <Route path="/workingParent" element={<WorkingParent />} />
        <Route path="/workingSchool" element={<WorkingSchool />} />
      </Routes>
    </Router>
  );
};

export default App;
