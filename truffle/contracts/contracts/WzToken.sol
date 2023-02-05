// SPDX-License-Identifier: GPL - 3.0
pragma solidity >=0.4.16 <0.9.0; // 限定solidity编译器版本
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract WzToken {
using SafeMath for uint256; //为了uint256扩展sub  add 方法
    string public name = "WzToken";
    string public symbol = "WZT";

    uint256 public decimals = 18;
    uint256 public totaSupply;
    mapping(address => uint) public balanceOf;
    constructor() {
        totaSupply = 1000000 * (10**decimals);
        // 部署账号
        balanceOf[msg.sender] = totaSupply;
    }
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    function transfer(address _to, uint _value) public returns(bool) {
        require(_to != address(0));
        _transfer(msg.sender, _to, _value);
        return true;
    }
    function _transfer(address _form, address _to, uint _value) internal returns(bool) {
        require(balanceOf[_form] >= _value);
        balanceOf[_form] = balanceOf[_form].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        emit Transfer(_from, _to, _value);

    }
}
