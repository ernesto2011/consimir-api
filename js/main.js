const URL ="https://api.disneyapi.dev/characters"
let charactersArray = [];
/*
fetch para consumir el API de rick and morty
*/ 

fetch(`${URL}`)
.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    charactersArray = data.results;
    console.log(charactersArray);
})