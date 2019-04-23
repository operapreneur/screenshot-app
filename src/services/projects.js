
// Modules
const {ipcRenderer} = require('electron')
const crypto = require('crypto');


// EXAMPLE Project
const shotObject = require('./../../project-demo/ProjectObject.json')


// Track items with array
exports.toreadItems = JSON.parse(localStorage.getItem('toreadItems')) || []

// Save project to localstorage
exports.saveProject = () => {
  localStorage.setItem('toreadItems', JSON.stringify(this.toreadItems))
}

// Add new Project
exports.addProject = () => {

  // Update UI
  document.getElementById('no-projects').classList.add('is-hidden');

  // console.log(shotObject);
  let projectID = `project-${crypto.randomBytes(5).toString('hex')}`

  // New project html
  let projectHTML = `<li class="active">${projectID}</li>`

  // Apppend
  document.getElementById("project-list").insertAdjacentHTML('beforeend', projectHTML)
}
