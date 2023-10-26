import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Videos from "./pages/Videos";
import Lessons from "./pages/Lessons";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Router basename="/guitar-roll">
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Videos />}/>
          <Route path="/lessons" element={<Lessons />}/>
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Home to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
