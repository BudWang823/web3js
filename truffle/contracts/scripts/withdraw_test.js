const WzTokenContract = artifacts.require("WzToken.sol")
const ExchangeContract = artifacts.require("Exchange.sol")

const fromWei = bn => web3.utils.fromWei(bn, "ether");
const toWei = number => web3.utils.toWei(number.toString(), "ether");

module.exports = async function (callback) {
    const accounts = await web3.eth.getAccounts()
    const wztoken = await WzTokenContract.deployed()
    const exchange = await ExchangeContract.deployed()
    const ETHER_ADDRESS = await exchange.ETHER()

    console.log('=========================================ETH===============================================')


    // await exchange.withdrawEther(toWei(5),{
    //     from: accounts[0]
    // })
    // console.log(`交易所中ETH:`,fromWei(await exchange.tokens(ETHER_ADDRESS, accounts[0])))

    console.log('=========================================WZT===============================================')


    await exchange.withdrawToken(wztoken.address, toWei(5), {
        from: accounts[0]
    })
    console.log(`交易所中WZT`,fromWei(await exchange.tokens(wztoken.address,accounts[0])))
    console.log(`wallet WZT`,fromWei(await wztoken.balanceOf(accounts[0])))









    callback()
} 