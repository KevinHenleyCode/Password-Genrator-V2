document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
  
  let upYes = document.querySelector('.yes1').checked
  let lowYes = document.querySelector('.yes2').checked
  let numYes = document.querySelector('.yes3').checked
  let spYes = document.querySelector('.yes4').checked
  let psLength = document.getElementById('pslength').value
  


  // checks validity of the number choice
  if (parseInt(psLength) < 1) {
    alert('Length must be no less than 1 character.')
    return location.reload()

  } else if(parseInt(psLength) > 128) {
    alert('Length must be no more than 128 characters.')
    return location.reload()

  } else {
    document.querySelector('.text0').innerHTML = `You chose to make your password ${psLength} characters long.`
  }



  // checks the which choice was made
  if (upYes) {
    document.querySelector('.text1').innerHTML = `Uppercase.`
  }

    if (lowYes) {
    document.querySelector('.text2').innerHTML = `Lowercase.`
  }

    if (numYes) {
    document.querySelector('.text3').innerHTML = `Numbers.`
  }

    if (spYes) {
    document.querySelector('.text4').innerHTML = `Special Characters.`
  }

  if (!upYes && !lowYes && !numYes && !spYes === true) {
    alert('You must pick at least one option.')
    
    return location.reload()

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