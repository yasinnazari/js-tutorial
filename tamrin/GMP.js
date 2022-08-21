let userGMP = +prompt('Enter your GMP', 0)

if (isNaN(userGMP)) {
  console.log('Enter your GMP!!!')
} else if (userGMP === 20) {
  console.log('A+, excellent')
} else if ([17, 18, 19].includes(userGMP)) {
  console.log('A, Nice')
} else if ([14, 15, 16].includes(userGMP)) {
  console.log('B, Good')
} else if ([12, 13].includes(userGMP)) {
  console.log('C, Oops Not Bad')
} else if (userGMP < 12 ) {
  console.log('You have been conditioned')
} else {
  console.log('HeHe, ok is fun')
}
