// Objects notes
//file cabinate for multiple pieces of values

let firstObject= new Object();
console.log(firstObject);

let person = {
  name: "Pravalika",
  hobby:"painting",
  age:30,
  isGood:true,
  favouriteFruits:['Mangoes','pineapple','watermelons'],
  'likes running':true,
  pet:{
    type:'cat',
    name:'kitten',
    age:1
  }
};

console.log(person.hobby);
console.log(person["name"]);
console.log(person["likes running"]);
console.log(person["pet"]);
//delete obj properties
delete person.hobby;

console.log('No hobby:',person);

//key in objects
console.log('pet' in person);

//loop in objects

for(let key in person){
  console.log('This key name is:',key)
  console.log('This key value is:',person[key]);
}

// alert(person.name + ' '+person.age);

//combination

let animals =[
  {
    type:"cat",
    name:"kitty",
    isEvil:true
  },
  {
    type:"dog",
    name:"bob",
    isEvil:false
  },
  {
    type:"bird",
    name:"Doug",
    isEvil:true
  }
]

// console.log(animals);
//create loop that iterates through animal array
//and console log each animal
// for (let i=0; i<animals.length;i++){
// console.log(animals[i].name);
// }

// Higher order for each method
// foreach method
animals.forEach(function(animal){
  console.log("my animal:",animal)
  console.log("my animal name is:",animal.name)
})

//.map method
//create new array
let animalTypes = animals.map( (animal) =>{
  console.log('inside the map func',animal);
  return animal.type;
})
console.log('animal map method types:',animalTypes);

//array.filter

let evilAnimals = animals.filter((animal)=>{
  //check if object.isEvil property is true
  //if it is return that animal
  return animal.isEvil ===true;
})

console.log('These are the evil animals',evilAnimals);

let evilAnimalNames= animals.filter((animal)=>{
  return animal.isEvil ===true;
}).map((evilAnimal)=>{
  return evilAnimal.name;
})

console.log('My evil animal names', evilAnimalNames);

let items = [
  { name: 'Huffy X27', price: 100, category: 'fitness' },
  { name: 'The Alchemist', price: 15, category: 'books' },
  { name: 'Snuggy', price: 10, category: 'home' },
  { name: 'Macbook Pro', price: 1500, category: 'technology' },
  { name: 'Peloton', price: 2000, category: 'fitness' },
  { name: 'iPad Pro', price: 800, category: 'technology' },
  { name: 'Ember Coffee Mug', price: 80, category: 'home' },
  { name: 'Electric Wine Bottle Opener', price: 20, category: 'home' },
];

// Loop through the items, console.log the price with a concatenated string that let's the user know the total price
// - Create a new array using the map method, that returns all the names of each item
// - Create a new array using the filter method that returns all the items that are less than 100
// - Using the find method loop through the array and return the laptop item setting it to a variable
// - Chaining the filter and map method together, loop through the items, filter by items that are more than 100, then using the map method, create a new array of the names of those items
console.log(items);
items.forEach(function(item){
  // console.log("my name:",item)
  console.log("total price of the:" ,item.name  +  ' is  ' + item.price);
})

let itemNames = items.map( (names) =>{
  console.log('inside the map func',names);
  return names.name;
})

console.log(itemNames);

let itemsPrice = items.filter((cost)=>{
  //check if object.isEvil property is true
  //if it is return that animal
  return cost.price < 100;
})

console.log(itemsPrice);

let itemsGreaterThanHundres= items.filter((cost)=>{
  return cost.price > 100;
}).map((cost)=>{
  return cost.name ,cost.price;
})

console.log(itemsGreaterThanHundres);


var personnel = [
  {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
  },
  {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
  },
  {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
  },
  {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
  },
  {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
  },
];

const personnelIsForceUser = personnel.find((person) =>{
  // debugger;
  // console.log(person);
  return person.isForceUser === true;
})

console.log(personnelIsForceUser);