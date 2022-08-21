let userNum = null

for (let num = 1; num <= 3; num++) {
  userNum += +prompt('Enter Number ' + num)
}

let numbersAverage =  userNum / 3

if (isNaN(userNum)) {
  document.write('Entered value not a number')
} else {
  document.write(numbersAverage)
}
