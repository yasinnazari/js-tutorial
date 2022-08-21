let userBasket = [
  {
    id: 1,
    name: 'laptop',
    price: 2500
  },
  {
    id: 2,
    name: 'mobile',
    price: 60
  },
  {
    id: 3,
    name: 'tv',
    price: 5
  },
  {
    id: 4,
    name: 'game',
    price: 2
  },
  {
    id: 5,
    name: 'mouse',
    price: 3
  },
  {
    id: 6,
    name: 'computer',
    price: 1
  }
]

let sum = 0
let postPrice = 0

userBasket.forEach(basketProduct => {
  sum += basketProduct.price
  if (basketProduct.price < 100000) {
    postPrice += 1000 + sum
  }  
})
console.log(postPrice)

if (sum > 100000) {
  console.log('مجموع محصولات شما بیشتر ۱۰۰ هزار تومان است و هزینه پست محسوب نمیشود')
} else {
  console.log('برای برخی از محصولات شما هزینه پست محاسبه میشود')
}
