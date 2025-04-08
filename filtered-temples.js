const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza Brazil ",
    location: "Fortazela,Brazil",
    dedicated: "2019, June, 2019",
    area: 36000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland,Ohio",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
  {
    templeName: "London England",
    location: "Surrey, England",
    dedicated: "1958, September, 7-9",
    area: 42652,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
  },
  

];


function createTempleCards(templesArray) {
  const templesList = document.getElementById('temples-list');
  templesList.innerHTML = ''; // Clear any existing cards

  templesArray.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;
    templeImage.loading = 'lazy';

    const templeName = document.createElement('h2');
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement('p');
    templeLocation.textContent = `Location: ${temple.location}`;

    const templeDate = document.createElement('p');
    templeDate.textContent = `Dedicated: ${temple.dedicated}`;

    const templeArea = document.createElement('p');
    templeArea.textContent = `Area: ${temple.area} sq ft`;

    templeCard.appendChild(templeImage);
    templeCard.appendChild(templeName);
    templeCard.appendChild(templeLocation);
    templeCard.appendChild(templeDate);
    templeCard.appendChild(templeArea);

    templesList.appendChild(templeCard);
  });
}

function filterTemples(category) {
  // THIS SPOT WILL ALWAYS BE RUN/EXECUTED
  console.log(category);
  let filteredTemples;
  switch (category) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }
  createTempleCards(filteredTemples);
}


document.getElementById('home').addEventListener('click', () => filterTemples('home'));
document.getElementById('old-temples').addEventListener('click', () => filterTemples('old'));
document.getElementById('new-temples').addEventListener('click', () => filterTemples('new'));
document.getElementById('large-temples').addEventListener('click', () => filterTemples('large'));
document.getElementById('small-temples').addEventListener('click', () => filterTemples('small'));

// Display current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initialize with all temples
filterTemples('home');
