// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }
  
  console.log(fearNotLetter("abce"));

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.