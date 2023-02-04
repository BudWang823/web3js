// SPDX-License-Identifier: GPL - 3.0
pragma solidity >=0.0.16 <0.9.0; // 限定solidity编译器版本

contract Wztoken {
    string public name = "WzToken";
    string public symbol = "WZT";
    uint public decimals = 18;
    uint public totalSupply;

    constructor () {
        totalSupply = 1000000 * (10 ** decimals);
    }

}
