import { useAuth } from "../context/AuthContext";


function Logout() {
  const { handleLogout } = useAuth();

  return(
    <button onClick={ handleLogout }>Logout</button>
  );
};

export default Logout;