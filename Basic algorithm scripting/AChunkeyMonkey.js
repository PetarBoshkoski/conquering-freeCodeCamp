// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size);
        finalArray.push(chunk);
    }
    return finalArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Solution 2
//   function chunkArrayInGroups(arr, size) {
//     let finalArray = [];
//     while(arr.length) {
//       finalArray.push(arr.splice(0, size));
//     }
//     return finalArray;
//   }

//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].