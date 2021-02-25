 ///*****functions****////

  ///*****Basic form****////

 function showMyName(firstName,lastName){
  //  debugger;
  //  let firstName= "Pravalika";
  //  let lastName= "Ammineni";
   let fullName=firstName + ' ' + lastName;
  console.log('You are:',fullName);
 }

 showMyName("Pravalika","Ammineni");

 function multiplyTwoNumbers(firstNumber,secondNumber){
   //take the passed in parameters and multiply them
   //setting to a new variable
   let multipliedNumbers= firstNumber*secondNumber;
   console.log("The numbers are multiplies:",multipliedNumbers);
 }

 multiplyTwoNumbers(15,13);
//  Basicfunction syntax
 function basicSyntaxFunction (){};

 ////***Arrow functions ****//
 const countToTen = () => {
  for(let i=0;i<=10;i++){
    console.log(i);
  }
 };
//  countToTen();

 const countToTenFromNewStartingPoint = (startingNumber) => {
   //first check number to see if less than 10
   if(startingNumber <=10){
    for(startingNumber;startingNumber<=10;startingNumber++){
      console.log(startingNumber);
    }
   }
   else{
    alert("The number is larger than 10");
   }
   //else user to know
 
 };

 countToTenFromNewStartingPoint(5);

 const welcomeNewUser=() => {
  //Initialize variables
  //set name variables and welcome message
  let firstName= "Pravalika";
  let lastName="Ammineni";
  let welcomeMessage="Hey there ,";
  let fullMessage=welcomeMessage + firstName+ ' ' + lastName;

  alert(fullMessage);
 }

 // Add a button to your html page
 //button tied to a function
 //function alerts your user with favourite animal

 const favouriteAnimal =() => {
  let animal= "Rabbit";
  alert('favourite animal is' + animal);

 }

