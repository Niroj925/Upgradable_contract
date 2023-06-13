require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("@openzeppelin/hardhat-upgrades")
require('dotenv/config');

 
const ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY=process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.18",
  networks:{
    hardhat:{},
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[PRIVATE_KEY],
      chainId:11155111,
    }
  }
  
  
};