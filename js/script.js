// Function to get random values. Parameter is an array
function pickRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

// This takes as a parameter one of the arrays.
// The map function selects each "sub" array and performs the pickRandomWord in the array to get a word.
// Since map returns an array, join is used to return it as a string
function getPhrase(selectedArray) {
  return selectedArray.map(function(word) {
    return pickRandomWord(word)
  }).join("");
}

const button = document.querySelector("#btn");
const dropdown = document.querySelector("#dropdown");
const body = document.querySelector("body");

function addElement(content) {
  const paragraph = document.createElement("li");
  const paraText = document.createTextNode(content);
  paragraph.appendChild(paraText);
  const groupsContainer = document.getElementById("container");
  groupsContainer.appendChild(paragraph);
}

// Cleans the containes from it's previous texts
function containerCleaner() {
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Generates phrases according to the selected theme and amount
function generatePhrase() {
  const times = document.querySelector("#iteration");
  for (let i = 0; i < times.value; i++) {
    addElement(getPhrase(arrays[dropdown.value]));
  }
}

// Cleaning container and then adding text
function printText() {
  containerCleaner();
  generatePhrase();
}

// Execution
button.addEventListener("click", printText);
