
// Modules
const {ipcRenderer} = require('electron')
const crypto = require('crypto');
const projects = require('./../services/projects')


// Add new Project
exports.addNewProject = () => {
  document.getElementById('no-projects').classList.add('is-hidden');
  let projectID = `project-${crypto.randomBytes(5).toString('hex')}`

  // Add Project to Projects array
  projects.getProjectList.push(projectID)

  // Save Project
  projects.setProjectList()

  // Add Project
  projects.addProject(projectID)

}
