let userNumber = prompt("enter number");
let count = 0

if (isNaN(userNumber)) {
  document.write('This is not a number')
} else {
  for (let num = 0; userNumber / 10 != 0; num++) {
    count++
    userNumber = Math.floor(userNumber / 10)
    // ravesh2 => // if (userNumber === 0) {
    //   document.write(num + 1)
    // }
  }
  
  document.write('Count of digits : ' + count)
}
