const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))
// console.log(Web3.modules)
// console.log(Web3.version)
// web3.eth.getNodeInfo().then(console.log)
// web3.eth.net.isListening().then(console.log)
web3.eth.net.getId().then(console.log)

// console.log(web3.eth.net)

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const address = '0x1699Bca940916f3493301F1A4e5DF799aD147f4A'
const contract = new web3.eth.Contract(abi, address).methods.getnumber
function callback(err, res) {
  console.log('err', err)
	console.log('res',res)
	console.log(typeof res)
	console.log(web3.utils.isBigNumber(res))
}
// const batch = new web3.BatchRequest()
web3.eth.getBalance('0xB56F15cb43fdd32835DB6AA1A1DF6B5678d431e4').then(res => {
	console.log(res, '-----')
})
// batch.add(web3.eth.getBalance.request('0xB56F15cb43fdd32835DB6AA1A1DF6B5678d431e4','latest',callback))
// batch.add(contract.methods.getBlockNumber())
// batch.execute()
