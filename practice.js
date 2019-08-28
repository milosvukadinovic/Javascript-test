
const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const calculator = {
  add: (a, b) => a + b,

  subtract: (a, b) => a-b,

  divide: (a, b) => a/b,

  multiply: (a, b) => a*b,
};
const caesarCipher =(text, key) => {
  let cipherText = '';
  const re = /[a-z]/;
  const lo=/[A-Z]/;
  for (let i = 0; i < text.length; i++) {
    if (re.test(text.charAt(i))) {
      cipherText += String.fromCharCode((text.charCodeAt(i)-97+key)%26+97);
    } else if (lo.test(text.charAt(i))) {
      cipherText += String
          .fromCharCode((text.charCodeAt(i)-65 + key)%26 + 65);
    } else {
      cipherText += text.charAt(i);
    }
  }
  return cipherText;
};

const caesarDeciper = (cipher, key) => {
  let output = '';
  const re = /[a-z]/;
  const lo=/[A-Z]/;
  for (let i = 0; i < cipher.length; i++) {
    if (re.test(cipher.charAt(i))) {
      output += String
          .fromCharCode((cipher.charCodeAt(i)-97 + 26 - key)%26 + 97);
    } else if (lo.test(cipher.charAt(i))) {
      output += String
          .fromCharCode((cipher.charCodeAt(i)-65 + 26 - key)%26 + 65);
    } else {
      output += cipher.charAt(i);
    }
  }
  return output;
};

const arrayAnalysis = (array) => {
  return {
    average: array.reduce((sum, a) => sum + a, 0)/array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

module.exports = {arrayAnalysis, calculator, capitalize,
  reverseString, caesarCipher, caesarDeciper};
