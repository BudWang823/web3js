const WzToken = artifacts.require("WzToken")
const fromWei = bn => web3.utils.fromWei(bn, 'ether')
const toWei = number => web3.utils.toWei(number.toString(), 'ether')
const users = [
  '0xF396E0CA10f1600C5C1f6B8837E76468fe941071',
  '0xDE3AF36fa0d92d063435ECD245771eCB6e85e377',
]
module.exports = async function (callback) {
  const token = await WzToken.deployed()
  const balance = await token.balanceOf(users[0])
  console.log('第1个账号余额',fromWei(balance))

  // 转账
  await token.transfer(users[1],toWei(100), { 
    from: users[0]
  })
  console.log('--------tranfer:完成')

  console.log('第1个账户余额', fromWei(await token.balanceOf(users[0])))
  console.log('第2个账户余额', fromWei(await token.balanceOf(users[1])))









  callback()
} 
