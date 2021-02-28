// === Create a simple calculator app ===
// 1. On your web page, add a button that triggers a confirm
// asking the user if they would like to calculate two numbers
// 2. if they confirm it should then trigger a prompt
// that asks if they would like to 'add', 'subtract', 'multiply' or 'divide' the two values
// then trigger prompts that asks for the number values
// And finally an alert that lets the user know the result of their values
// Create a js-challenge-three.html and js-challenge-three.js file and submit to github when you are done
// Aside: Create separate functions to run different tasks. And feel free to make your code as dynamic and efficient as you see fit

const calculateNumbers =() =>{
   let userConfirmation=confirm("Would you like to calculate two numbers?");
   if(userConfirmation){
     debugger;
    let whatMathToDo=prompt(" what would you like to do 'add','substract', 'multiply'or'divide'");
    
    let numberOne=parseInt(prompt("Enter first number"));
    let numberTwo=parseInt(prompt("Enter second number"));
// debugger;
    switch(whatMathToDo){
      
      case 'add':
        let sum= numberOne + numberTwo;
        alert('Sum of two numbers is:' + sum);
      break;

      case 'substract':
        let difference=numberOne-numberTwo;
        alert('Difference of two numbers is:' + difference);
      break;

      case 'multiply':
        let multiply= numberOne*numberTwo;
      alert('Multiplication of two numbers is:' + multiply);
      break;

      case 'divide':
        let division=numberOne/numberTwo;
        alert('Division of two numbers is:' + division);
        break;
    }
}
}

const calculatorApp = () => {
  let userConfirm = confirm('Would you like to calculate two numbers?');
  //   console.log(userConfirm);

  if (userConfirm) {
    // console.log('do this');
    let userValue1 = parseInt(prompt('Please enter your first value'));
    let userValue2 = parseInt(prompt('Please enter your second value'));
    // console.log(userValue1, userValue2);
    let arithmetic = prompt(
      "Would you like to 'add', 'subtract', 'multiply' or 'divide' your values?"
    );
    // console.log('my arithmetic', arithmetic);
    let answer = calculateValues(userValue1, userValue2, arithmetic);
    alert('Your answer is: ' + answer);
  }
};

const calculateValues = (value1, value2, arithmetic) => {
  //   debugger;
  let result = 0;
  switch (arithmetic) {
    case 'add':
      //   add up the values
      result = value1 + value2;
      break;
    case 'subtract':
      //   subtract the values
      result = value1 - value2;
      break;
    case 'multiply':
      //   multiply the values
      result = value1 * value2;
      break;
    case 'divide':
      //   divide the values
      result = value1 / value2;
      break;
  }
  return result;
};



