require("babel-register");
require("babel-polyfill");
require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          [
            "5f434f85a4b2df25280073bc5fc171e835176575f9dfbc45826b6b8843a71450",
            "1543a4250c4c6eb039334f9bf3f66398f12ab5a493afe9d5abf1f4a3696b1031",
          ], // Array of account private keys
          "https://rinkeby.infura.io/v3/52474cef7b964b4fbf8e954a5dfa481b" // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
