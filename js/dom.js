// console.log(document);
// //selectors
// //getElementby ID

// let mainHeading = document.getElementById('main-heading');console.log(mainHeading);
// //getElementby class
// let rowClasses= document.getElementsByClassName('row')
// console.log(rowClasses);

// //getElementby tagname

// let divTags= document.getElementsByTagName('div');
// console.log(divTags);

// //queryselector

// let divContainer= document.querySelector('.container');
// console.log(divContainer);

// let mainIdHeading= document.querySelector('#main-heading');
// console.log(mainHeading);
// let spanTag= document.querySelector('span');
// console.log(spanTag);

// //queryselectorall

// let allDivTags = document.querySelectorAll('div')

// let paragraph=document.querySelector('#title');
//textContent
// paragraph.textContent="Replacing content from html doc";
// let divTesting=document.getElementById('testing');
// let mySentence="String replaced in strong element"
// divTesting.innerHTML= `<strong>${mySentence}</strong>`;
//innerText
// divTesting.innerText='My innerText';
// let divTextNode=document.querySelector('#textNode');
// let textNode=document.createTextNode('This will be a text node.Add me to the doc');

// console.log(textNode);
// divTextNode.appendChild(textNode);

let myList=document.querySelector('#my-list');
let listItem=document.createElement('li');
// listItem.textContent='This is my first list item';
let firstText=document.createTextNode('This is my first list item');

let secondListItem=document.createElement('li');
secondListItem.textContent='This is my first list item';
// let firstText=document.createTextNode('This is my first list item');

