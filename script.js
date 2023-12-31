var generatePassword = function () {

  //declare variables
  var lengthPreference = 0;
  var uppercasePreference = "";
  var lowercasePreference = "";
  var numericPreference = "";
  var specialCharPreference = "";
  var passwordDepo = "";
  var firstPasswordDepoChars = "";
  var remainingPasswordDecoChars = "";

  var almostPassword = [];
  var promptCounter = 0;
  var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];

  // prompt asking for character length
  lengthPreference = parseInt(window.prompt("How long do you want your password to be? Please enter number between 8 and 128."))
  if (!Number.isInteger(lengthPreference) || lengthPreference < 8 || lengthPreference > 128) {
    alert("Error: please enter a valid numeric value between 8 and 128");
  }
  while (!(Number.isInteger(lengthPreference)) || lengthPreference < 8 || lengthPreference > 128) {
    lengthPreference = parseInt(window.prompt("Please enter number between 8 and 128."))
    if (!lengthPreference)
      return;
  }


  // prompt asking for uppercase
  uppercasePreference = window.prompt("Would you like uppercase letters in your password? Please enter yes or no.").toLowerCase();
  if (uppercasePreference !== "yes" && uppercasePreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (uppercasePreference !== "yes" && uppercasePreference !== "no") {
    uppercasePreference = window.prompt("Would you like uppercase letters in your password? Please enter yes or no.");
    if (!uppercasePreference)
      return;
  } if (uppercasePreference === "yes") {
    promptCounter++;
  }

  // prompt asking for lowercase
  lowercasePreference = window.prompt("Would you like lowercase letters in your password? Please enter yes or no.").toLowerCase();
  if (lowercasePreference !== "yes" && lowercasePreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (lowercasePreference !== "yes" && lowercasePreference !== "no") {
    lowercasePreference = window.prompt("Would you like lowercase letters in your password? Please enter yes or no.");
    if (!lowercasePreference)
      return;
  } if (lowercasePreference === "yes") {
    promptCounter++;
  }

  // prompt asking for numbric
  numericPreference = window.prompt("Would you like numbers in your password? Please enter yes or no.").toLowerCase();
  if (numericPreference !== "yes" && numericPreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (numericPreference !== "yes" && numericPreference !== "no") {
    numericPreference = window.prompt("Would you like numbers in your password? Please enter yes or no.");
    if (!numericPreference)
      return;
  } if (numericPreference === "yes") {
    promptCounter++;
  }

  //prompt asking for special characters
  specialCharPreference = window.prompt("Would you like special characters in your password? Please enter yes or no.").toLowerCase();
  if (specialCharPreference !== "yes" && specialCharPreference !== "no") {
    alert("Error: please enter yes or no");
  }
  while (specialCharPreference !== "yes" && specialCharPreference !== "no") {
    specialCharPreference = window.prompt("Would you like special characters in your password? Please enter yes or no.");
    if (!specialCharPreference)
      return;
  } if (specialCharPreference === "yes") {
    promptCounter++;
  }

  //count # of prompts user said yes to 
  console.log(promptCounter);

  //generate password conditions
  if (promptCounter === 0) {
    window.alert("Please ensure at least ONE of the prompts is answered yes")
  } else {
    for (var i = 0; i < lengthPreference; i++) {

      if (lowercasePreference === "yes") {
        passwordDepo = passwordDepo + String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      }
      if (uppercasePreference === "yes") {
        passwordDepo = passwordDepo + String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      }
      if (numericPreference === "yes") {
        passwordDepo = passwordDepo + String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      }
      if (specialCharPreference === "yes") {
        passwordDepo = passwordDepo + specialCharacters[Math.floor(Math.random() * 10)];
      }
    }
  }



  //ensure at least 1 character from every prompt selected by user is incorporated into password
  //make array of first # of characters must be used
  firstPasswordDepoChars = (passwordDepo.slice(0, promptCounter)).split("");


  //split the rest into array 
  remainingPasswordDecoChars = (passwordDepo.slice(-(lengthPreference * promptCounter - promptCounter)).split(""));
  console.log(firstPasswordDepoChars);
  console.log(remainingPasswordDecoChars);

  //shuffle array function
  function getShuffled(array, numberOfElements) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, numberOfElements);
  }
  //randomly select # other characters
  var secondPartShuffled = getShuffled(remainingPasswordDecoChars, (lengthPreference - promptCounter));

  //shuffle and returnfinal password
  almostPassword = firstPasswordDepoChars.concat(secondPartShuffled);
  password = (getShuffled(almostPassword, lengthPreference)).join("");
  return password;
}




// Selects the generate button!
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //displays the password generated in the password box 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//first prompt appears when generate button is clicked
generateBtn.addEventListener("click", writePassword);

