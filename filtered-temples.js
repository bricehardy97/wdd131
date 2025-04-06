
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