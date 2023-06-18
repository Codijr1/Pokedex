let pokemonRepository = (function() {
  let pokemonArray = [
    {
      name: 'Regirock',
      height: 1.7,
      type: ['rock']
    },
    {
      name: 'Regice',
      height: 1.8,
      type: ['ice']
    },
    {
      name: 'Registeel',
      height: 1.9,
      type: ['steel']
    }
  ];
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
    function showDetails(pokemon){
      console.log(pokemon.name);
    }
//allows data to be accessed outside of this 
    return{
      add: add,
      getAll: getAll,
      addListItem: addListItem
  }
})();

// Testing the add function
pokemonRepository.add({
    name: 'New Pokemon',
    height: 1.6,
    type: ['normal']
  });
  
// Function to display the array on the screen
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});


/*
notes
*/
