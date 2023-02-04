const WzToken = artifacts.require("WzToken")
module.exports = async function (cb) {
  const token = await WzToken.deployed()
  console.log(token)
  // console.log(await token.name())
  // console.log(await token.symbol())
  // console.log(await token.decimals())
  // console.log(await token.totalSupply())
  cb()
}
