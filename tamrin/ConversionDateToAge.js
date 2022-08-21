var UserBirthDate = prompt('Enter Date of Birth', 1370)
var userAge = 1401 - UserBirthDate

if (isNaN(UserBirthDate)) {
  console.log("But it's not a number, are you kidding me?")
} else if (userAge < 0) {
  console.log("Are you from the future? So enter the correct date")
} else {
  console.log("Age : " + userAge + "Years old")
}
