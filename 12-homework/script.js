const FILMSECOND = `https://swapi.dev/api/films/2`;
const PLANETS = `https://swapi.dev/api/planets/`;
//1
const getOneCharacter = async (charURL) => {
  const response = await fetch(charURL);
  const data = await response.json();
  const character = {
    name: data.name,
    birthday: data.birth_year,
    gender: data.gender,
  };
  renderCharacter(character);
};
const getCharacters = async () => {
  try {
    const response = await fetch(FILMSECOND);
    const data = await response.json();
    
    
    data.characters.forEach(url => {
      getOneCharacter(url)
    })
  } catch (e) {
    throw new Error(`Ого, маєш класну помилку: ${e.message}`);
  }
};

const renderCharacter = (character) => {
  const container = document.querySelector(".characters");
  const userElement = document.createElement("div");
  userElement.className = "char";
  userElement.innerHTML = `
          <h3>${character.name}</h3>
          <h4>${character.birthday}</h4>
          <h4>${character.gender}</h4>
        `;
  container.append(userElement);
};

// document.querySelector('#show-info-char').addEventListener("click", getCharacters, {
//   once: true
// })

//2-3
const getPlanets = async (page) => {
  const mixer = PLANETS + page;
  const response = await fetch(mixer);
  const data = await response.json();
  const planet = data;
  renderPlanets(planet);
};
console.log("getPlanets: ", getPlanets(1));

const renderPlanets = (planet) => {
  const container = document.querySelector(".planets");
  const planetElement = document.createElement("div");
  container.innerHTML = ``
  planetElement.className = "planet";
  planetElement.innerHTML = `
          <h3>Name: ${planet.name}</h3>
          <h4>Rotation period: ${planet.rotation_period}</h4>
          <h4>Orbital period: ${planet.orbital_period}</h4>
          <h4>Diameter: ${planet.diameter}</h4>
          <h4>Gravity: ${planet.gravity}</h4>
          <h4>Terrain: ${planet.terrain}</h4>
          <h4>Population: ${planet.population}</h4>
        `;
  container.append(planetElement);
};
const prevBtn = document.getElementById('prev-planet')
const nextBtn = document.getElementById('next-planet')
function paginationInit() {
  let currentPage = 1;
  
  document.querySelector("#prev-planet").addEventListener("click", () => {
    if (currentPage <= 1) prevBtn.setAttribute('disabled')
    getPlanets(--currentPage);
  });
  document.querySelector("#next-planet").addEventListener("click", () => {
    if (currentPage >= 60) nextBtn.setAttribute('disabled')
    getPlanets(++currentPage);
    
  });
  
  
}
paginationInit();

//4
const ANYFILM = `https://swapi.dev/api/films/`;
function getFilmLink() {
  const filmId = document.enterFilm.film.value;
  if (!filmId || Number.isInteger(filmId)) return;
  const theLink = ANYFILM + filmId;
  return theLink;
}
const getNewCharacters = async () => {
  try {
    const response = await fetch(getFilmLink());
    const data = await response.json();
    const container = document.querySelector(".characters");
    container.innerHTML = ``;
    data.characters.forEach((url) => {
      getOneCharacter(url);
    });
  } catch (e) {
    throw new Error(`Ого, маєш класну помилку: ${e.message}`);
  }
};

document.querySelector("#create").addEventListener("click", getNewCharacters);
