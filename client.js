const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.22.100.173', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");

  // Notifys the user someone connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SNK'); // Send the string "Name: ___" to the server

    // const moves = ["Move: up", "Move: down", "Move: left", "Move: right"];
    // let moveIndex = 0;

    // setInterval(() => {
    // conn.write(moves[moveIndex]);
    // moveIndex = (moveIndex + 1) % moves.length;
    // }, 50);
  });

  return conn;
};

module.exports = {connect};