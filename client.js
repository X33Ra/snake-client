const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  
  const conn = net.createConnection({
    host: IP, // Use the IP constant here
    port: PORT // Use the PORT constant here
  });
  // interpret incoming data as text
  conn.setEncoding("utf-8");

  // Notifys the user someone connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SNK'); // Send the string "Name: ___" to the server
  });

  return conn;
};

module.exports = {connect};