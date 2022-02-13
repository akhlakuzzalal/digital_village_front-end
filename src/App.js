import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/shared/Home/Home.jsx';
import './App.css';
import Login from './pages/shared/Authentication/Login/Login.jsx';
import Register from './pages/shared/Authentication/Register/Register.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
