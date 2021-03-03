console.log(document);
//selectors
//getElementby ID

let mainHeading = document.getElementById('main-heading');console.log(mainHeading);
//getElementby class
let rowClasses= document.getElementsByClassName('row')
console.log(rowClasses);

//getElementby tagname

let divTags= document.getElementsByTagName('div');
console.log(divTags);

//queryselector

let divContainer= document.querySelector('.container');
console.log(divContainer);

let mainIdHeading= document.querySelector('#main-heading');
console.log(mainHeading);
let spanTag= document.querySelector('span');
console.log(spanTag);

//queryselectorall

let allDivTags = document.querySelectorAll('div')