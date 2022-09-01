let todoList = [
  { id: 1, task: 'eat cofee', status: false },
  { id: 2, task: 'see 8 video', status: false },
  { id: 3, task: 'do the exercise', status: false }
]
let userOperation = +prompt('1. Add task \n 2. Delete task \n 3. Done task')

console.log("Selected Operation : " + userOperation)
if (userOperation == 1) {
  let userAddTask = prompt('Enter your task for add')
  let newTask = {
    id: todoList.length + 1,
    task: userAddTask,
    status: false
  }
  todoList.push(newTask)
  console.log(todoList)

} else if (userOperation === 2) {
  let userDeleteTask = prompt('Enter your task for delete')
  let findTask = todoList.findIndex(function (todo) {
    return todo.task === userDeleteTask
  })

  todoList.splice(findTask, 1)
  console.log(todoList)

} else if (userOperation === 3) {
  let userChangeTaskStatus = prompt('Enter your task for change status')
  let findTaskStatus = todoList.findIndex(function (todo) {
    return todo.task === userChangeTaskStatus
  })
  if (findTaskStatus) {
    todoList[findTaskStatus].status = true
  }
  document.write("Task id : " + todoList[findTaskStatus].id + "<br>")
  document.write("Your task : " + todoList[findTaskStatus].task + "<br>")
  document.write("status : " + todoList[findTaskStatus].status + "<br>")

} else {
  console.log('There is no operation !!!')
}
