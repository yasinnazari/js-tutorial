let allPrices = 0

for (let product = 0; product < 3; product++) {
  allPrices += +prompt('Enter the product price')
}
if (isNaN(allPrices)) {
  document.write('this is not a number')
} else {
  document.write('All price of your basket : ' + allPrices + "<br>")
}
