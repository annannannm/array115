function removeEven(arr){
    let result = [];
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i])
        }
    }
    return result
}

arr = Number(prompt("Enter numbers separated by commas:")).split(",").map(Number)
let oddNumbers = removeEven(arr);
console.log("Odd numbers:", oddNumbers)
////////////


// function removeDuplicates(arr) {
//     let uniqueArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i])
//         }
//     }
//     return uniqueArr
// }
// let arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6];
// let nondup = removeDuplicates(arr)
// console.log("Non-duplicate numbers:", nondup)
// ////////////

// function checkNum(num){
//     let arr = [];
//     for (len of arr){
//         if (len === num){
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }

// num = Number(prompt("Enter a number to check:"));
// let contains = checkNum(num);
// let trueOrFalse = contains ? "Yes" : "No";
// console.log("Does the array contain", num, "?:\n", contains, "!");
// ////////////

// function convASCII (arr){
//     let asc = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         asc.set(arr[i], arr[i].charCodeAt(0));
//     }
//     return asc;
// }

// arr = prompt("Enter characters separated by commas:").split(",");
// let asciiMap = convASCII(arr);
// console.log("ASCII values:", asciiMap);

