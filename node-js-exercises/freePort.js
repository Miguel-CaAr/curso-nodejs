const net = require("node:net");

function findAvailablePort(disablePort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(disablePort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });
    server.on("error", (err) => {
        if(err.code === 'EADDRINUSE'){
            resolve(findAvailablePort(0));
        } else {
            reject(err)
        }
    });
  });
}

module.exports = { findAvailablePort };
