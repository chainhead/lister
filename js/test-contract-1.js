var Web3 = require('web3');
var fs = require('fs');
//
var web3 = new Web3(new Web3.providers.HttpProvider("http://ip.address:8545"));
var abiFile = fs.readFileSync('Lister.abi').toString();
var abiDef = JSON.parse(abiFile);
var ListingContract = web3.eth.contract(abiDef);
var contractInstance = ListingContract.at('0xfbb9e6b82fae498191c8c984669ad4635548b9d3');
//
contractInstance.getAverageNumber.call(
    (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res)
        }
    }
)