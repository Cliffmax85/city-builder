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
    displayStats(); 
});

castleDropdown.addEventListener('change', () => {
    const castle = castleDropdown.value;
    castleCount++; 

    castleImageEl.src = `./assets/${castle}-castle.jpg`;
    displayStats();
});

waterfrontDropdown.addEventListener('change', () => {
    const waterfront = waterfrontDropdown.value;
    waterfrontCount++;

    waterfrontImageEl.src = `./assets/${waterfront}-waterfront.jpg`;
    displayStats();
});
  // get user input
sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInputEl.value;
    sloganInput.push(newSlogan);

  
    sloganListEl.textContent = '';
    displaySlogans();
});




  // use user input to update state 
function displayStats() {
    countEl.textContent = makeStatsString(skylineCount, castleCount, waterfrontCount);
}



  // update DOM to reflect the new state

function displaySlogans() {
    sloganInput.value = '';

    sloganListEl.textContent = '';

    for (let slogan of sloganInput) {
        const p = document.createElement('p');
        p.classList.add('slogan');
        sloganListEl.append(p);
        p.textContent = slogan;
    }
}
