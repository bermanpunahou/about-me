// This file allows the healthbar to change

// unclear what this does but seems important
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

// stores health as a number, color as a string
localStorage.setItem("healthValue", 100);
localStorage.setItem("healthColor", 'lightgreen');
// stores health as a percentage in a string
// root is the html doc (DOM)
// style is the stylesheet
// setProperty sets the value of a variable defined in that stylesheet
root.style.setProperty('--healthValue', '100%');
root.style.setProperty('--healthColor', 'lightgreen');

// changes health status based on user choice
function changeHealth(delta) {
  // get the current health from storage
  let health = Number.parseInt(localStorage.getItem('healthValue'));
  // make a health variable and change it according to the button chosen
  health += delta;
  if (health > 100) {
    health = 100;
  }
  else if (health < 0) {
    health = 0;
  }
  // reset local storage to new health value and send new value to CSS to 
  // resize the health bar
  localStorage.setItem('healthValue', health);
  root.style.setProperty('--healthValue', health.toString() + '%');
  root.style.setProperty('--healthColor', getHealthBarColor(health));
  console.log(getHealthBarColor(health));
}

// Chooses an appropriate color for the healthbar based on health status
function getHealthBarColor(health) {
  if (health > 80) {
    return 'lightgreen';
  }
  else if (health > 60) {
    return '#efcc00';
  }
  else if (health > 40) {
    return '#ff9966';
  }
  else {
    return 'indianred';
  }
}

// INVENTORY CONTROLS
let markers = 0

// Adjusts inventory variables
// function addMarkers() {
//     markers += 1;
// }

let btn = document.getElementById("btn");
let disp = document.getElementById("display");
    
btn.onclick = function () {
            count++;
disp.innerHTML = count;
}