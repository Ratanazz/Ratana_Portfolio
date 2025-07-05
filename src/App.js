
import { Router ,Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ratana_Portfolio/" element={<Home />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
