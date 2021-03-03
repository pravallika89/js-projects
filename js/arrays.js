// **** Strings*****///
//string properties and methods

 let firstString='Hello world';
 firstString ='Hello Universe';
 let wordsString = 'Pravalika, Prasad, Sahasra';
 console.log(firstString);
 console.log(firstString.length);
 console.log(firstString.indexOf('o'));
 console.log(firstString.trim());
 console.log(firstString.toUpperCase());
 console.log(firstString.toLowerCase());
 console.log(firstString.substring(6,15));
 console.log(firstString.split(' '));
 console.log(wordsString.split(', '));
 console.log(firstString.toUpperCase().split(' '));
 console.log(wordsString.toUpperCase().split(' '));

 //Arrays
 //collection of values

 let firstArray = new Array(1,2,3,4);
 let secondArray = new Array('Apples','Mangoes','Pineapple');

 console.log(firstArray);
 console.log(secondArray);
 secondArray[2];
 secondArray.push('Banana');
 console.log(secondArray);
 secondArray.pop();
 console.log(secondArray);
 secondArray.unshift('jack fruit');
 console.log(secondArray);
//  looping through arrays

for (let i=0; i<=3;i++){
  console.log(secondArray[i]);
}
 
let favoriteMovies = new Array('Interstellar','Martian','Avtaar','Twilight','Wonderwoman');
console.log(favoriteMovies);
for (let i=0; i<favoriteMovies.length;i++){
  console.log(favoriteMovies[i]);
  console.log(favoriteMovies[i].toUpperCase());
}

let mixedArray= ['string','false', 11];
console.log(mixedArray);

