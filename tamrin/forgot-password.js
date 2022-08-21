let usersInfo = [
  { id: 1, name: 'mohammad reza', password: '1234'},
  { id: 2, name: 'yasin', password: 'yasinpassword'},
  { id: 3, name: 'ali', password: '9876'}
]

let userName = prompt('Enter the username')


usersInfo.filter(function (user) {
  if (user.name == userName) {
    document.write('your password : ' + user.password)
  }
})

