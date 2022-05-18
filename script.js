// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password object
var pwCriteria = {

  // Length of pw
  pwLength: 0,

  // Lowercase array
  pwLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  // Uppercase array
  pwUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  // number array
  pwNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  // special characters array
  pwCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

// Write password to #password in index.html
function writePassword() {
  // call generatePassword function
  var password = generatePassword();
  
  // set pwTxt = to textArea in index.html with the ID
  var pwTxt = document.querySelector("#password");

  // update the textArea with the new password
  pwTxt.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate new password function
function generatePassword() {

  // hold pw
  var result = "";

  // user prompt variables
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  // initialize characters
  passwordLength = 0;
  pwCriteria.pwLength = 0;
  result = "";

  // check pw length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nMust be between 8 and 128 characters.");

    // if user cancels
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      // user must enter a number
      if (!isFinite(passwordLength)) {
        alert("You didn't enter a number");
        return "Your secure password";
      }
      else {
        // check password length
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          // call the function to show criteria prompts
          showPrompts();

          // add characters = to criteria until pwLength is = user selection
          while (pwCriteria.pwLength < passwordLength) {
            // if statement to make sure the user selects at least one criteria  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one: lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              // if the user selected lowercase and more characters are needed randomly select from lowercase array amd update +1
              if (lowerCase === true && pwCriteria.pwLength < passwordLength) {
                var low = pwCriteria.pwLowerCase[Math.floor(Math.random() * 26)]
                result = result + low;
                pwCriteria.pwLength++;
              }

              // if the user selected specialCharacters and more characters are needed randomly select from specialcharacters array amd update +1           
              if (specialChar === true && pwCriteria.pwLength < passwordLength) {
                var spec = pwCriteria.pwCharacter[Math.floor(Math.random() * 32)]
                result = result + spec;
                pwCriteria.pwLength++;
              }

              // if the user selected uppercase and more characters are needed randomly select from uppercase array amd update +1
              if (upperCase === true && pwCriteria.pwLength < passwordLength) {
                var up = pwCriteria.pwUpperCase[Math.floor(Math.random() * 26)]
                result = result + up;
                pwCriteria.pwLength++;
              }

              // if the user selected numbers and more characters are needed randomly select from numbers array amd update +1
              if (numbers === true && pwCriteria.pwLength < passwordLength) {
                var numb = pwCriteria.pwNumber[Math.floor(Math.random() * 10)]
                result = result + numb;
                pwCriteria.pwLength++;
              }
            }
          }
        }
      }
    }

    // return the generated password to call function
    return result;

    // internal function to prompt for user criteria choices
    function showPrompts() {
      lowerCase = confirm("Would you like to use lower case letters?");
      upperCase = confirm("Would you like to use upper case letters?");
      numbers = confirm("Would you like to use numbers?");
      specialChar = confirm("Would you like to use any special characters?");
    }
  }
}