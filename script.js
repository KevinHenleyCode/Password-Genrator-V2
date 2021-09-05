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

  let uplet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowlet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let spChar = ['.', '-', '_', '!', '@', '#', '$', '%', '^', '&', '*', '+']
  let password = []

  for (let loop = 0; loop < psLength; loop) {

    if (document.querySelector('.yes1').checked) {
      loop++
      password.push(uplet[Math.floor(Math.random() * uplet.length)])
    }
    if (loop == psLength) {break}
    
    if (document.querySelector('.yes2').checked) {
      loop++
      password.push(lowlet[Math.floor(Math.random() * lowlet.length)])
    }
    if (loop == psLength) {break}
    
    if (document.querySelector('.yes3').checked) {
      loop++ 
      password.push(num[Math.floor(Math.random() * num.length)])
    }
    if (loop == psLength) {break}
    
    if (document.querySelector('.yes4').checked) {
      loop++ 
      password.push(spChar[Math.floor(Math.random() * spChar.length)])
    }
    if (loop == psLength) {break}

    
  }
  let pasShuffle = password.sort((a, b) => 0.5 - Math.random())
  let pasString = pasShuffle.join()
  let finalPass = pasString.replace(/,/g, '')
  document.getElementById('printPass').innerHTML = finalPass
  console.log(`Your password is: ${finalPass}`)

})