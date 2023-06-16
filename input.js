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
module.exports = {setupInput};

// rule:
// register it as the "data" callback handler for stdin.
// handleUserInput should check for the ctrl + c input and terminate the game
// Call setupInput from within play.js.
const handleUserInput = function(key) {
  if (key === 'w') {
    console.log('Move: up');
  } else if (key === 'a') {
    console.log('Move: left');
  } else if (key === 's') {
    console.log('Move: down');
  } else if (key === 'd') {
    console.log('Move: right');
  } else if (key === '\u0003') {
    // Check for Ctrl + C input (ASCII code 3) and terminate the game
    console.log('User Has Left The Server');
    process.exit();
  }
};

// second rule