import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Components/ChattingApp/Chat/Chat';
import Join from './Components/ChattingApp/Join/Join';
import ScrollToTop from './Components/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AllUsers from './Pages/Admin/AllUsers/AllUsers';
import ManageAllUsers from './Pages/Admin/AllUsers/ManageAllUsers';
import AddDevelopment from './Pages/Admin/DashboardItem/Development/AddDevelopment/AddDevelopment';
import DevelopmentDashboard from './Pages/Admin/DashboardItem/Development/DevelopmentDashboard';
import DevelopmentManage from './Pages/Admin/DashboardItem/Development/DevelopmentManage/DevelopmentManage';
import AddCause from './Pages/Admin/DashboardItem/Donation/AddCause';
import AllCauses from './Pages/Admin/DashboardItem/Donation/AllCauses';
import DonarPaymente from './Pages/Admin/DashboardItem/Donation/DonarPaymente';
import ManageAllPaymente from './Pages/Admin/DashboardItem/Donation/ManageAllPaymente';
import UpdateCause from './Pages/Admin/DashboardItem/Donation/UpdateCause';
import Eventmanagement from './Pages/Admin/DashboardItem/EventManagement/Eventmanagement';
import MarketManagement from './Pages/Admin/DashboardItem/Market/MarketManagement';
import AddNews from './Pages/Admin/DashboardItem/News/AddNews/AddNews';
import ManageNews from './Pages/Admin/DashboardItem/News/ManageNews/ManageNews.jsx';
import NewsDashboard from './Pages/Admin/DashboardItem/News/NewsDashboard';
import AllNews from './Pages/AllNews/AllNews';
import Development from './Pages/Development/Development';
import CaseSingle from './Pages/Donations/Causes/CaseSingle';
import Donations from './Pages/Donations/Donations';
import BlogDetails from './Pages/Education/BlogDetails/BlogDetails';
import DetailVideo from './Pages/Education/DetailVideo/DetailVideo';
import Education from './Pages/Education/Education';
import AllBlogs from './Pages/Education/Student/AllBlogs/AllBlogs';
import AllVideos from './Pages/Education/Student/AllVideos/AllVideos';
import FavouriteBlogs from './Pages/Education/Student/FavouriteBlogs/FavouriteBlogs';
import FavouriteVideos from './Pages/Education/Student/FavouriteVideos/FavouriteVideos';
import Student from './Pages/Education/Student/Student';
import StudentHome from './Pages/Education/Student/StudentHome/StudentHome';
import Analytics from './Pages/Education/Teacher/Dashboard/Analytics/Analytics';
import EditBlog from './Pages/Education/Teacher/Myblogs/EditBlog/EditBlog';
import Myblogs from './Pages/Education/Teacher/Myblogs/Myblogs';
import EditVideo from './Pages/Education/Teacher/Myvideos/EditVideo/EditVideo';
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
import EventDetails from './Pages/Events/EventDetails/EventDetails';
import Events from './Pages/Events/Events';
import ManageEvents from './Pages/Events/ManageEvents/ManageEvents';
import MyBookedEvents from './Pages/Events/MyBookedEvents/MyBookedEvents';
import UpcomingEvents from './Pages/Events/UpcomingEvents/UpcomingEvents';
import AddAppointment from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/AddAppointment';
import DoctorsAppointment from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/DoctorsAppointment';
import UserAppointments from './Pages/Medical/Dashboard/partials/dashboardItem/DoctorAppointment/UserAppointments/UserAppointments';
import RegForm from './Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration/RegForm/RegForm';
import VaccineInfo from './Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration/RegistrationPdf/VaccineInfo';
import VaccineRegistration from './Pages/Medical/Dashboard/partials/dashboardItem/VaccineRegistration/VaccineRegistration';
import Medical from './Pages/Medical/Medical';
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
import AddReview from './Pages/shared/Home/Reviews/AddReview/AddReview';
import NotFound from './Pages/shared/NotFound/NotFound';
import SocialHome from './Pages/SocialMedia/Home/SocialHome';
import Profile from './Pages/User/DashboardComponent/Profile/Profile';
import Review from './Pages/User/DashboardComponent/Review/Review';
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
            {/* TESTING */}
            <Route
              element={
                <PrivateRoute allowedRoles={[Roles.User, Roles.Admin]} />
              }
            >
              <Route path="allUsers" element={<AllUsers />} />
            </Route>
            {/* notification route */}
            <Route path="notifications" element={<Notification />} />
            {/* user routes */}
            <Route path="userdashboard" element={<UserDashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="my-event-booking" element={<MyBookedEvents />} />
              <Route path="review" element={<Review />} />
              <Route path="donarpaymente" element={<DonarPaymente />} />
            </Route>
            
            {/* EDUCATION RELATED ROUTES */}
            <Route path="education" element={<Education />} />
            <Route path="registerTeacher" element={<RegisterTeacher />} />
            
            {/* education related routes */}
            <Route path="chat" element={<Chat />} />
            <Route path="join" element={<Join />} />

            {/* routes for teacher */}
            <Route path="teacher" element={<Teacher />}>
              <Route path="myblogs" element={<Myblogs />} />
              <Route path="editBlog/:id" element={<EditBlog />} />
              <Route path="myvideos" element={<Myvideos />} />
              <Route path="editVideo/:id" element={<EditVideo />} />
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
            <Route path="blogDetails/:id" element={<BlogDetails />} />

            {/* medical related routes */}
            {/* medical related routes */}
            <Route path="medicalDashboard" element={<MedicalDashboard />}>
              <Route path="vaccine" element={<VaccineRegistration />} />
              <Route path="appointment" element={<DoctorsAppointment />} />
              <Route path="regForm" element={<RegForm />} />
              <Route path="userAppointments" element={<UserAppointments />} />
              <Route path="pdf" element={<VaccineInfo />} />
            </Route>

            {/* EVENT RELATED ROUTES */}
            <Route path="events" element={<Events />}>
              <Route path="all-events" element={<AllEvents />} />
              <Route path="upcoming-events" element={<UpcomingEvents />} />
              <Route path="archived-events" element={<ArchivedEvents />} />
            </Route>
            <Route></Route>
            <Route path="eventDetails/:id" element={<EventDetails />} />

            {/* DEVELOPMENT RELATED ROUTES */}
            <Route path="development" element={<Development />} />

            {/* NEWS RELATED ROUTES */}
            <Route path="newsDetails/:id" element={<NewsDetails />} />
            <Route path="allNews" element={<AllNews />} />

            {/* DONATION RELATED ROUTES */}
            <Route path="donation" element={<Donations />} />
            <Route path="causedetails/:id" element={<CaseSingle />} />

            {/* VILLAGE MARKET RELATED ROUTES */}
            <Route path="e-market" element={<EMarket />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="productdetails/:id" element={<ProductDetails />} />
            <Route path="medicinestore" element={<MedicineShop />} />
            <Route path="marketdashboard" element={<MarketDashboard />}>
              <Route path="myorder" element={<MyOrder />} />
            </Route>

            {/* landing page of medical */}
            <Route path="medical" element={<Medical />} />
            <Route path="addAppointment" element={<AddAppointment />} />

            {/* Admin dashboard routes */}
              <Route path="admin" element={<AdminDashboard />}>
              <Route path="allusers" element={<AllUsers />} />
              <Route path="manageusers" element={<ManageAllUsers />} />
              <Route path="events" element={<Eventmanagement />} />
              <Route path="add-events" element={<AddEvents />} />
              <Route path="manageEvents" element={<ManageEvents />} />
              <Route path="market" element={<MarketManagement />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="medical" element={<AddAppointment />} />
              <Route path="addcause" element={<AddCause />} />
              <Route path="allcauses" element={<AllCauses />} />
              <Route path="updatecause/:id" element={<UpdateCause />} />
              <Route path="allpaymente" element={<ManageAllPaymente />} />
              <Route path="development" element={<DevelopmentDashboard />} />
              <Route path="development" element={<DevelopmentManage />} />
              <Route path="manageDevelopmet" element={<DevelopmentManage />} />
              <Route path="addDevelopment" element={<AddDevelopment />} />
              <Route path="market" element={<MarketManagement />} />
              <Route path="add-events" element={<AddEvents />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="newsDashboard" element={<NewsDashboard />} />
              <Route path="addNews" element={<AddNews />} />
              <Route path="manageNews" element={<ManageNews />} />
            </Route>

            {/* Social Media Routes */}
            <Route path="social" element={<SocialHome />} />

            {/* NOT FOUND ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
