// Code for find missing number from an array

// const arr = [0, 1, 3, 2, 4, 4, 6];
// console.log("Original array:", arr);

// const sortedArr = [...arr].sort((a, b) => a - b);
// console.log("Sorted array:", sortedArr);

// const uniqueArr = [...new Set(sortedArr)];
// console.log("Unique array:", uniqueArr);

// function findMissingNumbers(arr) {
//     const maxNum = Math.max(...arr);
//     console.log("Max number:", maxNum);

//     const missingNumbers = [];

//     for (let i = 0; i < maxNum; i++) {
//         if (!arr.includes(i)) {
//             missingNumbers.push(i);
//         }
//     }

//     return missingNumbers;
// }

// const missingNumbers = findMissingNumbers(uniqueArr);

// if (missingNumbers.length === 0) {
//     console.log("No missing numbers found!");
// } else {
//     console.log("Missing numbers:", missingNumbers.join(', '));
// }



// Flat the array
// const arr2 = [2, [3, 4], [10, [5, 6], [6, 7, 8], [2, [34, 35, [18, 19]]]]];
// const newArr = [];
// function flattenArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flattenArray(arr[i]);
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
// };
// flattenArray(arr2);
// console.log(newArr);


// Two sum problem
// const array = [3, 4, 2];
// const goal = 6;

// function twoSum() {
//     const map = new Map();

//     for (let i = 0; i < array.length; i++) {
//         const currentNumber = array[i];
//         const complement = goal - currentNumber;

//         if (map.has(complement)) {
//             const index1 = map.get(complement);
//             const index2 = i;
//             return [index1, index2];
//         }

//         map.set(currentNumber, i);
//     }

//     return -1;
// }

// console.log(twoSum());



// remove duplicated from an array
// let array2 = [1, 2, 2, 5, 3, 3, 8, 5, 5, 4, 2, 2, 2, 2];


// function removeDuplicates(arr) {
//     const newArr = [];
//     const set = new Set(arr);
//     for (const value of set) {
//         newArr.push(value);
//     }
//     return newArr;
// };

// const newArray = removeDuplicates(array2);
// console.log("Original sorted Array :", array2.sort((a, b) => a - b));
// console.log("Unique sorted Array:", newArray.sort((a, b) => a - b));



// check two strings are anagram
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     str1 = str1.split('').sort().join('');
//     str2 = str2.split('').sort().join('');

//     if (str1 === str2) return true;
//     return false;
// }
// const str1 = 'interval';
// const str2 = 'etvnlair';
// const result = isAnagram(str1, str2);
// console.log(result);