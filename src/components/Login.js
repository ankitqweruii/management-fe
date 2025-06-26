import React, { useState } from 'react';
import API from '../api';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Make sure to import the CSS file

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/users');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Don't have an account?{' '}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
