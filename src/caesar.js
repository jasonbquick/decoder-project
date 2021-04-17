const caesarModule = (function () {
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
