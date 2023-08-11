// declare variables
var lengthPerference = "";
var pwLowercase = true;
var pwUppercase = true;
var pwNumeric = true;
var pwSpecialChar = true;

function firstPrompt() { 
  do {
  lengthPerference = window.prompt("How long do you want your password to be? (Please enter number between 8 and 128.)");
  if (isNotWholeNumber(lengthPerference) || lengthPerference < 8 || lengthPerference > 128) {
    alert("Please enter a valid numeric value between 8 and 128");
  }
  } while (isNaN(lengthPerference) && lengthPerference >=8 && lengthPerference <=128);
} 




// Selects the generate button!
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //displas the password generated in the password box 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//first prompt appears when generate button is clicked
generateBtn.addEventListener("click", firstPrompt);

