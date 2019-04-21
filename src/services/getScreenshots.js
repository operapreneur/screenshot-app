
// Modules
const {ipcRenderer} = require('electron')


// EXAMPLE Project
const shotObject = require('./../../project-demo/ProjectObject.json')


// Get and send object
module.exports = function passShotList() {

  // Get Project Object
  // let shotList = JSON.parse(shotObject)
  console.log(shotObject);

  if(shotObject) {

    // Send list to main process via IPC
    ipcRenderer.send('shot-object', shotObject)
  }
}

// Listen for Screenshot PROGRESS
ipcRenderer.on('shoot-progress', (e, err) => {
  // List errors
  console.log(err);
  // Update progress UI
})

// Listen for Screenshot DONE
ipcRenderer.on('shoot-success', (e, err) => {

  // List errors
  console.log(err);

  // Update UI
  let shotURLinput = document.getElementById('shot_URL')
  shotURLinput.classList.add('is-success');
})
