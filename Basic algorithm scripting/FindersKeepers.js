// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {

    let num = 0;
    num = arr.find(func);
    if (num) {
        return num;
    } else {
        return undefined;
    }
}


// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/*

Solution 2

let num = 0;
  let i = 0;
  while (i < arr.length) {
    if(func(arr[i]) === true) {
      num = arr[i];
      break;
    }
    else {
      i++;
      num = undefined;
    }
  }  
  return num;
  */