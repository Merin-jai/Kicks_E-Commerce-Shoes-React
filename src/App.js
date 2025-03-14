import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import Listing from './Pages/Listing';
import Product from './Pages/Product';
import Cart from './Pages/CartPage';
import Header from './Pages/ChekoutPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path="/checkout" element={<Header/>}/>

      </Routes>
    </Router>
  );
}

export default App;
