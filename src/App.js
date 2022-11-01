import './App.css';
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import Contacto from './Pages/Contacto/Contacto';
import CheckoutPage from './Pages/CheckoutPaymentPage/CheckoutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSection } from './hooks/useSection';
import { AuthProvider } from './context/AuthContext';

function App() {
  const secciones = useSection();

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home secciones={secciones} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
