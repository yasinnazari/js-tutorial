let num1 = +prompt('Enter the number 1 : ')
let userOperator = +prompt('Enter the operation : \n 1. + \n 2. - \n 3. * \n 4. / \n 5. ** \n 6. average')
let num2 = +prompt('Enter the number 2 : ')

if (isNaN(num1, num2)) {
  document.write('باید عدد وارد کنید مقدار استرینگ مورد قبول نمیباشد')
} else if (userOperator === 1) {
  TotalNumbers(num1, num2)
} else if (userOperator === 2) {
  MinusNumbers(num1, num2)
} else if (userOperator === 3) {
  Multiplication(num1, num2)
} else if (userOperator === 4) {
  Division(num1, num2)
} else if (userOperator === 5) {
  NumbersPower(num1, num2)
} else if (userOperator === 6) {
  NumbersAverage(num1, num2)
}

// Operator methods
function TotalNumbers(num1, num2) {
  let total = num1 + num2
  document.write(total.toFixed(2))
}

function MinusNumbers(num1, num2) {
  let minus = num1 - num2
  document.write(minus.toFixed(2))
}

function Multiplication(num1, num2) {
  let multiplication = num1 * num2
  document.write(multiplication.toFixed(2))
}

function Division(num1, num2) {
  let division = num1 / num2
  document.write(division.toFixed(2))
}

function NumbersPower(num1, num2) {
  let power = num1 ** num2
  document.write(power.toFixed(2))
}

function NumbersAverage(num1, num2) {
  let averageTotal = num1 + num2
  let average = averageTotal / 2
  document.write(average.toFixed(2))
}
