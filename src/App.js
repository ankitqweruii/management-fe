import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
