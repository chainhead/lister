var Web3 = require('web3');
var fs = require('fs');
//
var ethHttpProvider = new Web3.providers.HttpProvider("http://18.xxx.xxx.xxx:8545");
var web3 = new Web3(ethHttpProvider);
var abiFile = fs.readFileSync('Lister.abi').toString();
var abiDef = JSON.parse(abiFile);
var byteCode = fs.readFileSync('Lister.bin').toString();
//
var listContract = web3.eth.contract(abiDef);
var deployedContract = listContract.new(['A'],
    { data: byteCode, from: web3.eth.accounts[0], gas: 500000},
    (err, res) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Transaction hash : " + res.transactionHash);
            console.log("Contract address : " + res.address);
        }
    }
);