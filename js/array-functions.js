
// ******* Adding item to the Arrays*****//////

let heroes = ['Batman', 'Superman', 'Wolverine', 'Spiderman', 'The Blob']

console.log(heroes[3]);
heroes.push("wonder women");

heroes.unshift("cat women");

heroes.pop();
console.log(heroes);
// console.log(heroes[1]);
// console.log(heroes[3]);
// heroes.push('item') add item to end of array
// heroes.unshift('item') add item to beginning of array
// heroes.pop() remove last item
// heroes.shift(); remove first item
// heroes.splice(index, itemsToRemove) remove an item from anywhere in the array
// heroes.splice(2,2);
let myName = 'Alex';
myName = 'Jeff';
let jeffName = 'Jeff';

// ******* Removing item from the Arrays*****//////

heroes = heroes.filter((hero) => {
  // console.log(`my hero is: ${hero}`);
  return hero !== 'Superman';
  // return 
})
let newHeroes = heroes.filter((hero) => {
  // console.log(`my hero is: ${hero}`);
  return hero !== 'Superman';
  // return 
})
console.log('my newHeroes array', newHeroes);
console.log('this my heroes after filter', heroes);
// console.log('this my newHeroes', newHeroes);
// for (let i = 0; i < heroes.length; i++){
//   console.log(heroes[i]);
// }
// console.log(heroes);

//******* */  Creating function to add new array item  ****//

let heroes = ['Batman', 'Superman', 'Wolverine', 'Spiderman', 'The Blob']
const addNewHero = (newHero, newHero2, newHero3) => {
  heroes.push(newHero, newHero2, newHero3);
  console.log(heroes);
  console.log(`show me hero 3: ${newHero3}`)
} 

//******* */  Creating function to add remove array item  ****//

const removeHero = (heroToRemove) => {
  // heroes = heroes.filter((hero) => {
  //   return hero !== heroToRemove;
  // })
  for (let i = 0; i < heroes.length; i++) {
    if(heroes[i] === heroToRemove) {
      heroes.splice(i, 1);
    }
  }
  console.log(heroes);
}
addNewHero('Raven', 'Beast Boy', 'Antman');
removeHero('Wolverine');
// addNewHero('The Flash', 'Cyborg');
// addNewHero('Cyclops', 'Jean Grey');
 
//******* */  Creating function to add new array object  ****//

let heroes = [{
  name: 'Batman',
  universe: 'DC',
  power: 'Rich'
},
{
  name: 'Superman',
  universe: 'DC',
  power: 'Alien'
},
{
  name: 'Wolverine',
  universe: 'Marvel',
  power: 'Super Healing'
},
{
  name: 'Rogue',
  universe: 'Marvel',
  power: 'Super Strength'
}];

//******* */  Creating function to add new array object  ****//

const addNewHero = (heroName, heroUniverse, heroPower) => {
//   create an object with the correct keys
  let newHero = {
    name: heroName,
    universe: heroUniverse,
    power: heroPower
  }
//   then push that object into my heroes array
  heroes.push(newHero);
  console.log(heroes);
} 

//******* */  Creating function to remove  array object  ****//

const removeHero = (universe) => {
//   use the filter method to remove a hero
  heroes = heroes.filter((hero) => {
    return hero.universe !== universe;
  })
  console.log(heroes);
//   remove hero by name
}
addNewHero('Black Panther', 'Marvel', 'Enhanced Strength');
addNewHero('Wonder Woman', 'DC', 'Strength')
removeHero('DC')