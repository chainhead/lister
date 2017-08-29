# lister
Simple Solidity contract to maintain lists.

** Work in Progress **

# Contract
This contract is an implementation of the Average Salary game as described here. 

## Abstract
The following are the steps to be followed to interact with this contract:

1. Create an empty list. 
2. Add an arbitrary number of persons to this list.
3. Every member inputs a number that adds to a running total.
4. After all members are added, an average over this running total is calculated.

# Methods
The following is a brief description of the methods that can be invoked by a `web3.js` client.

**`constructor`**

**`buildList(bytes32[] members)`**

**`addNumber(bytes32 member, uint256 number)`**

**`getRunningNumber()`**

**`getAverageNumber()`**

# Usage
This implementation was developed with `ethereum-testrpc` deployed on an AWS EC2 instance. Therefore, the `web3.js` client uses that IP address. One can also use `http://localhost:8545` for a local installation. Start the installation with `node_modules/.bin/testrpc` from the installation location of `ethereum-testrpc`.

## Create a new list
After setting the IP address in `deploy-contract.js`, run `node deploy-contract.js` on command line. The output will be the address (e.g. `0x2a30f190a7d5abd6070d9ed5ec06fb4ab410bcc0`) where this contract was saved on blockchain. We now have an empty list whose owner is `A`.

## Build the list, add numbers and calculate average
In `test-contract-0.js` set the IP address of the running `ethereum-testrpc` installation and use the contract address generated in previous step. Run `node test-contract-0.js` to submit seven transactions that include 
* Addition of members to the list created above 
* Adding numbers from each member
* Calculation of average.

The output will be six transaction hashes followed by one line for the console output of running total accumulated so far. The last line is the transaction hash of average calculation.

For example,
```
0xb61c8d24d3e69b2a8173c72eaacfe6ec46b565c76e42659f5cb2dcacd39c4c6a
0xc08f67e266892213a1ff92f58bcde2c8e8c473557c24d3d86b434a22000d2680
0xf3f132f8424fd8d70fd390f19c5d2b032725ecb0f12dea8df154abed9f7766c9
0x949daf483c0364bbb10ea40a42127a2c01f51ad52b65b263a86791b20a6b7eda
0xeb229bdd5a250cfcfb9e11a9d1333d2f3d2273392b552669ed64a0361134bfba
0x8219d3d50a5537a847e7b63f81eda1fee8784b8706f32624d8bf9d88000eb988
{ [String: '19000'] s: 1, e: 4, c: [ 19000 ] }
0x86c32c22d690a6f7af61b427d408b770a3baa6255cd42a33df22ce09ab72349c
```

## Get average
To get average, run `node test-contract-1.js` with updated IP address and contract address. Since this is a method `call` and not a `sendTransaction`, there is only console log and no transaction output. For example,
```
{ [String: '3600'] s: 1, e: 3, c: [ 3600 ] }
```

# Known bugs

1. Random number is hard-coded. Using randao is an option.
2. Any list member can initiate addition of numbers. The addition should be initated by list owner.
3. Calculation of average happens if all members have not provided their numbers for addition.
4. Running total is saved on the blockchain and therefore, publicly visible.
