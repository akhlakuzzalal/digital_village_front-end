import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Education from './Pages/Education/Education';
import MainNotification from './Pages/Notification/MainNotification/MainNotification';
import Home from './Pages/shared/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/notification" element={<MainNotification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
