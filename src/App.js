import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EventDetails from './pages/Events/EventDetails/EventDetails';
import Events from './pages/Events/Events';
import About from './pages/shared/About/About.jsx';
import Login from './pages/shared/Authentication/Login/Login.jsx';
import Register from './pages/shared/Authentication/Register/Register.jsx';
import Contact from './pages/shared/Contact/Contact.jsx';
import Footer from './pages/shared/Home/Footer/Footer.jsx';
import Header from './pages/shared/Home/Header/Header.jsx';
import Home from './pages/shared/Home/Home';
import NewsDetails from './pages/shared/Home/LatestNews/NewsDetails';

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
          <Route path="/events" element={<Events />} />
          <Route path="/event-Details" element={<EventDetails />} />
          <Route path="/news-Details" element={<NewsDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
