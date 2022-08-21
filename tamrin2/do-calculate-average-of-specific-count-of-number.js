let userNumber = null
let sum = null
let counter = null

while (userNumber != -1) {
  sum += userNumber
  userNumber = +prompt("Enter The Number : \n if you don't have number , enter -1 ")
  if (userNumber != -1) {
    counter++
  }
}
let averageAnswer = sum / counter

console.log('average : ' + averageAnswer)

