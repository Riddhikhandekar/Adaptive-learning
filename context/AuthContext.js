// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      username,
      password,
    });
    setUser(response.data.user);
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
  };

  const register = async (username, email, password) => {
    const response = await axios.post('http://127.0.0.1:8000/api/register/', {
      username,
      email,
      password,
    });
    setUser(response.data.user);
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
  }
  ;

  const logout = () => {
    setUser(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/user/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (err) {
          console.error(err);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
