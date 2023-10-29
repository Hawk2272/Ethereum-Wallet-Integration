require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/lcmCt_Cu0HggOGeeqt2F6Wa6EGFXuvDa',
      accounts: ['4032402bc785d7083f7741f621a74c8dd48b8c32ec02cd0e2fe42908c005ebe9'],
    },
  },
};