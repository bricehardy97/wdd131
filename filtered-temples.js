
function setYear() {
    const currentYear = document.getElementById("currentyear");

    console.log(currentYear.innerHTML);
    const today = new Date();
    const year = today.getFullYear();
    console.log(year);
    
    currentYear.innerHTML = year;
}

function setLastModified() {
    const lastModified= document.getElementById("lastModified")
    console.log(lastModified)
    lastModified.innerHTML = "Date last modified: " + document.lastModified;
}

function setup(){
    
    setYear();
    setLastModified();
    setupNavigation();
}

function menuButtonCallBack() {
    
    document.getElementById("click").style.display = "flex";
    // change dislay of the nav element

}

function setupNavigation(){
    const button=document.querySelector("#Hamburger")
    button.addEventListener("click", menuButtonCallBack );
    
}

setup();

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
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpg"
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
        templeName: "Provo Utah Rock Canyon Temple",
        location: "Provo Utah, United States",
        dedicated: "1972, February, 9",
        area: 85084,
        imageUrl:
        "https://churchofjesuschristtemples.org/provo-utah-rock-canyon-temple/photographs/#Gallery-14"
      },
      {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl:
        "https://churchofjesuschristtemples.org/salt-lake-temple/photographs/#Gallery-3"
      },
      {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 115507,
        imageUrl:
        "https://churchofjesuschristtemples.org/logan-utah-temple/photographs/#Gallery-7"
      },
    
  ];