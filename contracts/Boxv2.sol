
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Boxv2{

    uint256 private value;
     
    event ValueChanged(uint256 newValue);

    function store(uint256 newValue)public {
        value=newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns(uint256){
        return value;
    }

//this is upgraded function after deployed contract
    function increment()public {
        value =value+1;

        emit ValueChanged(value);
        
    }

}