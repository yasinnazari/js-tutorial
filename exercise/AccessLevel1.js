var userAge = +prompt('Enter your age', 0)
var userSex = prompt('Enter your gender (male, female)')

if (isNaN(userAge)) {
  console.log("what!!? are you kidding? your Age is stringgg")
} else if (userAge < 18) {
  console.log('noo you baby :)')
} else if (userSex === 'female' || userAge < 18) {
  console.log('female' + ', ' + 'and you are under 18 years of age, you are not allowed to Enter')
} else {
  console.log('Login to panel')
}
