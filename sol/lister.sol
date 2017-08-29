pragma solidity ^0.4.11;
// @title lister - calculate average with zero knowledge of numbers
//
// Begin contract defintion
contract Lister {

    // A list owned by an individual and containing multiple numbers.
    // List is updated by adding number pushed by members and a random number generated for list owner only.
    struct ListMembers {
        bytes32 listOwner;
        bytes32[] members;
        uint256 randomNumber;
        uint256 averageNumber; 
        uint256 runningNumber;  
    }

    // Instance of the ListMemebers struct
    ListMembers public lm;
    mapping (bytes32 => bool) public addedMembers;

    // Constructor to initialise the ListMembers struct
    function Lister(bytes32 listOwner) {
        lm.listOwner = listOwner;
        //lm.members.length = 1;
        //lm.members[0] = listOwner;
        lm.members.push(listOwner);
        lm.randomNumber = 1000;
        lm.averageNumber = 0;
        lm.runningNumber = 0;
    }
 
    // Add members to the ListMembers struct
    function buildList(bytes32[] listMembers) {
        lm.members.length = listMembers.length + 1; // Will this overwrite the constructor settings? Hence, the next line.
        for (uint i = 0; i < listMembers.length; i++) {
            //lm.members[i+1] = listMembers[i];
            lm.members.push(listMembers[i]);
        }
    }

    // Add number provided by a member. If member is owner, add random number also.
    function addNumber(bytes32 member, uint256 number) {
        if (memberAdded(member) == true) {
                return; 
            } else {
                addedMembers[member] = true;
                if (memberIsOwner(member) == true) {
                    lm.runningNumber += lm.randomNumber + number;
                } else {
                    lm.runningNumber += number;
                }
            }
    }

    // Check if member has already added a number
    function memberAdded(bytes32 member) returns (bool) {
        return addedMembers[member];
    }

    // Check if member is the owner of the list
    function memberIsOwner(bytes32 member) returns (bool) {
        bool owner = true;

        if (lm.listOwner==member) {
            owner = true;
        } else {
            owner = false;
        }
        return owner;
    }

    // Calculate average of all numbers in the list only if all members have been added to the list.
    function calculateAverageNumber() {
        if (allMembersAdded() == false) {
            return ;
        }
        
        uint256 numMembers = uint256(lm.members.length);
        uint256 sampleSum = lm.runningNumber - lm.randomNumber;
        uint256 avgSum = sampleSum / numMembers;
        lm.averageNumber = avgSum;
    }

    // Check if all members are added. Average will be calculated only if all members are added.
    function allMembersAdded() returns (bool) {
        bool added = true;
        for (uint i = 0; i < lm.members.length; i++) {
            added = added && addedMembers[lm.members[i]];
        }

        return added;
    }

    // Get the running sum of all numbers. This function will be omitted from the final version.
    function getRunningNumber() constant returns (uint256) {
        return lm.runningNumber;
    }

        // Get the average of all numbers in this list.
    function getAverageNumber() constant returns (uint256) {
        return lm.averageNumber;
    }
}