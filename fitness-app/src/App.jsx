
import { useAuth} from './context/AuthContext';
import './App.css'
import Header from './components/Header';
import UserInfo from './components/UserInfo';

import Login from './components/Login'


function App() {

  const { isLoggedIn} = useAuth();

  return (
    <div>
    <Header />
    {isLoggedIn ? <UserInfo /> : <Login />}

  </div>
    
    )
};

export default App;