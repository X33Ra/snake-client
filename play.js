const {connect} = require("./client");



// establishes a connection with the game server

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);


  return stdin;
};

// rule:
// register it as the "data" callback handler for stdin.
// handleUserInput should check for the ctrl + c input and terminate the game
// Call setupInput from within play.js.
const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    // Check for Ctrl + C input (ASCII code 3) and terminate the game
    process.exit();
  }
};
console.log("Connecting ...");
connect();
setupInput();