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
      'http://localhost:3000/auth/login',
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

  let age = null;

  if (user) {
    const today = new Date();
    const birthDate = new Date(user.birthdate);

    age = today.getFullYear() - birthDate.getFullYear();
    
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 || 
       (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age = age -1;
    }
  }



  const value = {
    isLoggedIn,
    handleLogin,
    user,
    error,
    age,
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



