//typeof
// var FullName = prompt('اسم و فامیلیتو رد کن بیاد  ', 'اسم تستی')
// var num = Number(number); shortcut => +number
// var num2 = String(num);
// var num3 = Boolean(num);
// متود prompt بهمون استرینگ برمیگردونه
// alert(str + "\n" + str2 + " learn \"javascript\"" +  "\n" + str3 + "\n" + str4 + "\n" + str5)
// alert("js is a \"programming language\"")
// console.log(num3 - num4 == num5)
// console.log(num3 < num2)
// console.log(str4 === num4) // "7" = 7
//bitwise operator & = true && true = true ... true && false = false ... false && false = false

// num1 * num2 === 12 ? console.log('if, is ok') : console.log('if, not ok!!!!')


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let browser = 'Edge'

// if (browser == 'Edge') {
//   alert( "You've got the Edge!" );
// } else if (['Chrome', 'Firefox', 'Safari'].includes(browser)) {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert('We hope that this page looks ok!' );
// }

// Expressions function
// let FullName = function() {
//   let firstName = 'Yasin'
//   let lastName = 'Nazari'
//   console.log(firstName + ' ' + lastName)
// }

// Declaration function
// function name() { console.log('Hello World') }.

// function ShowNumbers (firstNumber, secondNumber) {
//   console.log('First Number(param1) : ' + firstNumber)
//   console.log('Second Number(param2) : ' + secondNumber)
// }

// ShowNumbers(num1, num2)


// var number1 = prompt('Enter Number 1', 1)
// var number2 = prompt('Enter Number 2', 2)

// function showPower(num1, num2) {
//   return num1 ** num2
// }

// let powerResult = showPower(number1, number2)
// console.log('PowerResult = ' + powerResult)

// console.log(userName[1]) // index
// console.log(userName.length)


// index az 0 shoroo mishe 


// let text = 'I Love JavaScript'

// console.log(text[2])
//ravesh 2 = console.log(text.charAt(0))
// console.log(text.charCodeAt) // ASCII code ./ CODE ASCII harf small ba harf bozorg fargh dare
// ravesh 2 = console.log(text.concat(" & VueJs"))

// console.log(text.trim()) // hazf space ha az 2 taraf
// متد ()trim فضای خالی (Space) را از دو طرف رشته پاک میکند.

// console.log(text.toLowerCase()) // be harf koochack tabdil mikone
// console.log(text.toUpperCase()) // be harf bozorg tabdil mikone

// console.log(text.search('javascript'))

// console.log(text.indexOf('javascript'))
// متد ()indexOf شماره ایندکس اولین حرف از کلمه داخل پرانتز را به ما برمیگردونه.
// هر دو متد indexOf و lastIndexOf اگر کلمه مورد نظر پیدا نشه،  (۱-)  برمیگردونن

// console.log(text.includes('JavaScript')) // migarde dakhel var ke bebine in meghdar has ya na 

// splice (index, chandtaberejolo, meghdar hayee ke mitoonim jaygozari konim) // hazf mikone 
// console.log(text.slice(7, 17)) // az index 7 ta 17 joda mikone va return mikone  (start, end)
// اگه فقط یه پارامتر داخل پرانتز قرار بگیره، از اون شماره ایندکس تا آخر رشته انتخاب میشه.

// console.log(text.substr(7, 10)) // param1 = indexi k azash shoroo beshe // param2 = tedad harfi ke bere jolo
// متد ()substring مشابه متد ()slice عمل میکند. با این تفاوت که در متد substring پارامتر منفی مورد قبول نیست.

// console.log(text.substring(7, 17))
// متد ()substr هم مشابه متد ()slice عمل میکنه با این تفاوت که در متد substr پارامتر دوم تعداد شماره ایندکسی است که باید از پارامتر اول شمرده شود


// Math Method

// console.log(Math.PI) // p number
// console.log(Math.pow(4, 8)) // power
// console.log(Math.sqrt(81)) // jazr // 9 * 9 = 81
// console.log(Math.abs(12)) // - ro clearn mikone
// console.log(Math.min()) // koochektarin number
// console.log(Math.max()) // bozorgtarin number
// console.log(Math.floor(15.8)) // ashar ro pak mikone
// console.log(Math.trunc(14.5)) // ashar ro pak mikone
// console.log(Math.round(18.5)) // adad ro rond mikone
// console.log(Math.random()) // adad ranom entekhab mikone bein 0.1
// console.log(Math.random() * n) // adad ranom entekhab mikone bein <n> ta adad


// arrays 

// console.log(Array.isArray(scores)) // check mikone ke aya array hast ya na
// console.log(scores.join('/')) // output : 40/16/26/85/31/68 
// tak tak item haye array ro be ham michasboone bar asas meghdari ke be parameter bedim
// console.log(scores.reverse()) // hame chiz ro bar aks mikone

// assignment operators

// number = number + 4 // number += 4
// number = number - 4 // number -= 4
// number = number * 3 // number *= 3
// number = number / 3 // number /= 3
// number = number ** 3 // number **= 3
// number++
// ++number
// number--
// --number
// let num2 = num1++ // aval num1 mirize dakhel num2 bad behesh ezafe mikone
// let num2 = ++num1 // aval yeki be num1 ezafe mikone bad mirize dakhele num2