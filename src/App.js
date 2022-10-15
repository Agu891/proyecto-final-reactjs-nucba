import './App.css';
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import Contacto from './Pages/contacto/Contacto';
import CheckoutPage from './Pages/CheckoutPaymentPage/CheckoutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSection } from './hooks/useSection';

function App() {
  const secciones = useSection();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home secciones={secciones} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
