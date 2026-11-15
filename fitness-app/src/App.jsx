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
    <aside style={{ padding: '0.75rem 1rem', background: '#f1f5f9', borderRadius: '0.75rem', marginBottom: '1rem' }}>
      Demo preview — this profile uses fictional sample data.
    </aside>
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
