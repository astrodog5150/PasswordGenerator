// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
// create string containing all character for each question
const charLower = "abcdefghijklmnopqrstuvwxyz"
const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const charSpecial = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
const charNum = "1234567890"
//create empty string to be added to from prompts
str = "";

function generatePassword() {
    var charLength = prompt("How many characters would you like? Choose a number between 8 and 128.")
    // var lowerYN = confirm("Would you like to add lowercase letters?")
    // var upperYN = confirm("Would you like to add uppercase leters?")
    // var specialYN = confirm("Would you like to add special characters?")
    // var numYN = confirm("Would you like to add numbers?")

    // adds different characters to main str if confirmed
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

    //picks charLength amount of characters from main string at random and returns to password string
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
//allows you to copy the generated password with other button
copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(password)
})

