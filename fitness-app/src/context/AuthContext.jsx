import { createContext, useContext, useState } from 'react';
import demoUser from '../data/user';

const AuthContext = createContext();


function AuthProvider({ children }) {

  const [user, setUser] = useState(demoUser);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

const handleLogin = () => {
    setUser(demoUser);
    setError(null);
    setIsLoggedIn(true);
};

const handleLogout = () => {
  setUser(null);
  setIsLoggedIn(false);
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


