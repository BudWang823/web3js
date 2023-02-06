// SPDX-License-Identifier: GPL - 3.0
pragma solidity >=0.4.16 <0.9.0; // 限定solidity编译器版本
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./WzToken.sol";
contract Exchange {
    using SafeMath for uint256;
    // 交易所收费账户
    address public feeAccount;
    // 费率
    uint256 public feePercent;
    address constant public ETHER = address(0);
    // 交易所存储货币及各种货币数量
    mapping(address => mapping(address => uint256)) public tokens;

    // 交易所授权币种
    // mapping(address => address) public allow

    constructor(address _feeAccount, uint256 _feePercent) {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
    }
    event Deposit(address token,address user,uint256 amount, uint256 balance);

    // 存储以太坊
    function depositEther() payable public {
      tokens[ETHER][msg.sender] = tokens[ETHER][msg.sender].add(msg.value);
      emit Deposit(ETHER, msg.sender, msg.value, tokens[ETHER][msg.sender]);
    }

    // 存储其他货币
    function depositToken(address _token, uint256 _amount) public {
      require(_token != ETHER);
      require(WzToken(_token).transferFrom(msg.sender, address(this), _amount));
      tokens[_token][msg.sender] = tokens[_token][msg.sender].add(_amount);
      emit Deposit(_token, msg.sender, _amount, tokens[_token][msg.sender]);
    }
}
