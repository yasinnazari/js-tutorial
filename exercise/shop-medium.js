let userOperation = +prompt('1 - Add product \n 2 - Delete product', 0)
let userProductName = prompt('Enter product name')
let products = [
  {
    id: 1,
    name: 'laptop',
    price: 20000000
  },
  {
    id: 2,
    name: 'mobile',
    price: 10000000
  },
  {
    id: 3,
    name: 'tv',
    price: 45000000
  },
  {
    id: 4,
    name: 'car',
    price: 150000000
  }
]
// ------
let userBasket = [
  {
    id: 1,
    name: 'keyboard',
    price: 500000
  },
  {
    id: 2,
    name: 'chair',
    price: 1000500
  },
  {
    id: 3,
    name: 'cube',
    price: 50000
  }
]

let requestProduct
let requestProductDelete

if (userOperation < 1 || userOperation > 2) {
  console.log('عملیات وجود ندارد')
}

let isCheckedAddedProduct = products.some(function (product) {
  if (product.name === userProductName) {
    requestProduct = product
    return true
  }
})

let isCheckedDeletedProduct = userBasket.some(function (userProduct) {
  if (userProduct.name === userProductName) {
    requestProductDelete = userProduct
    return true
  }
})

if (isCheckedAddedProduct && userOperation === 1) {
  let newProduct = {
    id: 4,
    name: requestProduct.name,
    price: requestProduct.price
  }
  userBasket.push(newProduct)
  
  document.write("Product ID : " + newProduct.id + "<br>" + newProduct.name + "<br>")
  document.write('محصول با موفقیت به سبد خرید شما اضافه شد')

} else if (isCheckedDeletedProduct && userOperation === 2) {
  let productIndex = userBasket.indexOf(requestProductDelete)
  // let productIndex = userBasket.findIndex(function (userBasketProduct) {
  //   return userBasketProduct
  // })
  // console.log(productIndex)
  let deletedProduct = userBasket.splice(productIndex, 1)
  console.log(deletedProduct)
}
