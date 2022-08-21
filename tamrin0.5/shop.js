let userSubmitProduct = prompt('Enter Product Name')
let sum = null
let products = [
  {
    id: 1,
    productName : 'mobile' ,
    price: 5000000
  },
  {
    id: 2 ,
    productName : 'laptop' ,
    price: 200000
  },
  {
    id: 3,
    productName : 'computer' ,
    price: 150.000
  },
  {
    id: 4,
    productName : 'tv' ,
    price: 2000000
  }
]
let userProducts = [
  {
    id: 1,
    productName: 'laptop',
    price: 25000000
  }
]

let requestProduct

let isCheckedProduct  = products.some(function (product) {
  if (product.productName === userSubmitProduct) {
    requestProduct = product
    return true
  }
})

if (isCheckedProduct) {

  let newProduct = {
    id: 2,
    productName: requestProduct.productName,
    price: requestProduct.price
  }

  userProducts.push(newProduct)

  userProducts.forEach(function (userProduct){
    sum += userProduct.price
  })
  document.write('Total price : ' + sum)


  document.write('<br> Product Name : ' + newProduct.productName + "<br>")
  document.write('Product Price : ' + newProduct.price)

  console.log(userProducts)

} else {
  document.write('محصول موجود نمیباشد :(')
}
