// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    let splitted = str.split("")
    let replaced = ""
    let consonantArray = ""
  
    if(isVowel(splitted[0])) {
          replaced = str.concat("way")
        }
        
    for(let i = 0; i < splitted.length; i++) {
        if(isVowel(splitted[i])) {
         break;
        }
        else {
          consonantArray = consonantArray.concat(splitted[i])
          replaced = str.replace(consonantArray, "")
          replaced = replaced.concat(consonantArray).concat("ay")
        }
    }
    
    return replaced
  }
  
  const isVowel = (letter) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(letter)
  }
  
  console.log(translatePigLatin("algorithm"));

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".