import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

function Register() {
  const { handleRegister, error } = useAuth();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [fullnameInput, setFullnameInput] = useState('');
  const [sexInput, setSexInput] = useState('');
  const [birthdateInput, setBirthdateInput] = useState('');
  const [weightInput, setWeightInput] = useState('');
  const [heightInput, setHeightInput] = useState('');
  const [activityLevelInput, setActivityLevelInput] = useState('');

  const submitRegister = (event) => {
    event.preventDefault();
    handleRegister(
      usernameInput,
      passwordInput,
      fullnameInput,
      sexInput,
      birthdateInput,
      weightInput,
      heightInput,
      activityLevelInput,
    );
  };
  return (
   <form onSubmit={submitRegister} >
      <input
        type="text"
        placeholder="Username"
        value={usernameInput}
        onChange={(event) => setUsernameInput(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={passwordInput}
        onChange={(event) => setPasswordInput(event.target.value)}
      />

      <input
        type="text"
        placeholder="Fullname"
        value={fullnameInput}
        onChange={(event) => setFullnameInput(event.target.value)}
      />
      <input
        type="text"
        placeholder="Sex"
        value={sexInput}
        onChange={(event) => setSexInput(event.target.value)}
      />

      <input
        type="date"
        placeholder="Birthdate"
        value={birthdateInput}
        onChange={(event) => setBirthdateInput(event.target.value)}
      />

      <input
        type="number"
        placeholder="Weight"
        value={weightInput}
        onChange={(event) => setWeightInput(event.target.value)}
      />

      <input
        type="number"
        placeholder="Height"
        value={heightInput}
        onChange={(event) => setHeightInput(event.target.value)}
      />

      <input
        type="text"
        placeholder="Activitylevel"
        value={activityLevelInput}
        onChange={(event) => setActivityLevelInput(event.target.value)}
      />

      
        <button type="submit">Register</button>
        {error&& <p>{error}</p>} 
      </form>
  );
};

export default Register;

