import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
