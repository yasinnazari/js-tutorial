// tamrin 2

var userNumber = prompt('Enter Number', 0) // get number from user
var userNumberType = +userNumber // change prompt input type to number

console.log(userNumberType)

if (userNumberType % 2 == 0) {
  console.log(userNumberType + " " + "Even")
} else if (isNaN(userNumberType)){
  console.log("this is String")
} else {
  console.log(userNumberType + " " + 'odd')
}


// methods 
// let userNumber = +prompt('Enter a number', 0)

// function evenOrOdd(userNumber) {
//   if(isNaN(userNumber)) {
//     console.log('This is string')
//   } else if (userNumber % 2 == 0) {
//     console.log('Number even')
//   } else {
//     console.log('Number Odd')
//   }
// }

// evenOrOdd(userNumber)
