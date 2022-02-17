import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import AllNews from './Pages/AllNews/AllNews';
import Development from './Pages/Development/Development';
import CaseSingle from './Pages/Donations/Causes/CaseSingle';
import Donations from './Pages/Donations/Donations';
import Education from './Pages/Education/Education';
import TeacherDashboard from './Pages/Education/Teacher/TeacherDashboard';
import EMarket from './Pages/EMarket/EMarket';
import AddEvents from './Pages/Events/AddEvents/AddEvents';
import EventDetails from './Pages/Events/EventDetails/EventDetails';
import Events from './Pages/Events/Events';
import DoctorsAppointment from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorsAppointment';
import VaccineRegistration from './Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration';
import MedicalDashboard from './Pages/Medical/MedicalDashboard';
import Notification from './Pages/Notification/Notification';
import About from './Pages/shared/About/About';
import Login from './Pages/shared/Authentication/Login/Login';
import Register from './Pages/shared/Authentication/Register/Register';
import Contact from './Pages/shared/Contact/Contact';
import Footer from './Pages/shared/Home/Footer/Footer';
import Header from './Pages/shared/Home/Header/Header';
import Home from './Pages/shared/Home/Home';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/education" element={<Education />} />
            <Route path="/events" element={<Events />} />
            <Route path="/add-events" element={<AddEvents />} />
            <Route path="/eventDetails/:id" element={<EventDetails />} />
            <Route path="/development" element={<Development />} />
            <Route path="/e-market" element={<EMarket />} />
            <Route path="/news" element={<AllNews />} />
            <Route path="/dashboard" element={<TeacherDashboard />} />
            <Route path="/medical" element={<MedicalDashboard />}>
              <Route
                path="/medical/vaccine"
                element={<VaccineRegistration />}
              />
              <Route
                path="/medical/appointment"
                element={<DoctorsAppointment />}
              />
            </Route>
            <Route path="/donation" element={<Donations />} />
            <Route path="/causedetails/:id" element={<CaseSingle />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
