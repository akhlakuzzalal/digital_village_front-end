import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import AllUsers from './Pages/Admin/AllUsers/AllUsers';
import AllNews from './Pages/AllNews/AllNews';
import Development from './Pages/Development/Development';
import CaseSingle from './Pages/Donations/Causes/CaseSingle';
import Donations from './Pages/Donations/Donations';
import DetailVideo from './Pages/Education/DetailVideo/DetailVideo';
import Education from './Pages/Education/Education';
import StudentInfo from './Pages/Education/Student/StudentInfo';
import Addblogs from './Pages/Education/Teacher/Addblogs/Addblogs';
import Addvideo from './Pages/Education/Teacher/Addvideo/Addvideo';
import Analytics from './Pages/Education/Teacher/Analytics/Analytics';
import Myblogs from './Pages/Education/Teacher/Myblogs/Myblogs';
import Myvideos from './Pages/Education/Teacher/Myvideos/Myvideos';
import TeacherDashboard from './Pages/Education/Teacher/TeacherDashboard';
import TeacherInfo from './Pages/Education/Teacher/TeacherInfo';
import EMarket from './Pages/EMarket/EMarket';
import Cart from './Pages/EMarket/MarketComponents/Cart/Cart';
import Checkout from './Pages/EMarket/MarketComponents/Checkout/Checkout';
import AddEvents from './Pages/Events/AddEvents/AddEvents';
import EventDetails from './Pages/Events/EventDetails/EventDetails';
import Events from './Pages/Events/Events';
import DoctorsAppointment from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/DoctorsAppointment';
import VaccineInfo from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/Payment/VaccineRegistration/RegistrationPdf/VaccineInfo';
import VaccineRegistration from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/Payment/VaccineRegistration/VaccineRegistration';
import UserAppointments from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/UserAppointments/UserAppointments';
import MedicalDashboard from './Pages/Medical/MedicalDashboard';
import Notification from './Pages/Notification/Notification';
import About from './Pages/shared/About/About';
import Login from './Pages/shared/Authentication/Login/Login';
import Register from './Pages/shared/Authentication/Register/Register';
import Contact from './Pages/shared/Contact/Contact';
import Footer from './Pages/shared/Home/Footer/Footer';
import Header from './Pages/shared/Home/Header/Header';
import Home from './Pages/shared/Home/Home';
import NotFound from './Pages/shared/NotFound/NotFound';
import Profile from './Pages/User/Profile';
import PersistLogin from './SecureRoutes/PersistLogin';
import PrivateRoute from './SecureRoutes/PrivateRoute';

const Roles = {
  User: 1000,
  Admin: 5000,
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Routes>
            {/* ALL PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            {/* testing */}
            <Route element={<PersistLogin />}>
              <Route
                element={
                  <PrivateRoute allowedRoles={[Roles.User, Roles.Admin]} />
                }
              >
                <Route path="allUsers" element={<AllUsers />} />
              </Route>
            </Route>

            {/* ALL PRIVATE ROUTES */}

            {/* notification route */}
            <Route path="notifications" element={<Notification />} />

            {/* user routes */}
            <Route path="profile" element={<Profile />} />

            {/* education related routes */}
            <Route path="education" element={<Education />} />
            <Route path="teacherinfo" element={<TeacherInfo />} />
            <Route path="studentinfo" element={<StudentInfo />} />
            <Route path="teacherDashboard" element={<TeacherDashboard />}>
              <Route path="analytics" element={<Analytics />} />
              <Route path="myblogs" element={<Myblogs />} />
              <Route path="myvideos" element={<Myvideos />} />
              <Route path="addblogs" element={<Addblogs />} />
              <Route path="addvideos" element={<Addvideo />} />
            </Route>
            <Route path="detailvideo/:id" element={<DetailVideo />} />

            {/* medical related routes */}
            <Route path="medical" element={<MedicalDashboard />}>
              <Route path="vaccine" element={<VaccineRegistration />} />
              <Route path="appointment" element={<DoctorsAppointment />} />
              <Route path="pdf" element={<VaccineInfo />} />
            </Route>

            {/* event realted routes */}
            <Route path="events" element={<Events />} />
            <Route path="eventDetails/:id" element={<EventDetails />} />
            <Route path="add-events" element={<AddEvents />} />
            <Route path="eventDetails/:id" element={<EventDetails />} />

            {/* development related routes */}
            <Route path="development" element={<Development />} />

            {/* news related routes */}
            <Route path="news" element={<AllNews />} />

            {/* donation related routes */}
            <Route path="donation" element={<Donations />} />
            <Route path="causedetails/:id" element={<CaseSingle />} />

            {/* village market related routes */}
            <Route path="e-market" element={<EMarket />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="userAppointments" element={<UserAppointments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
