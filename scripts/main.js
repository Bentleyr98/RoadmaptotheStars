// Night Sky element

const $el = document.body;

// Generate a random number between min and max values

const genRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

// Generate a star <div>

const genStar = () => {

    const star = document.createElement("div");
    star.classList.add("star");

    // Gen star coordinates relative to $el size
    let x = genRandomNumber(1, $el.offsetWidth);
    let y = genRandomNumber(1, $el.offsetHeight);

    const { style } = star;

    style.left = Math.floor(x) + "px";
    style.top = Math.floor(y) + "px";

    style.setProperty(
        "--star-size",
        genRandomNumber(1, 3) + "px"
    );

    style.setProperty(
        "--twinkle-duration",
        Math.ceil(genRandomNumber(1, 5)) + "s"
    );

    style.setProperty(
        "--twinkle-delay",
        Math.ceil(genRandomNumber(1, 5)) + "s"
    );

    return star;
}

for (let index = 0; index < 500; index++) {
    $el.append(genStar());
}


const requestURL = 'https://bentleyr98.github.io/RoadmaptotheStars/constellations.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const constellations = jsonObject['constellations'];
    
    var cards = document.querySelector('.cards');

    constellations.forEach(displayStars);
 
  }); 


  function displayStars(constellation) {  // Create elements to add to the document
    let card = document.createElement('section');
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', constellation.img);
    img.setAttribute('alt', `${constellation.name}'s picture`);
    div.appendChild(img);
    card.appendChild(div);

    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = constellation.name;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }