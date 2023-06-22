let pokemonRepository = (function() {
  let pokemonArray = [];
    let api = 'js/pokemonjson.json';

//loadList and loadDetails
function loadList() {
  return fetch(api).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

//allows details to be added
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

//defining the getAll and add functions
    function getAll() {
          return pokemonArray;
      }
      function add(pokemon) {
          pokemonArray.push(pokemon);
      }

//addList, button, and functions
    function addListItem(pokemon){
      let pokemonlistparent= document.querySelector('.htmlpokemonlist');
      let listofpokemon= document.createElement('li');
      let button= document.createElement('button');
      button.innerText= pokemon.name;
      button.classList.add('button');
      listofpokemon.appendChild(button);
      pokemonlistparent.appendChild(listofpokemon);
      button.addEventListener('click', function(){
        showDetails(pokemon);
      });
    }

//showDetails function
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal();
  });
}
//showModal function



//allows data to be accessed outside of this 
    return{
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
  }
})();

//Displays Modal Window

//function allowing the data from the API to be loaded into the array
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

// Function to display the array on the screen
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

/*
notes

*/