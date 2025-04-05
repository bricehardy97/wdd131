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

function calculateWindChill(windSpeed, temperature){
    console.log(windSpeed,temperature)
    const windChill = 
                    35.74+
                    (0.6215*temperature)-
                    (35.75*Math.pow(windSpeed,0.16))+
                    (0.4275*temperature* Math.pow(windSpeed,0.16))

    return windChill
}

function insertWindChill(windChillDecimal){
    const windChillElement = document.getElementById("windChill")
    windChillElement.innerHTML = windChillDecimal
}

function setup(){
    
    setYear();
    setLastModified();
    const tempF = 15;
    const windSpedMPH = 0.5;
    const isCelcius = true;

}

// ENTRY POINT
setup();