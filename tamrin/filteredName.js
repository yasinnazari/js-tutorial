let names = ['reza', 'ali', 'Leo', 'rose']

let filteredName = names.filter(function (name) {
  return name.length == 3
})

document.write(filteredName)
