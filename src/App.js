import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/shared/About/About.jsx';
import Login from './Pages/shared/Authentication/Login/Login.jsx';
import Register from './Pages/shared/Authentication/Register/Register.jsx';
import Contact from './Pages/shared/Contact/Contact.jsx';
import Footer from './Pages/shared/Home/Footer/Footer.jsx';
import Header from './Pages/shared/Home/Header/Header.jsx';
import Home from './Pages/shared/Home/Home';
import VillageMarket from './Pages/VillageMarket/VillageMarket';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/villegemarket" element={<VillageMarket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
