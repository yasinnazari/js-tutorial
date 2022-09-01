let userNum1 = +prompt('Enter Num1')
let userNum2 = +prompt('Enter Num2')
let userNum3 = +prompt('Enter Num3')

if (isNaN(userNum1, userNum2, userNum3)) {
  document.write('The entered values are not equal to the number')
} else {
  document.write("koochektarin number : " + Math.min(userNum1, userNum2, userNum3) + "<br>")
  document.write("bozorgtarin number : " + Math.max(userNum1, userNum2, userNum3))
}
