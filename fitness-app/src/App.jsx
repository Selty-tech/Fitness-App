// import { useState } from 'react';
import { useAuth} from './context/AuthContext';
import './App.css'
import Header from './components/Header';
import UserInfo from './components/UserInfo';
// import user from './data/user'
import Login from './components/Login'


function App() {

  const { isLoggedIn} = useAuth();

  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   const savedStatus = sessionStorage.getItem('isLoggedIn');
  //   return savedStatus === 'true'
  // });

  // const handleLogin = () => {
  //   sessionStorage.setItem('isLoggedIn', 'true');
  //   setIsLoggedIn(true);
  // };


 


  return (
    <div>
    <Header />
     {/* {isLoggedIn ? (
      <UserInfo user={user} />
    ):  (
      <Login onLogin={handleLogin} />
    )} */}

    {isLoggedIn ? <UserInfo /> : <Login />}

  </div>
    
    )
};

export default App;