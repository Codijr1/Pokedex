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
        let pokemonlistparent= document.querySelector('.list-group');
        let listofpokemon= document.createElement('li');
        let button= document.createElement('button');
        button.innerText= pokemon.name;
        button.classList.add('btn','btn-primary');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#myModal');
        button.addEventListener('click', function () {
          showDetails(pokemon);
        });
        listofpokemon.appendChild(button);
        listofpokemon.classList.add('list-group-item');
        pokemonlistparent.appendChild(listofpokemon);
        };
  //showDetails function
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let modalContent = document.querySelector('.modal-body');
      let modalHeader= document.querySelector('.modal-header');
      modalHeader.innerHTML= `<h1>${pokemon.name}</h1>`
      modalContent.innerHTML = `
        <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
        <p>Height: ${pokemon.height}</p>
        <p>Type(s): ${pokemon.types.map(type => type.type.name).join(', ')}</p>
      `;
    });
  }
//allows data to be accessed outside of this 
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
};
})();
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
