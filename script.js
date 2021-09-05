// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function generatePassword() {




//TODO quick check of the radio buttons. build on later
document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
  
  let psLength = document.getElementById('pslength').value
  
  // checks validity of the number choice
  if (parseInt(psLength) < 8) {
    console.log('Too low')
  } else if(parseInt(psLength) > 128) {
    console.log('Too high')
  } else {
    console.log(psLength)
    document.querySelector('.text0').innerHTML = `You chose to make your password ${psLength} characters long.`
  }

  // checks the which choice was made
  if (document.querySelector('.yes1').checked) {
    console.log('You Chose Uppercase')
    document.querySelector('.text1').innerHTML = `You Chose Uppercase.`

  } else if(document.querySelector('.no1').checked) {
    console.log('No Uppercase')
    document.querySelector('.text1').innerHTML = `No Uppercase.`

  }

    if (document.querySelector('.yes2').checked) {
    console.log('You wanted Lowercase')
    document.querySelector('.text2').innerHTML = `You wanted Lowercase.`

  } else if(document.querySelector('.no2').checked) {
    console.log('No Lowercase')
    document.querySelector('.text2').innerHTML = `No Lowercase.`

  }

    if (document.querySelector('.yes3').checked) {
    console.log('You selected Numbers')
    document.querySelector('.text3').innerHTML = `You selected Numbers.`

  } else if(document.querySelector('.no3').checked) {
    console.log('No Numbers')
    document.querySelector('.text3').innerHTML = `No Numbers.`

  }

    if (document.querySelector('.yes4').checked) {
    console.log('You checked Special Characters')
    document.querySelector('.text4').innerHTML = `You checked Special Characters.`

  } else if(document.querySelector('.no4').checked) {
    console.log('No Special Characters')
    document.querySelector('.text4').innerHTML = `No Special Characters.`

  }

  let lowlet= ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z']
  let uplet = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z']
  let spChar = [`', ", ., -, _, !, @, #, $, %, ^, &, *, (, ), +`]
  let password = []

  for (let loop = 0; loop < psLength; loop) {

    if (document.querySelector('.yes1').checked) {
      loop++
      console.log(`Upper ${loop}`)
    }
    if (loop == psLength) {break}
    
    if (document.querySelector('.yes2').checked) {
      loop++ 
      console.log(`Lower${loop}`) 
    }
    if (loop == psLength) {break}
    
    if (document.querySelector('.yes3').checked) {
      loop++ 
      console.log(`Number ${loop}`) 
    }
    if (loop == psLength) {break}
    
    if (document.querySelector('.yes4').checked) {
      loop++ 
      console.log(`Special Character${loop}`)
    }
    if (loop == psLength) {break}

  }

})


//   //________________________________________________
//   // checks the length the user wants for password and checks if it meets the requirements
//   // prompts the user with a choice and then checks it for true or false
//   // if it's true then user wanted that option if false then not
//   var pwLength = prompt(`How long would you like your password to be?
//     (It must be between 8 and 128 characters long.)`);
  
//     // checks user input and displays choice to the screen
//     if (parseInt(pwLength) >= 8 && parseInt(pwLength) <= 128) {
//       console.log(`${pwLength}`);
//       var text_1 = document.querySelector(".text1").innerHTML = `
//       You chose to have your password be ${pwLength} characters long and have...`;
      
//     }else{
//       console.log("Not a valid answer.");
//       var text_1 = document.querySelector(".text1").innerHTML = `
//       ${pwLength} is not a valid answer. Must be between 8 and 128`;
//       return;
//     }
    
//     // checks user input and displays choice to the screen
//     var pwUpper = confirm(`would you like uppercase characters?`)
//     if (pwUpper == true) {
//       console.log(`Ok so we'll add uppercase`);
//       var text_2 = document.querySelector(".text2").innerHTML = `
//       Uppercase`;
      
//     }else{
//       console.log(`No uppercases then`);
//       var text_2 = document.querySelector(".text2").innerHTML = `
//       No Uppercase`;
//     }
    
//     // checks user input and displays choice to the screen
//     var pwLower = confirm(`would you like lowercase characters?`)
//     if (pwLower == true) {
//       console.log(`Ok so we'll add lowercase`);
//       var text_3 = document.querySelector(".text3").innerHTML = `
//       Lowercase`;
      
//     }else{
//       console.log(`No lowercases then`);
//       var text_3 = document.querySelector(".text3").innerHTML = `
//       No Lowercase`;
//     }
    
//     // checks user input and displays choice to the screen
//     var pwNum = confirm(`would you like numbers?`)
//     if (pwNum == true) {
//       console.log(`Ok so we'll add numbers`);
//       var text_4 = document.querySelector(".text4").innerHTML = `
//       Numbers`;
      
//     }else{
//       console.log(`No numbers then`);
//       var text_4 = document.querySelector(".text4").innerHTML = `
//       No Numbers`;
//     }
    
//     // checks user input and displays choice to the screen
//   var pwSpecial = confirm(`would you like special characters?`)
//   if (pwSpecial == true) {
//     console.log(`Ok so we'll add special characters`);
//     var text_5 = document.querySelector(".text5").innerHTML = `
//       Special Characters`;
      
//   }else{
//     console.log(`No special characters then`);
//     var text_5 = document.querySelector(".text5").innerHTML = `
//       No Special Characters`;
//   }
  
  
//   //________________________________________________
//   // compares all options and makes sure the user has chossen at least one of them
//   if (pwUpper == false && pwLower == false && pwNum == false && pwSpecial == false) {
//     console.log(`Must contain at least one character option`);
    
//     var noChoices = document.querySelector(".nochoices").innerHTML = `
//       You must select at least one character option.`;
//     return;
//   }


// //________________________________________________
// // creates arrays that contain the options for the password
// var pwArray = [];
// var lt = ["a","b","c","d","e","f","g","h","i","k","l","m","n",
//   "o","p","q","r","s","t","u","v","w","x","y","z"];
//   var sp = ["!", "#", "$", "%", "&", "'", "(", ")", "*",
//   "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]",
//   "^", "_", "`", "{", "|", "}", "~"];

//   // randomizes the length
// for (var iterate = 0; iterate < pwLength;) {
//   var ranUpLt = Math.floor(Math.random() * lt.length);
//   var ranLwLt = Math.floor(Math.random() * lt.length);
//   var ranSp = Math.floor(Math.random() * sp.length);
  
//   // randomizes the uppercase
//   if (pwUpper == true && iterate < pwLength) {
//     pwArray.push(`${lt[ranUpLt].toUpperCase()}`)
//     iterate ++
//   }
  
//   // randomizes the lowercase
//   if (pwLower == true && iterate < pwLength) {
//     pwArray.push(`${lt[ranLwLt].toLowerCase()}`)
//     iterate ++
//   }
  
//   // randomizes the numbers
//   if (pwNum == true && iterate < pwLength) {
//     pwArray.push(`${Math.floor(Math.random() * 10)}`)
//     iterate ++
//   }
  
//   // randomizes the special characters
//   if (pwSpecial == true && iterate < pwLength) {
//     pwArray.push(`${sp[ranSp]}`)
//     iterate ++
//   }
// }


// //________________________________________________
// // removes the commas and prints the contents of the array to a string
// var results = document.querySelector(".results").innerHTML = `Here are your results:`;
// var pwText = pwArray.toString().replace(/,/g, "");
// var passwordText = document.querySelector("#password").innerHTML = pwText;
// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);
