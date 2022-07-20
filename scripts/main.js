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


const requestURL = 'https://bentleyr98.github.io/wdd230Final/constellations.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const constellations = jsonObject['constella'];
    
    var table = document.querySelector('.table');
    var cards = document.querySelector('.cards');

    businesses.forEach(displayBusinesses);
    businesses.forEach(displayTable);

    btn1.onclick = function() {
      cards.style.display = "flex";
      table.style.display = "none";
    }

    btn2.onclick = function() {
      cards.style.display = "none";
      table.style.display = "table";
    }


window.addEventListener('resize', function(event){
  if (window.innerWidth >= 900){
      console.log(900);
      let addrList = document.querySelectorAll('.add');
      for (let i = 0; i < addrList.length; i++) {
      addrList[i].style.display = '';

  }

    cards.style.display = 'flex';
    table.style.display = 'none';
  } else if (window.innerWidth >= 690 & window.innerWidth < 900)
  {
    console.log(690);
    let addrList = document.querySelectorAll('.add');
    for (let i = 0; i < addrList.length; i++) {
    addrList[i].style.display = '';
 
  }

    cards.style.display = 'none';
    table.style.display = 'table';
  } else if (window.innerWidth < 690)
  {
    console.log('small');
    let addrList = document.querySelectorAll('.add');
    for (let i = 0; i < addrList.length; i++) {
    addrList[i].style.display = 'none';
  }
    cards.style.display = 'flex';
    table.style.display = 'none';
  } 
}); 



  });







  function displayBusinesses(business) {  // Create elements to add to the document
    let card = document.createElement('section');
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', business.logo);
    img.setAttribute('alt', `${business.name}'s logo`);
    div.appendChild(img);
    card.appendChild(div);

    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = business.name;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);

    let address = document.createElement('p');
    address.textContent = business.address;
    card.appendChild(address);


    let phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);

    let website = document.createElement('p');
    website.textContent = business.website;
    website.setAttribute('class', 'web');
    card.appendChild(website);


    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  function displayTable(business){
    let list_row = document.createElement('tr');
    let list_td = document.createElement('td');
    list_td.textContent = business.name;

    let td_add = document.createElement('td');
    td_add.textContent = business.address;
    td_add.setAttribute('class', 'add');

    let td_cell = document.createElement('td');
    td_cell.textContent = business.phone;

    let td_web = document.createElement('td');
    td_web.textContent = business.website;

    list_row.appendChild(list_td);
    list_row.appendChild(td_web);
    list_row.appendChild(td_add);
    list_row.appendChild(td_cell);

    document.querySelector('.table').appendChild(list_row);

  }