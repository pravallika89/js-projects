//Guess the number

const guessNumberBetweenOneTen=() =>{
  let correctAnswer = 9
   
  //  userNumber ==  correctAnswer ? alert("You are correct") : alert("Please try again");
   for (let i=0; i<=2;i++){
    let userNumber= prompt('Enter a number between one and ten:' );
    // debugger;
    //worker function
    let verified=verifyNumber(userNumber);
    if (verified){
      alert("That is not a number");
    }
     else if (userNumber ==  correctAnswer){
      alert("You are correct");
      break;
    }else{ alert("Please try again")}
   }
    if (i===2) {
      alert("You are out of chances,you lose!")
    }
 }

 const verifyNumber =(userInput) =>{
  return isNaN(userInput);
 }
