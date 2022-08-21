let ages = [
  {
    id: 1,
    name: 'jack',
    age: 122
  },
  {
    id: 1,
    name: 'john',
    age: 20
  },
  {
    id: 3,
    name: 'justin',
    age: 14
  },
  {
    id: 4,
    name: 'souroush',
    age: 41
  }
]

let showAge = ages.every(function (userInfo){
  // console.log(userInfo)
  return userInfo.age > 18
})

if (showAge) {
  document.write('مجاز به شروع تماس کنفرانسی هستید (همه افراد سن مناسبی دارند)')
} else {
  document.write('متاسفانه شما مجاز به ایجاد تماس کنفرانسی نیستید (سن شما مناسب برای تماس نیست)')
}
