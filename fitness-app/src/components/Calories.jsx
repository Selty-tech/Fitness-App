import { useAuth } from '../context/AuthContext';

function Calories() {

  const { user } = useAuth();
  const { weight, height, birthdate, sex, activityLevel } = user;
  
  let BMR;
  let activityMultiplier;

  let currentMonth = new Date().getMonth();
  let currentDate = new Date().getDate();
  let birthMonth = new Date(birthdate).getMonth();
  let birthDay = new Date(birthdate).getDate();
  let currentYear = new Date().getFullYear();
  let birthYear = new Date(birthdate).getFullYear();

  let age = currentYear - birthYear;


  
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDate < birthDay)
  ) {
    age = age - 1;
  };

  

  
  
  const BMRForMale = (10 * weight) + (6.25 * height) - 
  (5 * age) + 5;
  
  const BMRForFemale = (10 * weight) + (6.25 * height) - 
  (5 * age) - 161;
  
  
  
  

  switch(activityLevel){
    case 'sedentary':
      activityMultiplier = 1.2;
      break;
    case 'lightlyActive':
      activityMultiplier = 1.375;
      break;
    case 'moderatelyActive':
      activityMultiplier = 1.55;
      break;
    case  'veryActive':
      activityMultiplier = 1.725;
      break;
    default:
      activityMultiplier = 1.9   
      break;
  };


  
  if (sex === 'male') {
    BMR = BMRForMale
  } else {
    BMR = BMRForFemale
  }
 
  const dailyCalories = BMR * activityMultiplier;
   
return (
  <>
  
  <p>BMR: {BMR.toFixed(2)}</p>
  <p>Daily Calories: {dailyCalories.toFixed(2)}</p>
  </>
) 


}


export default Calories;