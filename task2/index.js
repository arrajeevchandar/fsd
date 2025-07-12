fetch("https://pokeapi.co/api/v2/pokemon/charizard")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));