import { useAuth } from '../context/AuthContext';

function BMI() {
  const { user } = useAuth();
  const { weight, height } = user;

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let category;
  let color;

   if (bmi < 18.5) {
      category = "Underweigth",
      color = "Blue"
   } else if ( bmi < 25) {
      category = "Normal",
      color = "Green"
    } else if ( bmi < 30) {
      category = "Overweight",
      color = "Orange"
    }  else {
      category = "Obese",
      color = "Red"
    };

    return (
      <p style={{ color: color }}>
        BMI: {bmi.toFixed(2)} ({category})
      </p>
    )
};

export default BMI;
