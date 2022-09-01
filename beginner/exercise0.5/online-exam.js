let queztions = [
  {
    id: 1,
    queztion: 'آیا جاوااسکریپت زبان برنامه نویسی است ؟',
    answers: [
      'yes',
      'no'
    ],
    correctAnswer: 'yes'
  },
  {
    id: 2,
    queztion: 'لاراول فریمورک کدام زبان برنامه نویسی است ؟',
    answers: [
      'python',
      'java',
      'php'
    ],
    correctAnswer: 'php'
  },
  {
    id: 3,
    queztion: 'اکنون در چه سالی هستیم ؟',
    answers: [
      2022,
      2035,
      2010
    ],
    correctAnswer: 2022
  },
  {
    id: 4,
    queztion: 'بزرگترین قاره دنیا کدام است ؟',
    answers: [
      'africa',
      'asia',
      'oroupa'
    ],
    correctAnswer: 'asia'
  }
]
let score = 0
let selectedAnswer = ''

queztions.forEach(function (item) {
  selectedAnswer = prompt(item.queztion + "\n" + item.answers)
  console.log(selectedAnswer)
  if (selectedAnswer == item.correctAnswer) {
    // console.log('test')
    score++
  }
})

document.write('امتیاز شما : ' + score)
