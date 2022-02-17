import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/shared/Home/Home';
import TeacherDashboard from './Pages/Education/Teacher/TeacherDashboard.jsx';
import Donations from './Pages/Donations/Donations';
import CaseSingle from './Pages/Donations/Causes/CaseSingle';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<TeacherDashboard />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/causedetails/:id" element={<CaseSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
