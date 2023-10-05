// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
const charLower = "abcdefghijklmnopqrstuvwxyz"
const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const charSpecial = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
const charNum = "1234567890"

str = "";

function generatePassword() {
    var charLength = prompt("How many characters would you like?")
    // var lowerYN = confirm("Would you like to add lowercase letters?")
    // var upperYN = confirm("Would you like to add uppercase leters?")
    // var specialYN = confirm("Would you like to add special characters?")
    // var numYN = confirm("Would you like to add numbers?")
    if (confirm("Would you like to add lowercase letters?")) {
        str += charLower
    } 
    if (confirm("Would you like to add uppercase letters?")) {
        str += charUpper 
    }
    if (confirm("Would you like to add special characters?")) {
        str += charSpecial
    }
    if (confirm("Would you like to add numbers?")) {
        str += charNum
    }

    
    console.log(str)
    password = "";

    for (let i = 0; i < charLength; ++i) {
        password += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    writePassword(password);
}
// Write password to the #password input
function writePassword(password) {
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(password)
})

