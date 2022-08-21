let userNum = +prompt('Enter the number', 0)
let sum = null
let count = 0


if (isNaN(userNum)) {
  console.log('This is Not a Number')
} else {
  while(userNum / 10 != 0) {
    sum += userNum % 10
    userNum = Math.floor(userNum / 10)
    count++
  }

  document.write(`Sum of Digits ${sum}` + "<br>" + `Count of Digits : ${count}`)
}

