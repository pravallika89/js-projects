//  ****JS PART TWO OPERATORS ******//

// Comparision operators
// let value1=35;
// let value2=100;
// let value3=500;

// console.log('Does value 1 equal to value 2', value1 === value2);
// console.log('Does value 1 greater than value 2', value1 >= value2);

// console.log( value1 > value2 && value1 !== value2);
// console.log( value1 < value2 || value1 !== value2);

// combining logical && or ||

// console.log( (value1 > value2 || value1 !== value2) && value2 > value1);

// Conditional statements

// let num1=100;
// let num2=445;
//  if (num1>num2){
//    alert("you are correct");
//  }else{
// alert("Sorry it is not greater");
//  }

//  if (num1>num2){
//   alert("Yow are boss");
// }else if(num1===num2){
// alert("These match");
// }else{
//   alert("you lost");
// }

// loops

// for(let i=0;i<10;i++){
// console.log(i);
// }

// for(let i=0;i<101;i+=10){
//  console.log(i);
//   }

//   for(let i=0;i<=100;i++){
//     if(i===50){
//       console.log(i);
//       break;
//     }else{
//       console.log(i);
//     }
//      }
let i= 0;
// while(i<10){
//   console.log(i);
//   i++;
// }
// DO WHILE
// let j=0;
// do{
//   console.log(j);
//   j++;
// }while(j<10);

// Teranary


// if condition=true ? (run this code):(run this code)
// codition ? statement:statement 2

// let age=20;

// age > 21 ? alert("have fun,be safe") : alert("sorry come back when you get older");

// *****Switch statement *********?//

// let animal="cow";

// switch(animal){
//   case 'dog':
//     // mycode
//     alert("it is a dog");
//     break;
//     case 'cat':
//     alert("it is a cat");
//     break;
//     case 'monkey':
//     alert("it is a monkey");
//     break;
//     case 'cow':
//     alert("it is a cow");
//     break;
//     default:
//       alert("doesnot match")

// }


// *****functions*****//

function firstFunction(){
  console.log("this is my first function");
}

// firstFunction();

function countDown(){
  for(let i =10; i>=0; i--){
    console.log('count down for loop',i);
  }
}

// countDown();

//**** */ Arrow function*****//
let num1=1;
  let num2=2;

const doMath = () => { 
  let num1=10;
  let num2=24;

  console.log("my sum of nums:", num1+num2);
}

// doMath();

const startMath= ()=> {
  // let firstNum=20;
  // let secondNum=30;
  sumNumbers(20,30);
  
}
const sumNumbers=(number1,number2) =>{
  console.log(" sum of nums:", number1+number2);
}
startMath();


