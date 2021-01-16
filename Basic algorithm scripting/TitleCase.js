// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    let capitalized = words.map((word) => {
        return word.replace(word[0], word[0].toUpperCase())
    })
    return capitalized.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Test cases

// titleCase("I'm a little tea pot") should return a string.

// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

// titleCase("sHoRt AnD sToUt") should return Short And Stout.

// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.


/* 
Solution 2
function titleCase(str) {
    let words = str.split(" ");
    let lowercased = [];
    let capitalized = [];
    
    words.map((word) => {
      let lowerCased = word.toLowerCase();
      return lowercased.push(lowerCased);
    })
    lowercased.map((word) => {
      let finalWord = word.charAt(0).toUpperCase().concat(word.slice(1));
      capitalized.push(finalWord);
    })
    return capitalized.join(" ");
  }
  */