export function newTask() {
    let task = document.querySelector('#task')
    let newTask = document.createElement('p')

    task.appendChild(newTask)
    newTask.textContent = 'this is a test!'
}