import { useAuth} from '../context/AuthContext';
import BMI from './BMI';
import Calories from './Calories';

function UserInfo() {
  const { user } = useAuth();
  const { fullname, weight, height, activityLevel, birthdate } = user;

  let currentMonth = new Date().getMonth();
  let currentDate = new Date().getDate();
  let birthMonth = new Date(birthdate).getMonth();
  let birthDay = new Date(birthdate).getDate();
  let currentYear = new Date().getFullYear();
  let birthYear = new Date(birthdate).getFullYear();
  let age = currentYear - birthYear;
  let activityLabel;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDate < birthDay)
  ) {
    age = age - 1;
  };

   if (activityLevel === 'lightlActive') {
      activityLabel = 'Light Active'
  } else if (activityLevel === 'moderatelyActive') {
    activityLabel = 'Moderatly Active'
  } else   {
    activityLabel = 'Very Active'
  };

 

  return (
    <>
      <p>Full Name: {fullname}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>Age: {age}</p>
      <p>Activity Level:{activityLabel}</p>
      <BMI  />
      <Calories />
    </>
  );
}

export default UserInfo;
