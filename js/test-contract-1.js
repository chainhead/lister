var Web3 = require('web3');
var fs = require('fs');
//
var web3 = new Web3(new Web3.providers.HttpProvider("http://18.xxx.xxx.xxx:8545"));
var abiFile = fs.readFileSync('Lister.abi').toString();
var abiDef = JSON.parse(abiFile);
var ListingContract = web3.eth.contract(abiDef);
var contractInstance = ListingContract.at('0x2a30f190a7d5abd6070d9ed5ec06fb4ab410bcc0');
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