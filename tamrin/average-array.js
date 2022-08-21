let userNumbers = []
let userNumber = null
let sum = null
let count = null

while(userNumber != -1) {
  sum += userNumber
  userNumber = +prompt('enter number : (if you dont have number enter -1)')
  if (userNumber != -1) {
    userNumbers.push(userNumber)
    count++
  }
}

let userNumbersAverage = sum / count

document.write(userNumbersAverage)
