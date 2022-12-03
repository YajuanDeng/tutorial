const students = [
  { name: '小李', score: 89 },
  { name: '小王', score: 84 },
  { name: '小红', score: 69 },
  { name: '小明', score: 57 },
  { name: '小军', score: 82 },
  { name: '小张', score: 96 },
  { name: '小赵', score: 73 },
  { name: '小吴', score: 52 },
  { name: '小刘', score: 82 },
];

// 筛选没有及格的人
// function getFailStudents(allStudents) {
//  return allStudents.filter((stu) => stu.score < 60)
// }
// console.log(getFailStudents(students));

// function sortAllStudents(allStudents) {
//   return allStudents.sort((a,b) => b.score - a.score)
// }
// console.log(sortAllStudents(students));

// function getScoreSum(allStudents) {
//   let sum = 0;
//   for (let i = 0; i < allStudents.length; i++) {
//     const element = allStudents[i];
//     sum += element.score
//   }
//   return sum
// }
// console.log(getScoreSum(students));


// function sum (allStudents) {
//   return allStudents.reduce((acc, cur) => acc + cur.score, 0);
// }
// console.log(sum(students));

// 修改成绩
// {
//   function changScore(allStudents, scoreChange) {
//     //return allStudents.map((stu) => ({...stu, score: stu.score + scoreChange}))
//     return allStudents.map((stu) => {
//       stu.score = scoreChange(stu.score)
//       return stu;
//     })
//   }
//   // console.log(changScore(students, 2));
//   console.log(changScore(students, (e) => e + 2));

// }

// {
//   // 查找每个同学的分数
//   function findScore(allStudents,str) {
//     for (let i = 0; i < allStudents.length; i++) {
//       const element = allStudents[i];
//       if(element.name === str) {
//         return element
//       } 
//     }
//     return console.log("没有这个人");
//    //return allStudents.find((stu) => stu.name === str) 
//   }
//   console.log(findScore(students,"小邓"));
// }

// 计算出及格学生的平均分
{
  function findScore(allStudents) {
    //const array1 = allStudents.filter((stu) => stu.score > 60);
    const array1 = allStudents.filter((stu) => stu.name != "小王");
    const sum = array1.reduce((acc, cur) => acc + cur.score, 0);
    return sum
    //return average = sum/(array1.length)
  }
  console.log(findScore(students));
}

