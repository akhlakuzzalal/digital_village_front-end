import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Components/ChattingApp/Chat/Chat';
import Join from './Components/ChattingApp/Join/Join';
import ScrollToTop from './Components/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import {
  default as AdminDashboard,
  default as DevelopmentDashboard,
} from './Pages/Admin/AdminDashboard';
import AllUsers from './Pages/Admin/AllUsers/AllUsers';
import AddDevelopment from './Pages/Admin/Development/AddDevelopment/AddDevelopment';
import DevelopmentManage from './Pages/Admin/Development/DevelopmentManage/DevelopmentManage';
import AddCause from './Pages/Admin/Donation/AddCause';
import AllApply from './Pages/Admin/Donation/AllApply';
import AllCauses from './Pages/Admin/Donation/AllCauses';
import CreateDonationCause from './Pages/Admin/Donation/CreateDonationCause';
import DonarPaymente from './Pages/Admin/Donation/DonarPaymente';
import HelpRequestApply from './Pages/Admin/Donation/HelpRequestApply';
import ManageAllDonars from './Pages/Admin/Donation/ManageAllDonars';
import UpdateCause from './Pages/Admin/Donation/UpdateCause';
import Eventmanagement from './Pages/Admin/EventManagement/Eventmanagement';
import MarketManagement from './Pages/Admin/Market/MarketManagement';
import AddNews from './Pages/Admin/News/AddNews/AddNews';
import ManageNews from './Pages/Admin/News/ManageNews/ManageNews';
import AllNews from './Pages/AllNews/AllNews';
import Development from './Pages/Development/Development';
import Donations from './Pages/Donations/Donations';
import SingleCauseDetail from './Pages/Donations/SingleCauseDetail/SingleCauseDetail';
import BlogDetails from './Pages/Education/BlogDetails/BlogDetails';
import DetailVideo from './Pages/Education/DetailVideo/DetailVideo';
import Education from './Pages/Education/Education';
import AllBlogs from './Pages/Education/Student/AllBlogs/AllBlogs';
import AllVideos from './Pages/Education/Student/AllVideos/AllVideos';
import FavouriteBlogs from './Pages/Education/Student/FavouriteBlogs/FavouriteBlogs';
import FavouriteVideos from './Pages/Education/Student/FavouriteVideos/FavouriteVideos';
import Student from './Pages/Education/Student/Student';
import StudentAnalytics from './Pages/Education/Student/StudentAnalytics/StudentAnalytics';
import StudentHome from './Pages/Education/Student/StudentHome/StudentHome';
import EditBlog from './Pages/Education/Teacher/Myblogs/EditBlog/EditBlog';
import Myblogs from './Pages/Education/Teacher/Myblogs/Myblogs';
import EditVideo from './Pages/Education/Teacher/Myvideos/EditVideo/EditVideo';
import Myvideos from './Pages/Education/Teacher/Myvideos/Myvideos';
import PublishBlog from './Pages/Education/Teacher/PublishBlog/PublishBlog';
import PublishVideo from './Pages/Education/Teacher/PublishVideo/PublishVideo';
import RegisterTeacher from './Pages/Education/Teacher/RegisterTeacher';
import Teacher from './Pages/Education/Teacher/Teacher';
import TeacherAnalytics from './Pages/Education/Teacher/TeacherAnalytics/TeacherAnalytics';
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
import AddAppointment from './Pages/Medical/DoctorsAppointment/AddAppointment/AddAppointment';
import DoctorsAppointment from './Pages/Medical/DoctorsAppointment/DoctorsAppointment';
import UserAppointments from './Pages/Medical/DoctorsAppointment/UserAppointments/UserAppointments';
import MedicalDashboard from './Pages/Medical/MedicalDashboard';
import FrequentlyAsked from './Pages/Medical/VaccineRegistration/FrequentlyAsked/FrequentlyAsked';
import Medical from './Pages/Medical/VaccineRegistration/Medical';
import RegForm from './Pages/Medical/VaccineRegistration/RegForm/RegForm';
import VaccineInfo from './Pages/Medical/VaccineRegistration/RegistrationPdf/VaccineInfo';
import Status from './Pages/Medical/VaccineRegistration/Status/Status';
import StatusCheck from './Pages/Medical/VaccineRegistration/Status/StatusCheck';
import VaccineOptions from './Pages/Medical/VaccineRegistration/VaccineOptions/VaccineOptions';
import VaccineRegistration from './Pages/Medical/VaccineRegistration/VaccineRegistration';
import Notification from './Pages/Notification/Notification';
import About from './Pages/shared/About/About';
import Login from './Pages/shared/Authentication/Login/Login';
import Register from './Pages/shared/Authentication/Register/Register';
import Contact from './Pages/shared/Contact/Contact';
import Footer from './Pages/shared/Home/Footer/Footer';
import Header from './Pages/shared/Home/Header/Header';
import Home from './Pages/shared/Home/Home';
import EditNews from './Pages/shared/Home/News/EditNews/EditNews';
import NewsDetails from './Pages/shared/Home/News/NewsDetails/NewsDetails';
import AddReview from './Pages/shared/Home/Reviews/AddReview/AddReview';
import NotFound from './Pages/shared/NotFound/NotFound';
import BoardHome from './Pages/SocialMedia/Connections/BoardComponent/BoardHome.jsx';
import ConnectionBoard from './Pages/SocialMedia/Connections/ConnectionBoard';
import SocialHome from './Pages/SocialMedia/Home/SocialHome';
import EditReview from './Pages/User/DashboardComponent/EditReview/EditReview';
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
              <Route path="requestapply" element={<HelpRequestApply />} />
              <Route path="editReview/:id" element={<EditReview />} />
              <Route
                path="createDonationCause"
                element={<CreateDonationCause />}
              />
            </Route>

            {/* EDUCATION RELATED ROUTES */}
            <Route path="education" element={<Education />} />
            <Route path="registerTeacher" element={<RegisterTeacher />} />

            {/* social media related routes */}
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
              <Route path="analytics" element={<TeacherAnalytics />} />
            </Route>
            {/* routes for student */}
            <Route path="student" element={<Student />}>
              <Route path="home" element={<StudentHome />} />
              <Route path="allBlogs" element={<AllBlogs />} />
              <Route path="allVideos" element={<AllVideos />} />
              <Route path="favouriteBlogs" element={<FavouriteBlogs />} />
              <Route path="favouriteVideos" element={<FavouriteVideos />} />
              <Route path="analytics" element={<StudentAnalytics />} />
            </Route>
            <Route path="detailvideo/:id" element={<DetailVideo />} />
            <Route path="blogDetails/:id" element={<BlogDetails />} />

            {/* medical related routes */}
            <Route path="medicalDashboard" element={<MedicalDashboard />}>
              <Route path="medical" element={<Medical />} />
              <Route path="vaccine" element={<VaccineRegistration />} />
              <Route path="options" element={<VaccineOptions />} />
              <Route path="status" element={<Status />} />
              <Route path="faq" element={<FrequentlyAsked />} />
              <Route path="regForm" element={<RegForm />} />
              <Route path="pdf" element={<VaccineInfo />} />
              <Route path="appointment" element={<DoctorsAppointment />} />
              <Route path="userAppointments" element={<UserAppointments />} />
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
            <Route path="causedetails/:id" element={<SingleCauseDetail />} />

            {/* VILLAGE MARKET RELATED ROUTES */}
            <Route path="e-market" element={<EMarket />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="productdetails/:id" element={<ProductDetails />} />
            <Route path="medicinestore" element={<MedicineShop />} />
            <Route path="marketdashboard" element={<MarketDashboard />}>
              <Route path="myorder" element={<MyOrder />} />
            </Route>

            {/* Admin dashboard routes */}
            <Route path="admin" element={<AdminDashboard />}>
              <Route path="allusers" element={<AllUsers />} />
              <Route path="events" element={<Eventmanagement />} />
              <Route path="add-events" element={<AddEvents />} />
              <Route path="manageEvents" element={<ManageEvents />} />
              <Route path="market" element={<MarketManagement />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="addcause" element={<AddCause />} />
              <Route path="allcauses" element={<AllCauses />} />
              <Route path="updatecause/:id" element={<UpdateCause />} />
              <Route path="manageAllDonars" element={<ManageAllDonars />} />
              <Route path="development" element={<DevelopmentDashboard />} />
              <Route path="development" element={<DevelopmentManage />} />
              <Route path="manageDevelopmet" element={<DevelopmentManage />} />
              <Route path="editDevelopment/:id" element={<EditBlog />} />
              <Route path="addDevelopment" element={<AddDevelopment />} />
              <Route path="market" element={<MarketManagement />} />
              <Route path="add-events" element={<AddEvents />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="manageNews" element={<ManageNews />} />
              <Route path="addNews" element={<AddNews />} />
              <Route path="editNews/:id" element={<EditNews />} />
              <Route path="addAppointment" element={<AddAppointment />} />
              <Route path="status" element={<StatusCheck />} />
              <Route path="requestapply" element={<AllApply />} />
            </Route>

            {/* Social Media Routes */}
            <Route path="social" element={<SocialHome />} />
            <Route path="connection" element={<ConnectionBoard />}>
              <Route path="home" element={<BoardHome />} />
            </Route>

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
