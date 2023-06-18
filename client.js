const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function(messageCallback) {
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

  
  conn.on('data', (data) => {
    console.log('Server Says: ', data);
    if (data === 'You died') {
      console.log('You Lose');
      conn.end();
    } else {
      messageCallback(data);
    }
  });
  
  return conn;
};

module.exports = { connect };