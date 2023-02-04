// SPDX-License-Identifier: GPL - 3.0
pragma solidity >=0.0.16 <0.9.0; // 限定solidity编译器版本

contract StudentListStorage {
    // 结构体
    struct Student {
        uint id;
        string name;
        uint age;
        address account;
    }
    // 创建动态数组
    Student[] public StudentList; // 自动生成getter方法


    function addList(string memory _name, uint256 _age) public returns (uint){
        uint count = StudentList.length;
        uint index = count + 1;
        StudentList.push(Student(index, _name, _age, msg.sender));
        return StudentList.length;
    }
    function getList() public view returns (Student[] memory){
        return StudentList;
    }

}
