import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/shared/Home/Home.jsx';
import './App.css';
import Register from './pages/shared/Authentication/Register/Register.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
