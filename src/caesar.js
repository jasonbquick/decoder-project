// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//zebra magazine

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    let result = "";
    const lowerInput = input.toLowerCase();
    if (encode === false){
      for (let i = 0; i < lowerInput.length; i++){
        const letter = lowerInput[i];
        const index = alphabet.indexOf(letter);
        const newIndex = index - shift;
        if (index === -1){
          result += letter
        }
        else if (newIndex > 25){
          const endOfIndex = newIndex - 26;
          result += alphabet[endOfIndex];
        }
        else if (newIndex < 0) {
          const endOfIndex = newIndex + 26;
          result += alphabet[endOfIndex];
        }
        else {
          result += alphabet[newIndex]
        }
      }
    }
    else {
    for (let i = 0; i < lowerInput.length; i++){
      const letter = lowerInput[i];
      const index = alphabet.indexOf(letter);
      const newIndex = index + shift;
      if (index === -1){
        result += letter
      }
      else if (newIndex > 25){
        const endOfIndex = newIndex - 26;
        result += alphabet[endOfIndex];
      }
      else if (newIndex < 0){
        const endOfIndex = newIndex + 26;
        result += alphabet[endOfIndex];
      }
      else {
        result += alphabet[newIndex]
      }
    }
  }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
