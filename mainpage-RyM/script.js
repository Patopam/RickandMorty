async function getAllCharacters(){
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const movies = await response.json();
    return movies;
};

async function getCharactersByName(name){
    const response = await fetch("https://rickandmortyapi.com/api/character/?name="+name);
    const movies = await response.json();
    return movies;
};

getAllCharacters().then((data) => {
populateCards(data.results);
});

let FilterButton = document.querySelector(".boton-buscar");
let inputCharacterName = document.querySelector(".barrita");

function filterCharacters(){
getCharactersByName(inputCharacterName.value).then((data) => {
    populateCards(data.results);
});
}

let cardsContainer = document.querySelector(".contenedor-tarjetas");

function populateCards(allCharacters){
    cardsContainer.innerHTML = "";
    allCharacters.map((character) => {
        let card = document.createElement("div");
        card.setAttribute("class", "tarjetas");
        let image = document.createElement("img");
        image.setAttribute("src", character.image);
        image.setAttribute("alt", character.name);
        card.appendChild(image);
    
    
        let favorite = document.createElement("div");
        favorite.setAttribute("class", "corazon-container");
        let name = document.createElement("span");
        name.setAttribute("class", "personaje-nombre");
        name.innerHTML = character.name;
        let favoriteIcon = document.createElement("i");
        favoriteIcon.setAttribute("class", "far fa-heart");
        favoriteIcon.setAttribute("id", "character-"+character.id);
        favoriteIcon.addEventListener("click", function() {addFavorite(character.id)});
        favorite.appendChild(name);
        favorite.appendChild(favoriteIcon);
        card.appendChild(favorite);
    
        let circle = document.createElement("span");
        circle.setAttribute("class", "circulo");
        let infoCharacter = document.createElement("p");
        infoCharacter.setAttribute("class", "info-personaje");
        infoCharacter.innerHTML = character.status+" - "+character.species;
        let infoCharacter1 = document.createElement("p");
        infoCharacter1.setAttribute("class", "info-personaje1");
        infoCharacter1.innerHTML = "Last location: "+character.location.name;
        card.appendChild(circle);
        card.appendChild(infoCharacter);
        card.appendChild(infoCharacter1);
        cardsContainer.appendChild(card);
    });
};

let favoriteCharacters = [];

function addFavorite(characterId){
    console.log(characterId);
    const favoriteButton = document.querySelector("#character-"+characterId);

    if (favoriteCharacters.includes(characterId)){
    const index = favoriteCharacters.indexOf(characterId);
    favoriteCharacters = favoriteCharacters.splice(index, 1);
    favoriteButton.setAttribute("class", "far fa-heart");
    } else {
        favoriteCharacters.push(characterId);
        favoriteButton.setAttribute("class", "fa-solid fa-heart");
    }
}