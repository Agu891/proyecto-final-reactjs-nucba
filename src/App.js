import './App.css';
import React, { useEffect } from 'react';

import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import Contacto from './Pages/contacto/Contacto';
import CheckoutPage from './Pages/CheckoutPaymentPage/CheckoutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSection } from './hooks/useSection';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import * as userActions from './redux/user/user-actions';

function onAuthStateChange(cb, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapshot) => {
        cb(action({ id: snapshot.id, ...snapshot.data() }));
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const secciones = useSection();

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

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
