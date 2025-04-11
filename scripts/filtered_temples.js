
function actualizarFechaModificacion() {
    const ahora = new Date();
    const fechaHoraFormateada = ahora.toLocaleString();

    document.getElementById("lastModified").textContent = "Last Modified: " + fechaHoraFormateada;
}
actualizarFechaModificacion();

function mostrarAñoActual() {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();

    document.getElementById("currentyear").textContent = anioActual;
}
mostrarAñoActual();

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
  
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      body.classList.toggle('nav-open');
    });
});

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
        templeName: "Caracas Venezuela Temple",
        location: "Caracas, Venezuela",
        dedicated: "2000, Agost, 20",
        area: 15332,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55705-thumb.jpg"
      },
      {
        templeName: "Veracruz Mexico Temple",
        location: "Veracruz, Mexico",
        dedicated: "2000, July, 9",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/veracruz-mexico-temple/veracruz-mexico-temple-36749-thumb.jpg"
      },
      {
        templeName: "Vancouver British Columbia Temple",
        location: "Langley, Canada",
        dedicated: "2010, May, 2",
        area: 28165,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-3285-thumb.jpg"
      },
];

const mainElement = document.querySelector('main');
const navLinks = document.querySelectorAll('.main-nav a');

// time to create a single temple card function
function createTempleCard(temple) {
    const card = document.createElement('figure');

    const nameElement = document.createElement('h3');
    nameElement.textContent = temple.templeName;

    const locationElement = document.createElement('p');
    locationElement.textContent = temple.location;

    const dedicatedElement = document.createElement('p');
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;

    const areaElement = document.createElement('p');
    areaElement.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const imageElement = document.createElement('img');
    imageElement.src = temple.imageUrl;
    imageElement.alt = temple.templeName;
    imageElement.loading = 'lazy';

    const captionElement = document.createElement('figcaption');
    captionElement.appendChild(nameElement);
    captionElement.appendChild(locationElement);
    captionElement.appendChild(dedicatedElement);
    captionElement.appendChild(areaElement);

    card.appendChild(imageElement);
    card.appendChild(captionElement);

    return card;
}

// array
function displayTemples(templesToDisplay) {
    mainElement.innerHTML = '<h2>Home</h2>'; 
    templesToDisplay.forEach(temple => {
        const card = createTempleCard(temple);
        mainElement.appendChild(card);
    });
}

// Filter date
function filterOldTemples() {
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    displayTemples(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    displayTemples(newTemples);
}

// Filter size
function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
}

// listeners for navi link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const filter = this.textContent.toLowerCase();
        mainElement.querySelector('h2').textContent = this.textContent;

        switch (filter) {
            case 'old':
                filterOldTemples();
                break;
            case 'new':
                filterNewTemples();
                break;
            case 'large':
                filterLargeTemples();
                break;
            case 'small':
                filterSmallTemples();
                break;
            case 'home':
                displayTemples(temples);
                mainElement.querySelector('h2').textContent = 'Home'; // Reset
                break;
            default:
                displayTemples(temples);
                mainElement.querySelector('h2').textContent = 'Home';
                break;
        }
    });
});

displayTemples(temples);
