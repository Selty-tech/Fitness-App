import {createContext, useContext, useState} from 'react';
import user from '../data/user';

const AuthContext = createContext();


function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  const savedStatus = sessionStorage.getItem('isLoggedIn');
  return savedStatus === 'true';
});

const handleLogin = () => {
  sessionStorage.setItem('isLoggedIn', 'true');
  setIsLoggedIn(true);
};

  const value = {
    user,
    isLoggedIn,
    handleLogin,
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



