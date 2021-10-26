export function newProject() {
    let projectList = document.querySelector('#project-list')
    let testProject = document.createElement('li')
    let newProjButton = document.querySelector('#new-project')

    projectList.appendChild(testProject)
    testProject.textContent = 'hello world'
    projectList.appendChild(newProjButton)

}








