let userNumber = +prompt('Enter Number')
let sum = null // dar marhale aval mishe 2

for (let num = 0; (userNumber / 10 != 0); num++) {
  sum += userNumber % 10
  // console.log(sum) 
  userNumber = Math.floor(userNumber / 10)
  // console.log(userNumber)
}

document.write('Sum of Digits : ' + Math.floor(sum))



// while :

// let userNum = +prompt('Enter the number', 0)
// let sum = null

// if (isNaN(userNum)) {
//   console.log('Not a Number')
// } else {
//   while(userNum / 10 != 0) {
//     sum += userNum % 10 
//     userNum = Math.floor(userNum / 10)
//   }

//   document.write(sum)
// }
