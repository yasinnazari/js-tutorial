let userWord = prompt('Enter Word')
let wordReversing = userWord.split("").reverse().join("")

if (wordReversing === userWord) {
  console.log('This word is read in the same way from both sides :)')
} else {
  console.log('This word is not read in the same way on both sides !!')
}
