var minutes = +prompt('enter time (minute)', 0)
var minuteToHours = minutes / 60

if (minutes < 0) {
  console.log("this is no time")
} else if(isNaN(minutes)) {
  console.log("but this is string")
} else {
  console.log(minuteToHours + " Hour")
}
