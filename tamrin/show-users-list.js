let userInformation = [
  {
    name: 'yasin',
    family: 'saeeidi',
    age: 13,
  },
  {
    name: 'alireza',
    family: 'bahrami',
    age: 20,
  },
  {
    name: 'amir',
    family: 'rahmati',
    age: 30,
  },
  {
    name: 'reza',
    family: 'heydari',
    age: 30,
  }
]

userInformation.forEach(function (userInfo) {
  console.log('FirstName : ' + userInfo.name + '\n FamilyName : ', userInfo.family + '\n age : ' + userInfo.age)
})
