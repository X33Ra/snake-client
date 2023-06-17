const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf-8");

  // Notifys the user someone connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SNK');
  });

  return conn;
};

module.exports = {connect};