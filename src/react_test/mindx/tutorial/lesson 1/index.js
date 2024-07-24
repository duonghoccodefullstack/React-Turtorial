//1 
// cach 1
// const square = a => a*a
// console.log(square(4)); 
// console.log('------ Câu 1 ------');
// // ít nhất 3 cách sử dụng arrow function
// // cách 1
// // const squareNumber = (number) => {
// //     // code...
// //     return number * number;
// // }
// // cách 2
// // const squareNumber = (number) => number * number;
// // cách 3
// const squareNumber = number => number * number;
// console.log(squareNumber(4));
// console.log('------ Câu 2 ------');
// const str = 'Hello world, quần jean màu xanh!';
// const findStr = 'jean màu xanh!';
// /**
//  * Khi tìm kiếm 1 chuỗi con, thì không phân biệt hoa, thường, dấu cách
//  * How?
//  *      - viết hoa hết để thực hiện tìm kiểm hoặc viết thường hết
//  *      - bắt buộc phải loại bỏ hết dấu cách thừa trong việc tìm kiếm
//  */
// const checkIncludeStr = (strParent, strChild) => {
//     return strParent.toLowerCase().trim().includes(strChild.toLowerCase().trim());
// }
// const result = checkIncludeStr(str, findStr);
// console.log(result);
// console.log('------ Câu 3 ------');

// const arr = ["one", "two", "three"]
// const aRR = []
// const prefix = 'number'
//     for (let i = 0 ; i < arr.length ; i++ ) {
//         const e =   arr[i];
//         const newArr = `${prefix}:${e}`
//         aRR.push(newArr)
//     }

    

// console.log(aRR);
// console.log('------ Câu 4 ------');

// const doubleArray = (array) => {
//     const resultArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const e = array[i];
//         resultArray.push(e * 2);
//     }
//     return resultArray;
// }
// console.log(doubleArray(arrNumber4));
// console.log('------ Câu 5 ------');
// const arrNumber4 = [1, 2, 3, 4, 5, 6,8]

// const doubleArray = (array) => {
//     const resultArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const e = array[i];
//         if (array[i] % 2 !== 0) {
//             resultArray.push(e);
//         }
       
//     }
//     return resultArray;
// }
// console.log(doubleArray(arrNumber4));