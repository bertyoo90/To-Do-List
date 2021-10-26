import { newProject } from './new-project.js'
import { newTask } from './new-task.js'

let newProjButton = document.querySelector('#new-project')
let newTaskButton = document.querySelector('#new-task')


newProjButton.addEventListener('click', newProject)
newTaskButton.addEventListener('click', newTask)





