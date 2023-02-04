const StudentListStorage = artifacts.require("StudentListStorage")
module.exports = async function (cb) {
  const StudentListStorageContract = await StudentListStorage.deployed()
  await StudentListStorageContract.addList('wangzhen', 1000)
  await StudentListStorageContract.addList('yangshuyang', 1001)
  await StudentListStorageContract.addList('lumengyao', 1002)
  let res = await StudentListStorageContract.getList()
  // console.log(res)
  console.log(await StudentListStorageContract.StudentList(0))
  cb()
} 