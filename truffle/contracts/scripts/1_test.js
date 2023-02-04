const StudentStorage = artifacts.require("StudentStorage")
module.exports = async function (cb) {
  const StudentStorageContract = await StudentStorage.deployed()
  await StudentStorageContract.setData('wangzhen', 1000)
  let res = await StudentStorageContract.getData()
  console.log(res)
  cb()
} 