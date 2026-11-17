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
    sessionStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  } catch(err){
    setError(err.response?.data?.message || 'Login failed');
    setIsLoggedIn(false);
  }
};

const handleRegister = async (
  username,
  password,
  fullname,
  sex,
  birthdate,
  weight,
  height,
  activityLevel,
) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/auth/register',
      {
        username,
        password,
        fullname,
        sex,
        birthdate,
        weight,
        height,
        activityLevel,
      }
    );
    setUser(response.data);
    setIsLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", "true");
    setError(null);
  } catch (err){
    setError(err.response?.data?.message || 'Registration failed');
    setIsLoggedIn(false);
  }
};

const handleLogout = () => {
  setUser(null);
  setIsLoggedIn(false);
  sessionStorage.removeItem('isLoggedIn');
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
    handleRegister,
    handleLogout,
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



