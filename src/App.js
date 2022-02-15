import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/shared/Home/Home';
import TeacherDashboard from './Pages/Education/Teacher/TeacherDashboard.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<TeacherDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
