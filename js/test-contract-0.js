var Web3 = require('web3');
var fs = require('fs');
//
var web3 = new Web3(new Web3.providers.HttpProvider("http://ip.address:8545"));
var abiFile = fs.readFileSync('Lister.abi').toString();
var abiDef = JSON.parse(abiFile);
var ListingContract = web3.eth.contract(abiDef);
var contractInstance = ListingContract.at('0xfbb9e6b82fae498191c8c984669ad4635548b9d3');
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
                        contractInstance.addNumber(['B'], [3000], { from: web3.eth.accounts[1], gas: 470000 },
                            (err, res) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(res);
                                    contractInstance.addNumber(['C'], [4000], { from: web3.eth.accounts[2], gas: 470000 },
                                        (err, res) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log(res);
                                                contractInstance.addNumber(['D'], [4000], { from: web3.eth.accounts[3], gas: 470000 },
                                                    (err, res) => {
                                                        if (err) {
                                                            console.log(err);
                                                        } else {
                                                            console.log(res);
                                                            contractInstance.addNumber(['E'], [7000], { from: web3.eth.accounts[4], gas: 470000 },
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