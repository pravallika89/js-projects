
//  ***Excercise 1 ****///
// for(let i=0; i<=100;i++){
//   if (i%2 !== 0){
//     console.log(i);
//   }
// };
 //  ***Excercise 2 ****///
const fullName= (firstName,lastName) => {
 console.log(" Full name is:", firstName + " "+  lastName);
}

// fullName('Pravalika','Ammineni');

 //  ***Excercise 3 ****///

 const userAge= () => {
  //  debugger;
   let age= prompt('User age:',);
   if(age>=13){
     alert("Good to Enter");
   }else{
     alert("Come back when get older")
   }
 }

//  const userAge= () => {
//   //  debugger;
//    let age= prompt('User age:',);
//    switch(age){
//       case age is null:
//       alert("Please enter your age");
//       break;
//       case age >= 13:
//       alert("Good to enter");
//       break;
//       default:
//         alert("Come back when get older");
//    }
//  }
11
//  userAge();

 //  ***Excercise 4(Temp to Fahrenheit conversion) ****///

//  const celsiusToFahrenheit =(celsius) =>{

//   let tempInCelsius= celsius;
//   let tempInFahrenheit= tempInCelsius * 1.8 +32;
//   console.log('Temperature in Fahrenheit is:', tempInFahrenheit);

//  }

//  celsiusToFahrenheit(15);
//  celsiusToFahrenheit(25);

 // For the celsiusToFahrenheit function, now add a button to your html page that prompts a user to enter a number
// receive that number convert it to fahrenheit and alert the user the converted value
// clean up the message so that it is user friendly

const celsiusToFahrenheit =(celsius) =>{

  let tempInCelsius1= prompt('Please enter a number',celsius);
  let tempInFahrenheit1= tempInCelsius1 * 1.8 +32;
  alert('Temperature in Fahrenheit is:'+ tempInFahrenheit1);

 }

 //  ***Excercise 4(Temp to Celsius conversion) ****///

 const fahrenheitToCelsius =(fahrenheit) =>{

  let tempInFahrenheit= prompt('Please enter a number',fahrenheit);
  let tempInCelsius= (tempInFahrenheit -32) * 5/9;
  alert('Temperature in Fahrenheit is:'+ tempInCelsius);

 }

 //  ***Excercise 5 ****///

 const guessNumberBetweenOneTen=() =>{
  let correctAnswer = 9
   
  //  userNumber ==  correctAnswer ? alert("You are correct") : alert("Please try again");
   for (let i=0; i<=2;i++){
    let userNumber= prompt('Enter a number between one and ten:' );
    if (userNumber ==  correctAnswer){
      alert("You are correct");
      break;
    }else{ alert("Please try again")}
   }
    if (i===2) {
      alert("You are out of chances,you lose!")
    }
 }

 guessNumberBetweenOneTen();

