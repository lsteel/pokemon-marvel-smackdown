// FILE: MAIN.js | PROJECT NAME: Pokemon/Marvel Smackdown

// Start Custom Scripts

window.onload = function() {

  project.init();

};

var project = {};

// $(function(){
//   $.ajaxSetup({
//     beforeSend: function(xhr) {
//       xhr.setRequestHeader('Cache-Control', null);
//     }
//   });
// });

project.init = function(){

  //pokemon query
  //http://pokeapi.co/api/v2/pokemon?limit=151
  //Sprite:
  //http://pokeapi.co/media/sprites/pokemon/1.png <-- Bulbasaur is #1

  //Marvel
  //http://gateway.marvel.com:80/v1/public/characters?apikey=d6af5b05ba9896e4c91f6a2881c8bbcc
  //public
  //d6af5b05ba9896e4c91f6a2881c8bbcc
  //private
  //135b2c0293c32403940411ac4949325c14385b2a
  //images
  //url + standard_fantastic + .jpg (extension)

  var ref = new Firebase('https://blinding-heat-3803.firebaseio.com/pokemon');

  var pokemonData;
  var marvelData;

  $.ajax({
    method: "GET",
    url: "http://gateway.marvel.com:80/v1/public/characters?apikey=d6af5b05ba9896e4c91f6a2881c8bbcc"
  }).done(function(data) {
    console.log(data);
    marvelData = data;
  });

  $.ajax({
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon?limit=151"
  }).done(function(data) {
    console.log(data);
    pokemonData = data;
  });


  //ERIN, DO YOUR CODE AFTER THIS LINE








  //JARED, DO YOUR CODE AFTER THIS LINE




};
