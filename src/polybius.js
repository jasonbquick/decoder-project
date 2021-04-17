const polybiusModule = (function () {
  const cypher = {
    a: 11,
    b: 21,
    c: 31, 
    d: 41,
    e: 51,
    f: 12, 
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55
  };
  const decode = {
    '11': 'a',
    '21': 'b',
    '31': 'c', 
    '41': 'd',
    '51': 'e',
    '12': 'f', 
    '22': 'g',
    '32': 'h',
    '42': 'i',
    '42': 'j',
    '52': 'k',
    '13': 'l',
    '23': 'm',
    '33': 'n',
    '43': 'o',
    '53': 'p',
    '14': 'q',
    '24': 'r',
    '34': 's',
    '44': 't',
    '54': 'u',
    '15': 'v',
    '25': 'w',
    '35': 'x',
    '45': 'y',
    '55': 'z'
  }
  function polybius(input, encode = true) {
    let result = "";
    const lowerInput = input.toLowerCase();
    if (encode === false){
      let message = ""
      const split = lowerInput.split(" ")
      const space = lowerInput.lastIndexOf(" ")/2
      for (let i = 0; i < split.length; i++){
        let piece = split[i]
        for (let j = 0; j < piece.length; j+=2){
          let length = piece.length;
          if (length % 2 != 0){
            return false
          }
          else {
            const first = piece[j];
            const second = piece[j + 1];
            const full = first + second
            if (full === '42'){
              message += '(i/j)'
            }
            else {
              message += decode[full]
            }
          }
        }
      }
      if (space > 0){
        result += message.slice(0, space) + " " + message.slice(space)
      }
      else result = message
    }
    else {
      for (let i = 0; i < input.length; i++){
        const letter = lowerInput[i];
        const index = cypher[letter];
        if (index === undefined){
          result += " "
        }
        else{
          result += index
        }
      }
    }
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
