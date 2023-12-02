const passWordBox = document.querySelector("input");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const specialChar = "!@#$%^&*";

const allChars = upperCase + lowerCase + number + specialChar;

const createPassword = () => {
  let passWord = "";
  passWord += upperCase[Math.floor(Math.random() * upperCase.length)];
  passWord += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passWord += number[Math.floor(Math.random() * number.length)];
  passWord += specialChar[Math.floor(Math.random() * specialChar.length)];

  while (length > passWord.length) {
    passWord += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passWordBox.value = passWord;
};

const copyPass = () => {
  passWordBox.select();
  navigator.clipboard.writeText(passWordBox.value);
};
