module.exports = {
  networks: {
    xdevelopment: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.13"
    }
  }
};
