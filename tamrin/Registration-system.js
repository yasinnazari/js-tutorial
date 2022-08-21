let newUserInfo = {}
newUserInfo.name = prompt('Enter first name')
newUserInfo.family = prompt('Enter family name')
newUserInfo.email = prompt('Enter email')
newUserInfo.age = prompt('Enter age')

usersInformation = [
  {
    name: 'Amin',
    family: 'Nazari',
    email: 'aminnazari1@gmail.com',
    age: 20
  },
  {
    name: 'mahdi',
    family: 'agheshte',
    email: 'mehdi15agheshte@yahoo.com',
    age: 35
  },
  {
    name: 'Alireza',
    family: 'Bahrami',
    email: 'alirezabahrami@gmail.com',
    age: 17
  },
]

usersInformation.push(newUserInfo)

if (newUserInfo.name.length < 3 || newUserInfo.name.length > 10) {
  console.log('Name Error')
} else if (newUserInfo.family.length < 3 || newUserInfo.family.length > 15) {
  console.log('Family error')
} else if (isNaN(newUserInfo.age) || newUserInfo.age.length < 3) {
  console.log('Age error')
} else {
  console.log(usersInformation)
}
