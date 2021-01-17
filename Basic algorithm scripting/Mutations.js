// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    let lowerCased = arr.map((element) => {
        return element.toLowerCase()
    });
    let firstSplitted = lowerCased[0].split('')
    let secondSplitted = lowerCased[1].split('')

    let bools = secondSplitted.map((letter) => {
        if (firstSplitted.includes(letter)) {
            return true;
        } else {
            return false;
        }
    })
    return !bools.includes(false);
}

console.log(mutation(["hello", "hey"]));

// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
// mutation(["ate", "date"] should return false.
// mutation(["Tiger", "Zebra"]) should return false.
// mutation(["Noel", "Ole"]) should return true.