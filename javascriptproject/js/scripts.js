let pokemonRepository = (function() {
    let pokemonList = [
        {
        name:'Regirock',
        height:1.7,
        type:['rock']
    },
        {
        name:'Regice',
        height:1.8,
        type:['ice']
    },
        {
        name:'Registeel',
        height:1.9,
        type:['steel']
    }
    ];
            function(getAll){
                return
            }

            function(add){
            
            }
})();

pokemonRepository.forEach(function(pokemon){
    document.write(pokemon.name +"'s height: "+ pokemon.height);
        if (pokemon.height > 1.8){
            document.write( " <- This one is the tallest");
        }
        document.write('<br>');
});

/*
for (let i = 0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name +"'s height: "+ pokemonList[i].height);

    if (pokemonList[i].height > 1.8){
        document.write( " <- This one is the tallest")
    }
    document.write('<br>')
}
*/

// Next, add code to highlight special Pokémon in your list. Be sure to keep adding comments to explain and document what your code does. Within the loop, add a conditional. The conditional should check if the height is above a certain value (you’re free to pick whatever value you want). If it is, add the note “Wow, that’s big!” to the output. Make sure you set up the conditional so that only one Pokémon has the label “Wow, that’s big!” It could, for example, look like this: “Bulbasaur (height: 7) - Wow, that’s big!”. For example, if you had the following array