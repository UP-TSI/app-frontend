import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Importe o componente de login da pasta pages
import Password from './pages/Password';
import Verification from './pages/Verification';
import Register from './pages/Register'; // Corrigido para 'Register'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/password" element={<Password />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/register" element={<Register />} /> {/* Corrigido para 'register' minúsculo */}
    </Routes>
  );
};

export default App;
