import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    axios.post('http://localhost:3001/logout') // Make a POST request to the logout route
      .then((res) => {
        console.log(res.data);
        navigate('/login'); // Redirect to login page after logout
      })
      .catch((err) => {
        console.error('Error logging out:', err);
      });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
