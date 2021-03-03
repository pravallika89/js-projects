/*
Daily Coding Challenge: Movie List Challenge
1. Create an array of objects of your 5 favorite movies
a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)
b. Create a function that when called loops through your array and console.logs
the details for each of your movies
c. Create a function that will find a movie by it's title 
and then console.logs the details of the movie. 
The function should take a movieTitle parameter that lets you search by different titles
files to create: movie-list.html, movie-list.js
*/

let movies =[
  {title:'Apocalypse',
    year:1979,
    genre:'Drama',
    description:'A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.',
    imdbRating:8.4
  },
  {title:'bbbbb',
    year:1979,
    genre:'sef  ',
    description:'LLLLL',
    imdbRating:8.6
  },
  {title:'cccc',
    year:1979,
    genre:'   phdd',
    description:'huyrdft',
    imdbRating:9.5
  },
  {title:'dddd',
  year:1979,
  genre:'   phdd',
  description:'huyrdft',
  imdbRating:9.5
  },
  {title:'eeee',
  year:1979,
  genre:'   phdd',
  description:'huyrdft',
  imdbRating:9.5
  },

]

console.log(movies);

const eachMovie=movies.forEach(movie=>console.log(movie));

//c. Create a function that will find a movie by it's title 
//and then console.logs the details of the movie. 

// const detailsOfMovie = movies.filter((movie)=>movie.title ==="eeee");

//  Assignment  3/1/2021
function movieByItsTitle(title){

     let titleMovies=movies.find((movie) =>{ movie.title ===title }); 
    
    console.log(titleMovies);
    
  }
  movieByItsTitle('Apocalypse');

  //The function should take a movieTitle parameter that lets you search by different titles


  