// Assignment code here

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var char = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate your password and get user prompts
function generatePassword(){
  var password = ""; 

  var special = false;
  var lower = false;
  var upper = false;
  var numbers = false;
 
  while(!special && !lower && !upper && !numbers){
   special = window.confirm(`Do you want to include special characters?`);
   lower = window.confirm(`Do you want to include lower case letters?`);
   upper = window.confirm('Do you want to include upper case letters?');
   numbers = window.confirm(`Do you want to include numbers?`);

   if(!special && !lower && !upper && !numbers){
     alert("You must select at least one character type!");
   }
  }
  var length = 0

  while(length < 8 || length > 128){
    length = window.prompt('How many characters do you want to include? (between 8-128 characters)');
    length = parseInt(length);
    if (length < 8 || length > 128){
      window.alert(`You must choose a number between 8 & 128!`);
    }
  }

  for(var i = 0; i < length; i++ ){
    var type = Math.floor(Math.random() * 4);
    if(special && type === 0){
      password += char[Math.floor(Math.random() * char.length)]; 
    } else if(lower && type === 1){
      password += alpha[Math.floor(Math.random() * alpha.length)];
    } else if(upper && type === 2){
      password += alpha[Math.floor(Math.random() * alpha.length)].toUpperCase(); 
    } else if (numbers && type === 3){
      password += Math.floor(Math.random() * 9);
    } else {
      i--;
    }
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
