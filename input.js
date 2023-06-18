// rule:
// register it as the "data" callback handler for stdin.
// handleUserInput should check for the ctrl + c input and terminate the game
// Call setupInput from within play.js.
// setup interface to handle user input from stdin
const handleUserInput = function(key, connection) {
  if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === '\u0003') {
    console.log('User Has Left The Channel');
    // Check for Ctrl + C input (ASCII code 3) and terminate the game
    process.exit();
    // Special keys
  } else if (key === '1') {
    connection.write('Hello Everyone!');
  } else if (key === '2') {
    connection.write('Good Job!');
  } else if (key === '3') {
    connection.write('Boo!');
  }
};

const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key, connection));

  return stdin;
};

module.exports = { setupInput };
