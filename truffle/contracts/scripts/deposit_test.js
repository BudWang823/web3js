const WzTokenContract = artifacts.require("WzToken.sol")
const ExchangeContract = artifacts.require("Exchange.sol")

const fromWei = bn => web3.utils.fromWei(bn, "ether");
const toWei = number => web3.utils.toWei(number.toString(), "ether");

module.exports = async function (callback) {
    const accounts = await web3.eth.getAccounts()
    const wztoken = await WzTokenContract.deployed()
    const exchange = await ExchangeContract.deployed()
    const ETHER_ADDRESS = await exchange.ETHER()
    // 存入eth
    // await exchange.depositEther({
    //     from: accounts[0],
    //     value: toWei(10)
    // })
    // 查询转入的以太坊数量
    // const res = await exchange.tokens(ETHER_ADDRESS,accounts[0])
    // console.log(fromWei(res))
    // console.log(fromWei(await wztoken.balanceOf(accounts[0])))




    // 存入WZT
    // 授权
    await wztoken.approve(exchange.address,toWei(100000), {
        from: accounts[0]
    })
    // 查询授权额度
    console.log(`查询授权额度--${exchange.address}:`,fromWei(await wztoken.allowance(accounts[0],exchange.address)))
    // 转账到 交易所
    await exchange.depositToken(wztoken.address,toWei(100000), {
        from: accounts[0]
    })
    // 查询交易所拥有wzt额度
    console.log(`查询交易所拥有wzt额度`,fromWei(await exchange.tokens(wztoken.address, accounts[0])))
    // 查询钱包wzt余额
    console.log(`查询钱包wzt余额`,fromWei(await wztoken.balanceOf(accounts[0])))














    callback()
}