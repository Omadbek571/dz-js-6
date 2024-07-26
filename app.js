// 1-savol

// let num = +prompt("Iltimos son kiriting");
// let newArr = [];

// for (let i = 1; i <= num; i++) {
//     newArr.push(i)

// }

// console.log(newArr);


// 2-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let juftArr = []
// let toqArr = []

// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         juftArr.push(arr[i])
//     } else {
//         toqArr.push(arr[i])
//     }
// }

// for (let i = 0; i < juftArr.length; i++) {
//     sum1 += juftArr[i]
// }

// for (let i = 0; i < toqArr.length; i++) {
//     sum2 += toqArr[i]

// }

// let natija = [sum1 , sum2]

// console.log(natija);



// 3-savol

// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]

// let sum1 = 0
// let sum2 = 0

// for (let i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }

// for (let i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i]
// }

// let natija = sum1 + sum2;

// console.log(natija);


// 4-savol

// let arr = [1,2,3,4,5]
// let newArr = []

// for (let i = arr.length -1; i >= 0; i--) {
//     newArr.push(arr[i])
// }

// console.log(newArr);


// 5-savol

// let arr = [1, 2, 3, 4, 5]
// let sum = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < sum) {
//         sum = arr[i] * arr[i]
//     }

// }

// let natija = Math.pow(sum, 4)


// console.log(natija);


// 1dan 13 talik 


// 1-savol

// let arr = [1, 2, 3, 4, 5]
// let maxArr = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxArr) {
//         maxArr = arr[i]
//     }

// }

// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== maxArr) {
//         newArr.push(arr[i])
//     }

// }


// let natija = newArr[0]

// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] > natija) {
//         natija = newArr[i]
//     }

// }

// console.log(natija);


// 2-savol

// let arr = ["salom","salom","salom","salom", 1,2,3,4,5,6]
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//         newArr.push(arr[i])
//     }

// }


// console.log(newArr.length);


// 3-savol

// let arr = [1, 2, 3, 44, 5, 6, 7, 89, 9, 1, 0]

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = arr[i + 1]
//     } 

// }

// console.log(arr);

// 4-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = []

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 == 1) {
//         arr[i] = 0
//     }
//     newArr.push(arr[i])

// }

// console.log(newArr);


// 5-savol

// let arr = [1,2,3,4,5]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i

// }

// console.log(arr);



// 6-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 !== 0) {
//         newArr.push(arr[i])
//     }

// }


// console.log(newArr);


// 7-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;

// for (const iterator of arr) {
//     sum += iterator
// }


// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] / sum)

// }

// console.log(newArr);

// 8-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = arr.length -1; i > 0; i--) {
//     arr[i] = arr[i - 1]

// }

// arr[0] = arr[0];

// console.log(arr);



// 9-savol

// let arr = [1, 2, -3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = []

// for (const iterator of arr) {
//     if (iterator > 0) {
//         newArr.push(iterator)
//     }
// }

// console.log(newArr.length);


// 10-savol

// let arr = [-1, 2, -3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0

// for (const iterator of arr) {
//     if (iterator < 0) {
//         sum += iterator
//     }
// }

// console.log(sum);


// 11-savol

// let arr = ["salom", "alik"]
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].charAt(0))

// }

// console.log(newArr);


// 12-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= arr[i]
    
// }
// console.log(arr);


// 13-savol

// let arr = ["short", "medium", "a very long string", "tiny", "longer"];

// let kichkinasi = arr[0];
// let kottasi = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length < kichkinasi.length) {
//         kichkinasi = arr[i];
//     }
//     if (arr[i].length > kottasi.length) {
//         kottasi = arr[i];
//     }
// }

// console.log(`Eng uzun satr: ${kottasi}`);
// console.log(`Eng qisqa satr: ${kichkinasi}`);


