
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
   if(age>13){
     alert("Good to Enter");
   }else{
     alert("Come back when get older")
   }
 }

//  userAge();

 //  ***Excercise 4(Temp to Fahrenheit conversion) ****///

 const celsiusToFahrenheit =(celsius) =>{

  let tempInCelsius= celsius;
  let tempInFahrenheit= tempInCelsius * 9/5 +32;
  console.log('Temperature in Fahrenheit is:', tempInFahrenheit);

 }

 celsiusToFahrenheit(15);
 celsiusToFahrenheit(25);

 //  ***Excercise 5 ****///

 const numberBetweenOneTen=(number) =>{
   let answerNumber= prompt('Enter a number between one and ten:', number);
   if(answerNumber > 1 && answerNumber < 10){
     alert(" You are Correct");
   }else{
     alert("You are Wrong,Please try again");
   }
 }

 numberBetweenOneTen();


