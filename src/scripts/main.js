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
  //path + standard_fantastic + .jpg (extension)

  var mainRef = new Firebase('https://blinding-heat-3803.firebaseio.com/');

  var pokemonData = {};
  var marvelData = {};
  var pokemonChar = {};
  var marvelChar = {};

  $.getJSON("http://gateway.marvel.com:80/v1/public/characters?apikey=d6af5b05ba9896e4c91f6a2881c8bbcc", function(data) {
    marvelData = data.data.results;
    getFirebaseData("marvel");
    setFirebaseData(marvelData, "marvel");
  });

  // Example marvelData:
  // {
  //   "code": 200,
  //   "status": "Ok",
  //   "copyright": "© 2016 MARVEL",
  //   "attributionText": "Data provided by Marvel. © 2016 MARVEL",
  //   "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2016 MARVEL</a>",
  //   "etag": "1e383541f7dd1756a1c2c0acd42ba94a783b461c",
  //   "data": {
  //     "offset": 0,
  //     "limit": 20,
  //     "total": 1485,
  //     "count": 20,
  //     "results": [
  //       {
  //         "id": 1011334,
  //         "name": "3-D Man",
  //         "description": "",
  //         "modified": "2014-04-29T14:18:17-0400",
  //         "thumbnail": {
  //           "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
  //           "extension": "jpg"
  //         },
  //         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
  //         "comics": {
  //           ...
  //         },
  //         "series": {
  //           ...
  //         },
  //         "stories": {
  //           ...
  //         },
  //         "events": {
  //           ...
  //         },
  //         "urls": [
  //           ...
  //         ]
  //       }
  //     ]
  //   }
  // }

  $.getJSON("http://pokeapi.co/api/v2/pokemon?limit=151", function(data) {
    pokemonData = data.results;
    getFirebaseData("pokemon");
    setFirebaseData(pokemonData, "pokemon");
  });

  // Example pokemonData:
  // {
  //   "count": 811,
  //   "next": "http://pokeapi.co/api/v2/pokemon/?limit=151&offset=151",
  //   "previous": null,
  //   "results": [
  //     {
  //       "name": "bulbasaur",
  //       "url": "http://pokeapi.co/api/v2/pokemon/1/"
  //     },
  //     ...
  //     {
  //       "name": "mew",
  //       "url": "http://pokeapi.co/api/v2/pokemon/151/"
  //     }
  //   ]
  // }


  function setFirebaseData(data, type) {
    //JARED, DO YOUR CODE AFTER THIS LINE, IN THIS FUNCTION
    var ref = new Firebase('https://blinding-heat-3803.firebaseio.com/' + type);

    // CHECK IF "type" is "pokemon" or if "type" is "marvel"
    // If "type" is equal to "pokemon", do the stuff below.
    if (type === "pokemon") {


      // Use the "data" from "pokemonData" to construct a new array using the "forEach" method
      // Declare a new array variable - var something = [];
      var pokeCharacters = [];
      pokemonData.forEach(function(element, index, array) {
        pokeCharacters[index] = {
          "name": element.name,
          'imageURL': 'http://pokeapi.co/media/sprites/pokemon/' + (index + 1) + '.png'
        }
      });


      //Run the forEach method on pokemonData.
      // Example "forEach" method:
      // pokemonData.forEach(function(element, index, array) {
      //   ... your code here...
      //   something[index] = {...};
      // });
      //
      //New Array Example:
      // [
      //   {
      //     'name': 'bulbasaur',
      //     'imageURL': 'http://pokeapi.co/media/sprites/pokemon/' + (index + 1) + '.png'
      //   },
      //   {
      //     'name': 'ivysaur',
      //     'imageURL': 'http://pokeapi.co/media/sprites/pokemon/' + (index + 1) + '.png'
      //   }
      // ]

      // SET the new array as the new firebase pokemon reference "ref"
      ref.set(pokeCharacters);
    }

    // If "type" is equal to "marvel", do the stuff below.
    if (type === "marvel") {
      // Use the "data" from "marvelData" to construct a new array using the "forEach" method
      // Declare a new array variable - var something = [];
      var marvelCharacters = [];
      marvelData.forEach(function(element, index, array) {
        marvelCharacters[index] = {
          "name": element.name,
          "imageURL": element.thumbnail.path + "/standard_fantastic." + element.thumbnail.extension
        }
      });

      //Run the forEach method on marvelData.
      // Example "forEach" method:
      // marvelData.forEach(function(element, index, array) {
      //   ... your code here...
      //   something[index] = {...};
      // });
      //
      //New Array Example:
      // [
      //   {
      //     'name': '3-D Man',
      //     'imageURL': marvelData.thumbnail.path + "standard_fantastic" + marvelData.thumbnail.extension
      //   },
      //   {
      //     ...etc...
      //   }
      // ]

      // SET the new array as the new firebase marvel reference "ref"
      ref.set(marvelCharacters);
    }
  }



  // NO MORE FOR JARED







 


  }



};
