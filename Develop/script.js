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

// function to generate password 
function generatePassword() {
  // password result hold
  var result = "";

  // user input variable choices
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialCharacters;

  // initialize
  passwordLength = 0;
  pswdCriteria.pswdLength = 0;
  result = "";
}
// check pw length
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("How many character would you like your password to be? \nMust be between 8 and 128 characters.");
}
// run if user chooses cancel
if (passwordLength === null) {
  return "Your secure password";
}
// check to make sure field is not left blank
else {
  if (!isFinite(passwordLength)) {
    alert("You didn't enter a number");
    return "Your secure password";
  }
}
// check pw length
else {
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
    return "Your secure password.";
  }
  else {

  }
}

// user prompts functions
function showPrompts() {
  lowerCase = confirm("Would you like to use lower case letters?");
  upperCase = confirm("Would you like to use upper case letters?");
  numbers = confirm("Would you like to use numbers?");
  specialCharacters = confirm("Would you like to use special characters?");
}