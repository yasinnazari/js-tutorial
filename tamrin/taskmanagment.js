let employees = [
  { id: 1, task: 'fix errors', name: 'alireza' },
  { id: 2, task: 'change panel', name : 'mohammad' },
  { id: 3, task: 'add user list', name: 'mani' }
]

let employeeTask = prompt('Enter the task')
let employeeName = prompt('Enter the employee name')


employees.forEach(employee => {
  if (employeeName === employee.name) {
    employee.task = employeeTask
    console.log(employees)
  }
})

