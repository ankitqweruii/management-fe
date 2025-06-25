import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("checking",form)
      await API.post('/register', form);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} placeholder="Username" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already registered? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;
