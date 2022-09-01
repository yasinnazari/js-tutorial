let lamp = document.getElementById('lamp')
let lampStatus = false
function ChangeLampMode() {
  lampStatus = !lampStatus
  if (lampStatus) {
    lamp.setAttribute('src', '/images/lamp-on.gif')
  } else {
    lamp.setAttribute('src', '/images/lamp-off.gif')
  }
}

