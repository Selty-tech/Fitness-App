import { useAuth } from '../context/AuthContext'
import { useState } from 'react';


function Login() {
  const { handleLogin, error } = useAuth();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');


  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const buttonClickHandler = () => {
    handleLogin(usernameInput, passwordInput)
  };
  return (
    <>
      <input
        type="text"
        value={usernameInput}
        placeholder="Username"
        onChange={handleUsernameChange}
      />

      <input
        type="password"
        value={passwordInput}
        placeholder="Password"
        onChange={handlePasswordChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') buttonClickHandler();
        }}
      />

      <button onClick={buttonClickHandler}>Login</button>
      {error && <p>{error}</p>}
    </>
  );
}

export default Login;
