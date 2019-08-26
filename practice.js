
const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};
const caesarCipher =(text, key) => {
  let cipherText = '';
  const re = /[a-z]/;

  for (let i = 0; i < text.length; i++) {
    if (re.test(text.charAt(i))) {
      cipherText += String.fromCharCode((text.charCodeAt(i)-97+key)%26+97);
    } else {
      cipherText += text.charAt(i);
    }
  }
  return cipherText;
};

const caesarDeciper = (cipher, key) => {
  let output = '';
  const re = /[a-z]/;
  for (let i = 0; i < cipher.length; i++) {
    if (re.test(cipher.charAt(i))) {
      output += String
          .fromCharCode((cipher.charCodeAt(i)-97 + 26 - key)%26 + 97);
    } else {
      output += cipher.charAt(i);
    }
  }
  return output;
};

const arrayAnalysis = (array) => {
  return {
    average: Math.round(1000 * array.reduce((sum, a
    ) => sum + a, 0)/array.length)/1000,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = { arrayAnalysis, calculator, capitalize,
reverseString, caesarCipher, caesarDeciper };
