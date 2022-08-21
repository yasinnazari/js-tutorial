var userAge = +prompt('Enter your age', 0)

if (userAge < 18) {
  // scope
  console.log("You are not allowed to enter")
} else {
  console.log("You are authorized to enter the panel")
}
