const StudentStorage = artifacts.require("StudentStorage.sol")
module.exports = function(deployer) {
  deployer.deploy(StudentStorage)
}