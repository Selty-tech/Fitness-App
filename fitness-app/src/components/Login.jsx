import { useAuth } from '../context/AuthContext'
import { useState } from 'react';


function Login() {
  const { user, handleLogin } = useAuth();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const buttonClickHandler = () => {
    if (usernameInput === user.username && passwordInput === user.password) {
      handleLogin();
    } else {
      setErrorMessage(' invalid username or password');
    }
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
      {errorMessage ? <p>{errorMessage}</p> : null}
    </>
  );
}

export default Login;
