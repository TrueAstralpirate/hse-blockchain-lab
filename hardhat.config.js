require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    Goerli: {
      url: 'https://goerli.infura.io/v3/YOUR_API_KEY',
      accounts: [`0x${privateKey}`]
    }
  },
};
