const currentYear = document.getElementById("currentyear");

console.log(currentYear.innerHTML);
const today = new Date();
const year = today.getFullYear();
console.log(year);

currentYear.innerHTML = year;

const lastModified= document.getElementById("lastModified")
console.log(lastModified)
lastModified.innerHTML = "Date last modified: " +document.lastModified;

