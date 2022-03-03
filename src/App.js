import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AllUsers from './Pages/Admin/AllUsers/AllUsers';
import DevelopmentManage from './Pages/Admin/DashboardItem/Development/DevelopmentManage';
import Donation from './Pages/Admin/DashboardItem/Donation/Donation';
import Eventmanagement from './Pages/Admin/DashboardItem/EventManagement/Eventmanagement';
import MarketManagement from './Pages/Admin/DashboardItem/Market/MarketManagement';
import AllNews from './Pages/AllNews/AllNews';
import Development from './Pages/Development/Development';
import CaseSingle from './Pages/Donations/Causes/CaseSingle';
import Donations from './Pages/Donations/Donations';
import DetailVideo from './Pages/Education/DetailVideo/DetailVideo';
import Education from './Pages/Education/Education';
import AllBlogs from './Pages/Education/Student/AllBlogs/AllBlogs';
import AllVideos from './Pages/Education/Student/AllVideos/AllVideos';
import FavouriteBlogs from './Pages/Education/Student/FavouriteBlogs/FavouriteBlogs';
import FavouriteVideos from './Pages/Education/Student/FavouriteVideos/FavouriteVideos';
import Student from './Pages/Education/Student/Student';
import StudentHome from './Pages/Education/Student/StudentHome/StudentHome';
import Analytics from './Pages/Education/Teacher/Analytics/Analytics';
import Myblogs from './Pages/Education/Teacher/Myblogs/Myblogs';
import Myvideos from './Pages/Education/Teacher/Myvideos/Myvideos';
import PublishBlog from './Pages/Education/Teacher/PublishBlog/PublishBlog';
import PublishVideo from './Pages/Education/Teacher/PublishVideo/PublishVideo';
import RegisterTeacher from './Pages/Education/Teacher/RegisterTeacher';
import Teacher from './Pages/Education/Teacher/Teacher';
import EMarket from './Pages/EMarket/EMarket';
import Cart from './Pages/EMarket/MarketComponents/Cart/Cart';
import Checkout from './Pages/EMarket/MarketComponents/Checkout/Checkout';
import MyOrder from './Pages/EMarket/MarketComponents/DashboardItems/MyOrder';
import MedicineShop from './Pages/EMarket/MarketComponents/MedicineShop/MedicineShop';
import ProductDetails from './Pages/EMarket/MarketComponents/ProductDetails';
import MarketDashboard from './Pages/EMarket/MarketDashboard';
import AddEvents from './Pages/Events/AddEvents/AddEvents';
import AllEvents from './Pages/Events/AllEvents/AllEvents';
import ArchivedEvents from './Pages/Events/ArchivedEvents/ArchivedEvents';
import EventBooking from './Pages/Events/EventBooking/EventBooking';
import EventDetails from './Pages/Events/EventDetails/EventDetails';
import Events from './Pages/Events/Events';
import ManageEvents from './Pages/Events/ManageEvents/ManageEvents';
import UpcomingEvents from './Pages/Events/UpcomingEvents/UpcomingEvents';
import DoctorsAppointment from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/DoctorsAppointment';
import UserAppointments from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/UserAppointments/UserAppointments';
import RegForm from './Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration/RegForm/RegForm';
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
import NewsDetails from './Pages/shared/Home/News/NewsDetails/NewsDetails';
import NotFound from './Pages/shared/NotFound/NotFound';
import Profile from './Pages/User/DashboardComponent/Profile';
import UserDashboard from './Pages/User/UserDashboard';
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
            <Route
              element={
                <PrivateRoute allowedRoles={[Roles.User, Roles.Admin]} />
              }
            >
              <Route path="allUsers" element={<AllUsers />} />
            </Route>

            {/* ALL PRIVATE ROUTES */}

            {/* notification route */}
            <Route path="notifications" element={<Notification />} />

            {/* user routes */}
            <Route path="userdashboard" element={<UserDashboard />}>
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* education related routes */}
            <Route path="education" element={<Education />} />
            <Route path="registerTeacher" element={<RegisterTeacher />} />
            {/* routes for teacher */}
            <Route path="teacher" element={<Teacher />}>
              <Route path="myblogs" element={<Myblogs />} />
              <Route path="myvideos" element={<Myvideos />} />
              <Route path="publishBlog" element={<PublishBlog />} />
              <Route path="publishVideo" element={<PublishVideo />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>

            {/* routes for student */}
            <Route path="student" element={<Student />}>
              <Route path="home" element={<StudentHome />} />
              <Route path="allBlogs" element={<AllBlogs />} />
              <Route path="allVideos" element={<AllVideos />} />
              <Route path="favouriteBlogs" element={<FavouriteBlogs />} />
              <Route path="favouriteVideos" element={<FavouriteVideos />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
            <Route path="detailvideo/:id" element={<DetailVideo />} />

            {/* medical related routes */}
            <Route path="medical" element={<MedicalDashboard />}>
              <Route path="vaccine" element={<VaccineRegistration />} />
              <Route path="appointment" element={<DoctorsAppointment />} />
              <Route path="regForm" element={<RegForm />} />
              <Route path="userAppointments" element={<UserAppointments />} />
              <Route path="pdf" element={<VaccineInfo />} />
            </Route>

            {/* event realted routes */}
            <Route path="events" element={<Events />}>
              <Route path="all-events" element={<AllEvents />} />
              <Route path="upcoming-events" element={<UpcomingEvents />} />
              <Route path="archived-events" element={<ArchivedEvents />} />
            </Route>
            <Route>
              <Route
                path="/event-booking/:eventBookingId"
                element={<EventBooking />}
              />
            </Route>

            {/* next */}
            {/* <Route path="eventDetails/:id" element={<EventDetails />} /> */}
            <Route path="add-events" element={<AddEvents />} />
            <Route path="eventDetails/:id" element={<EventDetails />} />
            <Route path="manageEvents" element={<ManageEvents />} />

            {/* development related routes */}
            <Route path="development" element={<Development />} />

            {/* news related routes */}
            <Route path="newsDetails/:id" element={<NewsDetails />} />
            <Route path="allNews" element={<AllNews />} />

            {/* donation related routes */}
            <Route path="donation" element={<Donations />} />
            <Route path="causedetails/:id" element={<CaseSingle />} />

            {/* village market related routes */}
            <Route path="e-market" element={<EMarket />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="productdetails/:id" element={<ProductDetails />} />
            <Route path="medicinestore" element={<MedicineShop />} />
            <Route path="marketdashboard" element={<MarketDashboard />}>
              <Route path="myorder" element={<MyOrder />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            {/* Admin dashboard routes */}
            <Route path="admin" element={<AdminDashboard />}>
              <Route path="allusers" element={<AllUsers />} />
              <Route path="events" element={<Eventmanagement />} />
              <Route path="donation" element={<Donation />} />
              <Route path="development" element={<DevelopmentManage />} />
              <Route path="market" element={<MarketManagement />} />
            </Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
