// ==UserScript==
// @name         Show Airline ID
// @namespace    https://brokenbutler.com/
// @version      1.1.1
// @description  try to take over the world!
// @author       BrokenButler
// @match        https://*.airline-club.com/
// @icon         https://www.google.com/s2/favicons?domain=airline-club.com
// @grant        none
// ==/UserScript==

displayOwnAirlineID();
displayRivalAirlineID();

function displayOwnAirlineID() {
    //Get the AirlineLabel Element
    let airlineLabel = document.getElementsByClassName('currentAirline label')[0];

    //Get the AirlineName, ID, and Logo
    let airlineLogo = airlineLabel.firstChild;
    let airlineName = airlineLabel.innerText;
    let airlineID = airlineLogo.src.split('/')[4];

    //Insert new name and re-insert the logo
    airlineLabel.innerText = `${airlineName} (${airlineID})`;
    airlineLabel.prepend(airlineLogo);
}


function displayRivalAirlineID() {
    //Get the rivalsCanvas and Airline rows
    let rivalsCanvas = document.getElementById('rivalsCanvas');
    let airlines = rivalsCanvas.getElementsByClassName('table-row clickable');

    for (let airline of airlines) {
        //Get the AirlineName, ID, and Logo
        let airlineID = airline.dataset.airlineId;
        let airlineName = airline.children[1].innerText;
        let airlineLogo = airline.children[1].firstElementChild.firstChild;

        //Insert new name and re-insert the logo
        airline.children[1].firstElementChild.innerText = `${airlineName} (${airlineID})`;
        airline.children[1].firstElementChild.prepend(airlineLogo);
    }
}