import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/shared/Home/Home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
