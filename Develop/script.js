// Assignment code here
var generateBtn = document.querySelector("generate");

// Create password object
var pswdCriteria = {
  // password length
  pswdLength: 0,
  // lower and upper case letter arrays
  pswdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  pswdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  // password numbers element array
  pswdNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //special characters array
  pswdCharacters: [" ", "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // call function
  var password = generatePassword();
  // set passwordText = index textArea 
  var passwordText = document.querySelector("#password");
  // update the textArea with generated password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
