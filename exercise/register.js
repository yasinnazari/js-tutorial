let userName = prompt('Enter user Name')
let password = prompt('Enter Password')

if (userName.length < 3 || password.length < 8) {
  console.log('username حداقل ۳ کاراکتر و password حداقل ۸ کاراکتر باید باشد')
} else {
  console.log('وارد شدید')
}
