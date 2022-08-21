// for (let i = 0; i < 10; i++) {
  // for params
  // param1 = تعریف متغیر و دادن مقدار 
  // param2 = اینجا شرط رو میزاریم که چک میکنه شرط رو اگر درست باشه میره و حلقه ارو اجرا میکنه 
  // param3 = اگر شرط درست باشه این قسمت اجرا میشه 
//   console.log(i, ': JavaScript')
// }

// let name = 'javascript tutorial'
// for (let index = 0; index < 19; index++) {
  //scope
//   document.write(index, " = ", name[index]+ "<br>")
// }
// for(let index = 0; index < name.length; index++) {

// while (condition) {
// }

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i < 5)


// let fruits = ['Banana', 'Apple', 'Kiwi', 'cucumber'] // ejbari dar maghadir nist ke hamash yeki bashe mishe yeki string yeki number &...

// fruits[2] = 'orange'
// console.log(fruits[2])

// fruits[4] = 'orange' // add item to akhar array
// fruits.push('Orange', 'narenghi') // ravesh2 = add item be akhar array
// fruits.pop() // akharin item array ro delete mikone
// fruits.unshift('mive') // add item be aval array
// fruits.shift() // delete item az aval array


// let user1 = {
//   name: 'yasin',
//   job: 'Noob Programmer',
//   age: 14
// }
// let users = [
//   {
//     name: 'Yasin',
//     family: 'nazari',
//     age: '14',
// ]

// console.log(user1)
// console.log(users[1].name)
// console.log(user1['name']) // gereftan meghdar yek index az object
// console.log(user1.name) // gereftan meghdar yek index az object

// let newUserInfo = {}
// newUserInfo.name // ezafe kardan hamchin keyi be object

// let users = [
//   'Ali',
//   'Hossein',
// ]
// users.forEach(function (user) {
//   console.log(`user name : ${user}`)
// })

// includes method param 2 => baraye inke begim az kodom index shoroo kon peyda kardan ro
// let userName = prompt('Enter yo  ur name')
// let usersName = [
//   'ali',
//   'yasin',
//   'fatemeh',
//   'sina',
//   'justin',
//   'jack'
// ]

// let isLogin = usersName.includes(userName)
// // console.log(isLogin)

// if (isLogin === true) {
//   console.log('Login')
// } else {
//   console.log('Please register first')
// }

// let isChecked = userData.some(function (user){
//   console.log(user)
//   return user.name == 'jordan'
// })

// console.log(isChecked)



// let userProduct = 0
// let products = [
//   {
//     productName : 'Mobile' ,
//     price: 5000.000
//   },
//   {
//     productName : 'Panel' ,
//     price: 200.000
//   },
//   {
//     productName : 'Computer' ,
//     price: 150.000
//   },
//   {
//     productName : 'TV' ,
//     price: 2000.000
//   }
// ]

// let userShoppingCart = []

// let isProductPresence = products.some(function (product) {
//   return product.productName == userProduct
// })

// console.log(productName)
// console.log(userProduct)

// if (isProductPresence) {
//   console.log('محصول موجود میباشد :)'+ '\n' + 'price : ' + products.product.price)
// } else {
//   console.log('محصول موجود نمیباشد :(')
// }

// console.log(isProductPresence)

// let ages = [41, 72, 26, 23]
// let showAge = ages.every(function (age) {
//   console.log(age)
//   return age > 18
// })
// console.log(showAge)

// method some be true berese break mishe va every be false berese break mishe 
