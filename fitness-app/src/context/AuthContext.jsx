import {createContext, useContext, useState, useMemo} from 'react';
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
const age = useMemo(() => {
let currentMonth = new Date().getMonth();
let currentDate = new Date().getDate();
let birthMonth = new Date(user.birthdate).getMonth();
let birthDay = new Date(user.birthdate).getDate();
let currentYear = new Date().getFullYear();
let birthYear = new Date(user.birthdate).getFullYear();

let age1 = currentYear - birthYear;



if (
  currentMonth < birthMonth ||
  (currentMonth === birthMonth && currentDate < birthDay)
) {
  age1 = age1 - 1;
};
    return age1;
}, [user.birthdate])

  const value = {
    user,
    isLoggedIn,
    handleLogin,
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



