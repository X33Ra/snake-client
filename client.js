const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf-8");

  // Notifies the user someone connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SNK');
  });

  // Handle server messages
  conn.on('data', (data) => {
    console.log('Server Says:', data);
    
    // Check if the client has died
    if (data === 'You died') {
      console.log('You lose');
      conn.end();
    }
  });

  return conn;
};

module.exports = { connect };
