function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  // calculate bmi
  let heightInMeters = height / 100;
  let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // assign state based on bmi
  let bState = "";
  let maxUnder = 18.5;
  let maxHealthy = 25.0;
  let maxOver = 30.0;
  if (bmi < maxUnder) bState = "Underweight";
  else if (bmi < maxHealthy) bState = "Healthy Weight";
  else if (bmi < maxOver) bState = "Overweight";
  else bState = "Obesity";

  // assign state based on bmi and age
  let baState = "";
  let incrementValue = 1;
  if (age < 25) {
  } else if (age < 35) {
    incrementValue *= 2;
  } else if (age < 45) {
    incrementValue *= 2;
  } else if (age < 55) {
    incrementValue *= 3;
  } else if (age < 65) {
    incrementValue *= 4;
  } else {
    incrementValue *= 5;
  }
  maxUnder = 18 + incrementValue;
  maxHealthy = 23.1 + incrementValue;
  maxOver = 28.1 + incrementValue;
  if (bmi < maxUnder) baState = "Underweight";
  else if (bmi < maxHealthy) baState = "Healthy Weight";
  else if (bmi < maxOver) baState = "Overweight";
  else baState = "Obesity";

  let alertMessage = `Your BMI is ${bmi}\nYour BMI state is ${bState}\nYour BMI based on your age is ${baState}`;
  alert(alertMessage);
}
