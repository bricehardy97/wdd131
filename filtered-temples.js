// Sample Temple data
const temples = [
  {
    name: 'Salt Lake Temple',
    location: 'Salt Lake City, Utah, USA',
    dateDedicated: '1893-04-06',
    area: 106000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Salt_Lake_Temple_2018.jpg',
  },
  {
    name: 'New York Temple',
    location: 'New York City, New York, USA',
    dateDedicated: '2004-06-27',
    area: 28000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/New_York_Temple.jpg',
  },
  {
    name: 'Palmyra Temple',
    location: 'Palmyra, New York, USA',
    dateDedicated: '2000-04-06',
    area: 15000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Palmyra_Temple.jpg',
  },
  {
    name: 'Los Angeles Temple',
    location: 'Los Angeles, California, USA',
    dateDedicated: '1955-06-03',
    area: 40000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Los_Angeles_Temple.jpg',
  },
  {
    name: 'Salt Lake City Temple',
    location: 'Salt Lake City, Utah, USA',
    dateDedicated: '1893-04-06',
    area: 106000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Salt_Lake_Temple.jpg',
  },
  // Additional temples
  {
    name: 'Vancouver Temple',
    location: 'Vancouver, British Columbia, Canada',
    dateDedicated: '1955-09-27',
    area: 27000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Vancouver_Temple.jpg',
  },
  {
    name: 'Nairobi Temple',
    location: 'Nairobi, Kenya',
    dateDedicated: '2019-05-17',
    area: 35000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Nairobi_Temple.jpg',
  },
  {
    name: 'Paris Temple',
    location: 'Paris, France',
    dateDedicated: '2017-05-21',
    area: 38000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Paris_LDS_Temple.jpg',
  },
  {
    name: 'Ogden Temple',
    location: 'Ogden, Utah, USA',
    dateDedicated: '1972-01-01',
    area: 12000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Ogden_Temple.jpg',
  }
];

// Function to create temple cards
function createTempleCards(templesArray) {
  const templesList = document.getElementById('temples-list');
  templesList.innerHTML = ''; // Clear any existing cards

  templesArray.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    const templeImage = document.createElement('img');
    templeImage.src = temple.image;
    templeImage.alt = `${temple.name} image`;
    templeImage.loading = 'lazy';

    const templeName = document.createElement('h2');
    templeName.textContent = temple.name;

    const templeLocation = document.createElement('p');
    templeLocation.textContent = `Location: ${temple.location}`;

    const templeDate = document.createElement('p');
    templeDate.textContent = `Dedicated: ${temple.dateDedicated}`;

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

// Filter temples based on category
function filterTemples(category) {
  let filteredTemples;
  switch (category) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dateDedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dateDedicated).getFullYear() > 2000);
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

// Add event listeners for menu items
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
