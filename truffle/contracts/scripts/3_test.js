const WzToken = artifacts.require("WzToken")
module.exports = async function (cb) {
  const WZT = await WzToken.deployed()
  console.log(await WZT.name())
  cb()
} 
