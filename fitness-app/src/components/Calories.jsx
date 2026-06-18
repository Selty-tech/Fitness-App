import { useAuth } from '../context/AuthContext';

function Calories() {

  const { user, age } = useAuth();
  const { weight, height, sex, activityLevel } = user;
  
  let BMR;
  let activityMultiplier;
  
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