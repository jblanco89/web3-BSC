
const Config = require('./api_binance.json');
const Tx = require('ethereumjs-tx');
const Web3 = require('web3'); // set web3 library

const rpcURL = 'https://data-seed-prebsc-1-s1.binance.org:8545'; //testnet provider

const web3 = new Web3(rpcURL); // set URL instance

web3.eth.accounts.create()

const account_1 = Config['address_1'];
const account_2 = Config['address_2'];

const privateKey_1 = Config['privateKey_1'];
const privateKey_2 = Config['privateKey_2'];

web3.eth.sendTransaction({
    from: account_1,
    to: account_2,
    value: '1000000000000000000',
    gas: 5000000,
    gasPrice: web3.eth.gasPrice,
}, function(err, transactionHash) {
  if (err) {
    console.log(err);
    } else {
    console.log(transactionHash);
   }
});
