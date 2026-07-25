import {createContext, useContext, useState,} from 'react';
import axios from 'axios';

const AuthContext = createContext();


function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  const savedStatus = sessionStorage.getItem('isLoggedIn');
  return savedStatus === 'true';
});

const handleLogin = async (username, password) => {
  try{
    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      {
        username,
        password,
      }
    );
    setUser(response.data);
    setError(null);
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  } catch(err){
    setError(err.response?.data?.message || 'Login failed');
    setIsLoggedIn(false);
  }
};



  const value = {
    isLoggedIn,
    handleLogin,
    user,
    error,
  };


  

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
};


function useAuth() {
  return useContext(AuthContext);
}

export {AuthProvider, useAuth};



