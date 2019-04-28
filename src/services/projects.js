
// Modules
const {ipcRenderer} = require('electron')


// EXAMPLE Project
const shotObject = require('./../../project-demo/ProjectObject.json')

// Track items with array
exports.getProjectList = JSON.parse(localStorage.getItem('projectList')) || []

// Save project to localstorage
exports.setProjectList = () => {
  localStorage.setItem('projectList', JSON.stringify(this.getProjectList))
}

// Add Project
exports.addProject = (projectID) => {
  document.getElementById('no-projects').classList.add('is-hidden');
  let items = document.querySelectorAll('.project-item');
  if (items.length > 0) {
    items.forEach(function(i) {
      if (i.classList.contains('active')) {
        i.classList.remove('active');
      }
    })
  }
  let projectHTML = `<li id="${projectID}" class="project-item active" draggable="true">
                        ${projectID}
                      </li>`
  document.getElementById("project-list").insertAdjacentHTML('beforeend', projectHTML)
}
