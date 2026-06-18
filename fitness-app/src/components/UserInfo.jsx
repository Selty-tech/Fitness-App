import { useAuth} from '../context/AuthContext';
import BMI from './BMI';
import Calories from './Calories';

function UserInfo() {
  const { user: { fullname, weight, height, activityLevel} , age  } = useAuth();

  let activityLabel;

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
