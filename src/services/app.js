
// Modules
const {ipcRenderer} = require('electron')
const items = require('./projects.js')

// Listen for click/enter with URL
let addShot = document.getElementById('add-shot');

addShot.addEventListener('click', checkURL);

function checkURL() {
  // Get URL from input
  let newItemURL = document.getElementById('shot_URL').value

  if(newItemURL) {
    // Disable modal UI
    // $('#item-input').prop('disabled', true)
    // $('#add-button').addClass('is-loading')
    // $('.close-add-modal').addClass('is-disabled')

    // Send URL to main process via IPC
    ipcRenderer.send('new-item', newItemURL)
  }
}

// Listen for new item from main
ipcRenderer.on('new-item-success', (e, item) => {
  console.log(item)

  // Add item to items array
  // items.toreadItems.push(item)

  // Save items
  // items.saveItems()

  // Add item
  // items.addItem(item)

  // Update UI
  let shotURLinput = document.getElementById('shot_URL')
  shotURLinput.classList.add('is-success');

})

// Add items when app loads
if(items.toreadItems.length) items.toreadItems.forEach(items.addItem)
