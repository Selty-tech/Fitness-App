
import { useAuth} from './context/AuthContext';
import {useState } from 'react';
import './App.css'
import Header from './components/Header';
import UserInfo from './components/UserInfo';

import Login from './components/Login'
import Logout from './components/Logout';
import Register from './components/Register'


function App() {

  const { isLoggedIn} = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
    <Header />
    {isLoggedIn ?(
    <>
      <UserInfo />
      <Logout />
    </>
    ) : (
    <>
    {showRegister ? 
    <Register /> :
    <Login />}
    <button onClick={() => setShowRegister(!showRegister)}>
     {showRegister ? "Back to Login" : "Create an account"}
    </button> 

    </>
    )}
  </div>
)};

export default App;