// declare variables
var lengthPerference = 0;
var uppercasePreference = true;
var lowercasePreference = true;
var numericPreference = true;
var specialCharPreference = true;
var password = "";

var specialCharacters = ["!","@", "#", "$", "%","&", "*", "_", "-","?"];



var generatePassword = function() {

  // prompt asking for character length
  lengthPerference = parseInt(window.prompt("How long do you want your password to be? Please enter number between 8 and 128."))
  if (!Number.isInteger(lengthPerference) || lengthPerference < 8 || lengthPerference > 128) {
    alert("Error: please enter a valid numeric value between 8 and 128");
  }
  while (!(Number.isInteger(lengthPerference)) || lengthPerference < 8 || lengthPerference > 128) {
    lengthPerference = parseInt(window.prompt("Please enter number between 8 and 128."))
    console.log(lengthPerference);
    if (!lengthPerference) //why not cancelling??
    return ;
  }


  // prompt asking for uppercase
  uppercasePreference = window.prompt("Would you like uppercase letters in your password? Please enter yes or no.");
  if (uppercasePreference !== "yes" && uppercasePreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (uppercasePreference !== "yes" && uppercasePreference !== "no") {
    uppercasePreference = window.prompt("Would you like uppercase letters in your password? Please enter yes or no.");
  }

  // prompt asking for lowercase
  lowercasePreference = window.prompt("Would you like lowercase letters in your password? Please enter yes or no.");
  if (lowercasePreference !== "yes" && lowercasePreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (lowercasePreference !== "yes" && lowercasePreference !== "no") {
    lowercasePreference = window.prompt("Would you like lowercase letters in your password? Please enter yes or no.");
  }

  // prompt asking for numbric
  numericPreference = window.prompt("Would you like numbers in your password? Please enter yes or no.");
  if (numericPreference !== "yes" && numericPreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (numericPreference !== "yes" && numericPreference !== "no") {
    numericPreference = window.prompt("Would you like numbers in your password? Please enter yes or no.");
  }
  //prompt asking for special characters
  specialCharPreference = window.prompt("Would you like special characters in your password? Please enter yes or no.");
  if (specialCharPreference !== "yes" && specialCharPreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (specialCharPreference !== "yes" && specialCharPreference !== "no") {
    specialCharPreference = window.prompt("Would you like special characters in your password? Please enter yes or no.");
  }
  if (uppercasePreference === "yes" || lowercasePreference === "yes" || numericPreference === "yes" || specialCharPreference === "yes") {
    console.log(lengthPerference);
    for (var i = 0; i <= lengthPerference; i++) {
  
      //generates a random integer between 1-25, and then shifts the random number by +97 into the lowercase section of ASCII value)
      //appends the randomly generated character to the password string
      if (lowercasePreference === "yes") {
        password = password + String.fromCharCode(Math.floor(Math.random()*26 + 97));
        i++
      }
      if (uppercasePreference === "yes") {
        password = password + String.fromCharCode(Math.floor(Math.random()*26 + 65));
      }
      if (numericPreference === "yes") {
        password = password +String.fromCharCode(Math.floor(Math.random()*10 + 48));
      }
      if (specialCharPreference === "yes") {
        password = password + specialCharacters[Math.floor(Math.random()*10)];
      }
    }
  } else {
    window.alert("Please ensure at least ONE of the prompts is answered yes") 
  }
  console.log(password);
  return password;
}




// Selects the generate button!
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //displays the password generated in the password box 
  var password = generatePassword();
  console.log(password,"---","---");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//first prompt appears when generate button is clicked
generateBtn.addEventListener("click", writePassword);

