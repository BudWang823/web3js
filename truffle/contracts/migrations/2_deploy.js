const StudentListStorage = artifacts.require("StudentListStorage.sol")
module.exports = function(deployer) {
  deployer.deploy(StudentListStorage)
}