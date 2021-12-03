// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const skylineDropdown = document.querySelector('#skyline-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');
const waterfrontDropdown = document.querySelector('#waterfront-dropdown');
const skylineImageEl = document.querySelector('#skyline-image');
const castleImageEl = document.querySelector('#castle-image');
const waterfrontImageEl = document.querySelector('#waterfront-image');
const sloganInputEl = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganListEl = document.querySelector('.list');
const countEl = document.querySelector('.count'); 




// let state
let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;

let sloganInput = [];




// set event listeners 

skylineDropdown.addEventListener('change', () => {
    const skyline = skylineDropdown.value;
    skylineCount++; 

    skylineImageEl.src = `./assets/${skyline}-skyline.jpg`;
});

castleDropdown.addEventListener('change', () => {
    const castle = castleDropdown.value;
    castleCount++; 

    castleImageEl.src = `./assets/${castle}-castle.jpg`;
});

waterfrontDropdown.addEventListener('change', () => {
    const waterfront = waterfrontDropdown.value;
    waterfrontCount++;

    waterfrontImageEl.src = `./assets/${waterfront}-waterfront.jpg`;
});
  // get user input


  // use user input to update state 
  // update DOM to reflect the new state
