function Calories({ weight, height, age, sex, activityLevel }) {
  
  let BMR;
  let activityMultiplier;

  
  
  const BMRForMale = (10 * weight) + (6.25 * height) - 
  (5 * age) + 5;
  
  const BMRForFemale = (10 * weight) + (6.25 * height) - 
  (5 * age) - 161;
  
  
  
  
  
  if (activityLevel === 'sedentary') {
    activityMultiplier = 1.2
  } else if (activityLevel === 'lightlActive') {
    activityMultiplier = 1.375
  } else if (activityLevel === 'moderatelyActive') {
    activityMultiplier = 1.55
  } else if (activityLevel === 'veryActive') {
    activityMultiplier = 1.725
  } else {
    activityMultiplier = 1.9 
  }
  
  
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