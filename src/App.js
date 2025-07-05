import React, { useEffect } from 'react';
import { Router ,Route,Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);
  return (
    <BrowserRouter basename="/Ratana_Portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ratana_Portfolio" element={<Home />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
