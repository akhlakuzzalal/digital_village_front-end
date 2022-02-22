import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import AllNews from './Pages/AllNews/AllNews';
import Development from './Pages/Development/Development';
import DetailVideo from './Pages/Education/DetailVideo/DetailVideo';
// import Donation from './Pages/Donation/Donation';
import Education from './Pages/Education/Education';
import StudentInfo from './Pages/Education/Student/StudentInfo';
import Addblogs from './Pages/Education/Teacher/Addblogs/Addblogs';
import Analytics from './Pages/Education/Teacher/Analytics/Analytics';
import AddVideo from './Pages/Education/Teacher/Dashboard/partials/dashboardItem/AddVideo';
import Myblogs from './Pages/Education/Teacher/Myblogs/Myblogs';
import Myvideos from './Pages/Education/Teacher/Myvideos/Myvideos';
import TeacherDashboard from './Pages/Education/Teacher/TeacherDashboard';
import TeacherInfo from './Pages/Education/Teacher/TeacherInfo';
import EMarket from './Pages/EMarket/EMarket';
import EventDetails from './Pages/Events/EventDetails/EventDetails';
import Events from './Pages/Events/Events';
import DoctorsAppointment from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/DoctorsAppointment';
import VaccineInfo from './Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration/RegistrationPdf/VaccineInfo';
import VaccineRegistration from './Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration/VaccineRegistration';
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
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="notifications" element={<Notification />} />
            {/* education related routes */}
            <Route path="education" element={<Education />} />
            <Route path="teacherinfo" element={<TeacherInfo />} />
            <Route path="studentinfo" element={<StudentInfo />} />
            <Route path="teacherDashboard" element={<TeacherDashboard />}>
              <Route path="analytics" element={<Analytics />} />
              <Route path="myblogs" element={<Myblogs />} />
              <Route path="myvideos" element={<Myvideos />} />
              <Route path="addblogs" element={<Addblogs />} />
              <Route path="addvideos" element={<AddVideo />} />
            </Route>
            <Route path="/detailvideo/:id" element={<DetailVideo />} />

            <Route path="/events" element={<Events />} />
            <Route path="/eventDetails/:id" element={<EventDetails />} />
            {/* <Route path="/donation" element={<Donation />} /> */}
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
            <Route path="/pdf" element={<VaccineInfo />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
