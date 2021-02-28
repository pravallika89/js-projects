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