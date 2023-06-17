const { connect } = require("./client");
const { setupInput, handleUserInput } = require("./input");

console.log("Connecting ...");
const connection = connect();
setupInput(connection, handleUserInput);


// WORK IN PRGRESS, SHOO!
// } else if (key === 'l') {
//   console.log('Sending message: LOL');
//   connection.write('Say: LOL'); // Send a canned message to the server
// } else if (key === 'h') {
//   console.log('Sending message: Hello');
//   connection.write('Say: Hello'); // Send a canned message to the server
// } else if (key === 'x') {
//   console.log('Sending message: You lose');
//   connection.write('Say: You lose'); // Send a canned message to the server
//   console.log('You lose'); // Display "you lose" message locally