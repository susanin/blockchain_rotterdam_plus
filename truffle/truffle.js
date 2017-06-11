module.exports = {
  networks: {
    azure: {
      host: '40.118.96.33',
      port: 8545,
      network_id: 1
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
