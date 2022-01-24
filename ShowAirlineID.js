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

let airlineLabel = document.getElementsByClassName('currentAirline label')[0]
let childLogo = airlineLabel.firstChild;
let airlineID = childLogo.src.split('/')[4];
let airlineName = airlineLabel.innerText;
let newAirlineName = `${airlineName} (${airlineID})`;
airlineLabel.innerText = newAirlineName;
airlineLabel.prepend(childLogo);