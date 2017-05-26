/*function () {
  console.log('Welcome!');
  console.log('Please call one of the functions listed bellow and provide the requested parameters.');
  console.log('Call artistInformation with the name and year of birth of a music author.');
  console.log('Call movieInformation with the name and year of the movie.');
};*/

var authorInformation = function (authorName, albumName, albumYear, age){
    console.log(authorName + " created an album named " + albumName + " in the year " + albumYear + " when he had " + age + " years.");
};

var movieInformation = function(movieTitle, releasedYear, movieActor, actorYear){
    console.log("The movie " + movieTitle + " was created in the year " + releasedYear + ".");

};




authorInformation("Gustavo Cerati", "Ahi Vamos", 2007, 45);

movieInformation("Saw", 2005);