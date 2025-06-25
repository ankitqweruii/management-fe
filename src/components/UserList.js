import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/users')
      .then(res => setUsers(res.data))
      .catch(() => {
        alert('Session expired. Login again.');
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [navigate]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
