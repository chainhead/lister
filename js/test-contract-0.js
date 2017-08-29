var Web3 = require('web3');
var fs = require('fs');
//
var web3 = new Web3(new Web3.providers.HttpProvider("http://18.xxx.xxxx.xxx:8545"));
var abiFile = fs.readFileSync('/Users/nsubrahm/wrkspc-sol/lister/lister/bin/sol/Lister.abi').toString();
var abiDef = JSON.parse(abiFile);
var ListingContract = web3.eth.contract(abiDef);
var contractInstance = ListingContract.at('0x2a30f190a7d5abd6070d9ed5ec06fb4ab410bcc0');
//
contractInstance.buildList(['B', 'C', 'D', 'E'], { from: web3.eth.accounts[0], gas: 470000 },
    (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
            contractInstance.addNumber(['A'], [2000], { from: web3.eth.accounts[0], gas: 470000 },
                (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(res);
                        contractInstance.addNumber(['B'], [2000], { from: web3.eth.accounts[1], gas: 470000 },
                            (err, res) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(res);
                                    contractInstance.addNumber(['C'], [3000], { from: web3.eth.accounts[2], gas: 470000 },
                                        (err, res) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log(res);
                                                contractInstance.addNumber(['D'], [5000], { from: web3.eth.accounts[3], gas: 470000 },
                                                    (err, res) => {
                                                        if (err) {
                                                            console.log(err);
                                                        } else {
                                                            console.log(res);
                                                            contractInstance.addNumber(['E'], [6000], { from: web3.eth.accounts[4], gas: 470000 },
                                                                (err, res) => {
                                                                    if (err) {
                                                                        console.log(err);
                                                                    } else {
                                                                        console.log(res);
                                                                        contractInstance.getRunningNumber.call(
                                                                            (err, res) => {
                                                                                if (err) {
                                                                                    console.log(err)
                                                                                } else {
                                                                                    console.log(res)
                                                                                    contractInstance.calculateAverageNumber({ from: web3.eth.accounts[0], gas: 55000 },
                                                                                        (err, res) => {
                                                                                            if (err) {
                                                                                                console.log(err)
                                                                                            } else {
                                                                                                console.log(res)
                                                                                            }
                                                                                        }
                                                                                    )
                                                                                }
                                                                            }
                                                                        )
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            )
        }
    }
)