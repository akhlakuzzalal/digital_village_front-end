import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Education from './Pages/Education/Education';
import About from './Pages/shared/About/About.jsx';
import Login from './Pages/shared/Authentication/Login/Login.jsx';
import Register from './Pages/shared/Authentication/Register/Register.jsx';
import Contact from './Pages/shared/Contact/Contact.jsx';
import Footer from './Pages/shared/Home/Footer/Footer.jsx';
import Header from './Pages/shared/Home/Header/Header';
import Home from './Pages/shared/Home/Home';

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
          <Route path= "/education" element={<Education/>}/>
          

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
