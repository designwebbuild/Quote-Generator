//makes random quotes from selected array
function randomQuote(word) {
  return word[Math.floor(Math.random() * word.length)];
}


//takes an array and returnes random quote from sub arrays
function getQuote(selectedArray) {
  return selectedArray.map(function(words) {
    return randomQuote(words)
  }).join("");
}

const button = document.querySelector("#btn");
const dropdown = document.querySelector("#dropdown");


//creates "li" element and textNode
//appendChild is used to put content in container and li
function makeElement(content) {

  const paragraph = document.createElement("li");
  const text = document.createTextNode(content);
  paragraph.appendChild(text);
  const groupsContainer = document.getElementById("container");
  groupsContainer.appendChild(paragraph);
}

//removes starting text from container
function removeText() {
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//generates quotes according to the selected theme and amount
function generateQuote() {
  const times = document.querySelector("#iteration");
  for (let i = 0; i < times.value; i++) {
    makeElement(getQuote(arrays[dropdown.value]));
  }
}

//cleaning container and then adding text
function printQuotes() {
  removeText();
  generateQuote();
}



//execution
button.addEventListener("click", printQuotes);


const arrays = [
  // Quotes in fragments
  [
    ["\"If you want to win, ", "\"While you're down, ", "\"In life, ", "\"When facing a problem, ", "\"In order to stay strong, ", "\"While life can get hard, ", "\"If you think to quit, ", "\"On your journey, "],
    ["always do your best ", "don't look back ", "make good decisions ", "never look back ", "don't lose focus ", "never back down ", "make every day count ", "always think twice "],
    ["and stay positive.\"", "as you can do it.\"", "as you can prevail.\"", "because you can do it.\"", "and be your best version.\"", "and keep trying.\"", "so you can get on top.\"", "because nothing can stop you.\""]
  ],

  [
  ["\"I’m going to make him, ", "\"Go ahead, make my, ", "\"May the force, ", "\"I love the smell of, ", "\"You’re gonna need, ", "\"Get your stinking, ", "\"I'm the king, ", "\"you’ve got to ask yourself, "],
    ["napalm in the morning. ", "be with you. ", "you damned dirty ape. ", "Shaken, not stirred. ", "of the world. ", "an offer he can’t refuse. ", "we have a problem. ", "the need for speed. "],
    ["- The Godfather, 1972\"", "- Sudden Impact, 1983\"", "- Star Wars, 1977\"", "- Apocalypse now, 1979\"", "- Jaws, 1975\"", "- The Terminator, 1984\"", "- Back To The Future, 1985\"", "- The Sixth Sense, 1999\""]
  ],


  [
    [
      // Movie Quotes
      '“I’m going to make him an offer he can’t refuse.” - The Godfather, 1972',
      '“Go ahead, make my day.” - Sudden Impact, 1983',
      '“May the force be with you.” - Star Wars, 1977',
      '“I love the smell of napalm in the morning.” - Apocalypse now, 1979',
      '“You’re gonna need a bigger boat.” - Jaws, 1975',
      '“I’ll be back.” - The Terminator, 1984',
      '“Roads? Where we’re going, we don’t need roads.” - Back To The Future, 1985',
      '“I see dead people.” - The Sixth Sense, 1999',
      '“Houston, we have a problem.” - Apollo 13, 1983',
      '“Say ‘hello’ to my little friend!” - Scarface, 1983',
      '“Get your stinking paws off me, you damned dirty ape.” - Planet Of The Apes, 1968',
      '“Here’s Johnny!” - The Shining, 1980',
      '“Hasta la vista, baby.” - Terminator 2: Judgment Day, 1991',
      '“Yo, Adrian!” - Rocky, 1976',
      '“My precious.” - The Lord Of The Rings: Two Towers, 2002',
      '“A martini. Shaken, not stirred.” - Goldfinger, 1964',
      '“I feel the need - the need for speed.” - Top Gun, 1986',
      '“I\'m the king of the world.” - Titanic, 1997',
      '“Toto, I’ve got a feeling we’re not in Kansas anymore.” - The Wizard Of Oz, 1939',
      '“Fasten your seatbelts. It’s going to be a bumpy night.” - All About Eve, 1950',
      '“You talking to me?” - Taxi Driver,1976',
      '“E.T. phone home.” - E.T. The Extra-Terrestrial, 1982',
      '“If you build it, he will come.” - Field of Dreams, 1989',
      '“We rob banks.” - Bonnie and Clyde, 1967',
      '“We’ll always have Paris.” - Casablanca, 1942',
      '“It’s alive! It’s alive!” - Frankenstein, 1931',
      '“you’ve got to ask yourself one question: ‘Do i feel lucky?’ Well, do ya, punk?” - Dirty Harry, 1971',
      '“Greed, for lack of a better word, is good.” - Wall Street, 1978',
      '“Open the pod bay doors, HAL.” - A Space Odyssey, 1968',
      '“Oh, no, it wasn’t the airplanes. It was Beauty killed the beast.” King Kong, 1933'
    ]
  ],

  [
    [
      // Motivational Quotes
      '"The work of today is the history of tomorrow, and we are its makers." - Juliette Gordon Low',
      '"In the middle of difficulty lies opportunity." - Albert Einstein',
      '"To teach is to learn twice." - Joseph Joubert',
      '"It is never too late to be what you might have been." - George Eliot',
      '"Either you run the day, or the day runs you." - Jim Rohn',
      '"Today i will do what others won’t, so tomorrow i can accomplish what others can’t." - Jerry Rice',
      '"It always seems impossible until it’s done." - Nelson Mandela',
      '"It does not matter how slowly you go as long as you do not stop." - Confucius',
      '"The secret of getting ahead is getting started." - Mark Twain',
      '"Don’t watch the clock; do what it does. Keep going." Sam Levenson',
      '“You are never too old to set another goal or to dream a new dream.” - Les Brown',
      '“By failing to prepare, you are preparing to fail.” - Benjamin Franklin',
      '“The will to succeed is important, but what’s more important is the will to prepare.” - Bobby Knight',
      '“Step by step and the thing is done.” - Charles Atlas',
      '“You will never win if you never begin.” - Helen Rowland',
      '“The more things you do, the more you can do.” - Lucille Ball',
      '“Don’t let yesterday take up too much of today.” - Will Rogers',
      '“You learn more from failure than from success. Don’t let it stop you” - Unknown',
      '“Reading is to the mind, as exercise is to the body” - Brian Tracy',
      '“Success usually comes to those who are too busy to be looking for it.” - Henry David',
      '“I find that the harder I work, the more luck I seem to have.” - Thomas Jefferson',
      '“All progress takes place outside. the comfort zone.” - Michael John Bobak',
      '“If you really want to do something, you’ll find a way. If you don’t, you’ll find excuse.” - Jim Rohn',
      '“Some people dream of success while others wake up and work.” - Unknown',
      '“The only place where success comes before work is in the dictionary.” - Vidal Sasson',
      '“A person who never made a mistake never tried anything new.” - Albert Einstein',
      '“You only live once, but if you do it right, once is enough.” - Mae West',
      '“Great minds discuss ideas; average minds discuss events; small minds discuss people.” - Eleanor Roosevlt',
      '“The difference between winning and losing is most often not quitting.” - Walt Disney',
      '“You miss 100 percent of the shots you don’t take” - Wayne Gretzky'
    ]
  ]
];
