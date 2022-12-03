const arr = [1,2,3,5,7];

// console.log(arr.map((e) => e * 2)); 

// 用函数实现map功能
// const myMap = (array,func) => {
//   const result = [];
//   for(let i =0; i < array.length; i++) {
//     const element = array[i];
//     result.push(func(element));
//   }
//   return result;
// };
// console.log(myMap(arr,(e) => e*2));

// 找到数组中大于4的数
//const result = [];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if(element > 4) {
//     result.push(element);
//   } 
// }
//console.log(result);

// const myFilter = (arr, func) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(func(element)) {
//       result.push(element)
//     }
//   }
//   return result;
// };
//console.log(myFilter(arr,(e)=> e>2));

//找到一个大于2的值
// let result;
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element>2) {
//     result = element;
//     break
//   }
// }
// console.log(result);

// const myFind = (arr,func) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(func(element)) {
//       return element
//     }
//   }
// };
// console.log(myFind(arr,(e) => e>4));

// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   res = res + element;
// }
// console.log(res);


const myReducer = (arr,func,initVal) => {
  let acc = initVal;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    acc = func(acc, element)
  }
  return acc;
}
console.log(myReducer(arr, (acc,cur) => acc + cur, 0 ));