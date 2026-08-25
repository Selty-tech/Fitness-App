
import { useAuth} from './context/AuthContext';
import './App.css'
import Header from './components/Header';
import UserInfo from './components/UserInfo';

import Login from './components/Login'
import Logout from './components/Logout';


function App() {

  const { isLoggedIn} = useAuth();

  return (
    <div>
    <Header />
    {isLoggedIn ?(
    <>
      <UserInfo />
      <Logout />
    </>
    ) : (
    <Login />
    )}
  </div>
)};

export default App;