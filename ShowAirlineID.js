// ==UserScript==
// @name         Show Airline ID
// @namespace    http://brokenbutler.com/
// @version      1.0.0
// @description  try to take over the world!
// @author       BrokenButler
// @match        https://*.airline-club.com/
// @icon         https://www.google.com/s2/favicons?domain=airline-club.com
// @grant        none
// ==/UserScript==

//Get the AirlineLabel Element
let airlineLabel = document.getElementsByClassName('currentAirline label')[0];
let childLogo = airlineLabel.firstChild;

//Get the AirlineName and ID
let airlineName = airlineLabel.innerText;
let airlineID = childLogo.src.split('/')[4];

//Generate 'new' name
let newAirlineName = `${airlineName} (${airlineID})`;

//Insert new name and re-insert the logo
airlineLabel.innerText = newAirlineName;
airlineLabel.prepend(childLogo);