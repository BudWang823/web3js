// SPDX-License-Identifier: GPL - 3.0
pragma solidity >=0.4.16 <0.9.0; // 限定solidity编译器版本

contract WzToken {
    string public name = "WzToken";
    string public symbol = "WZT";

    uint256 public decimals = 18;
    uint256 public totaSupply;

    constructor() {
        totaSupply = 1000000 * (10**decimals);
    }
}
