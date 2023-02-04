const WzToken = artifacts.require("WzToken.sol")
module.exports = function(deployer) {
  deployer.deploy(WzToken)
}