import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import AllNews from './Pages/AllNews/AllNews';
import Development from './Pages/Development/Development';
// import Donation from './Pages/Donation/Donation';
import Education from './Pages/Education/Education';
import StudentInfo from './Pages/Education/Student/StudentInfo';
import Analytics from './Pages/Education/Teacher/Analytics/Analytics';
import Myblogs from './Pages/Education/Teacher/Myblogs/Myblogs';
import Myvideos from './Pages/Education/Teacher/Myvideos/Myvideos';
import TeacherDashboard from './Pages/Education/Teacher/TeacherDashboard';
import TeacherInfo from './Pages/Education/Teacher/TeacherInfo';
import EMarket from './Pages/EMarket/EMarket';
import EventDetails from './Pages/Events/EventDetails/EventDetails';
import Events from './Pages/Events/Events';
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
            </Route>
            {/* <Route path="/medical" element={<Medical />} /> */}
            <Route path="events" element={<Events />} />
            <Route path="eventDetails/:id" element={<EventDetails />} />
            {/* <Route path="/donation" element={<Donation />} /> */}
            <Route path="development" element={<Development />} />
            <Route path="e-market" element={<EMarket />} />
            <Route path="news" element={<AllNews />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
