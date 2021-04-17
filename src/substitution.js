// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const plainText = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ]
  function substitution(input, alphabet, encode = true) {
     if (!alphabet){
      return false
    }
    if (alphabet.length != 26){
      return false
    }
    for (let i = 0; i < alphabet.length; i++){
      for (let j = i + 1; j < alphabet.length; j++){
        if (alphabet[i] === alphabet[j]){
          return false
        }
      }
    }
    let result = ""
    let cypherText = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ]
    if (encode === false){
      const lowerInput = input.toLowerCase();
      for (let i = 0; i < alphabet.length; i++){
        cypherText[i] = alphabet[i];
      }
      console.log(cypherText)
      for (let j = 0; j < lowerInput.length; j++){
        const index = cypherText.indexOf(lowerInput[j]);
        if (index === -1){
          result += " "
        }
        else {
          result += plainText[index];
        }
      }
    }
    else {
      const lowerInput = input.toLowerCase()
      for (let i = 0; i < alphabet.length; i++){
        cypherText[i] = alphabet[i]
      }
      for (let j = 0; j < lowerInput.length; j++){
        const index = plainText.indexOf(lowerInput[j]);
        if (index === -1){
          result += " "
        }
        else {
          result += cypherText[index]
        }
      }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };