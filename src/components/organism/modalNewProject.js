const {addNewProject} = require('./../../processRender/manageProjects')

class ModalNewProject extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.classList.add('modal')
    this.innerHTML = `
      <div class="modal-background"></div>
        <div id="create-project" class="modal-content">
          <h2>Create a New Project</h2>
          <p>Add a project title and default screenshot widths to get started.</p>
          <input id="new-project_title" class="input" type="text" value="" placeholder="Add Screenshot Title">
          <div class="column">
            <div class="columns">
              <div class="has-text-centered column">
                <div class="fas fa-2x fa-desktop"></div>
                <input id="default_desktop" class="has-text-centered input is-static" type="text" value="1280px">
              </div>
              <div class="has-text-centered column">
                <div class="fas fa-2x fa-tablet-alt"></div>
                <input id="default_tablet" class="has-text-centered input is-static" type="text" value="768px">
              </div>
              <div class="has-text-centered column">
                <div class="fas fa-2x fa-mobile-alt"></div>
                <input id="default_mobile" class="has-text-centered input is-static" type="text" value="320px">
              </div>
            </div>
          </div>
          <div class="level-right">
            <button id="cancel-project" class="button">Cancel</button>
            <button id="add-project" class="button is-link">Add</button>
          </div>
        </div>
    `;

    //Add Click Listener
    const cancelProject = document.getElementById('cancel-project')
    cancelProject.addEventListener('click', () => {
      this.remove()
    })

    const newProject = document.getElementById('add-project')
    newProject.addEventListener('click', () => {
      addNewProject();
    })

  }
}

customElements.define('modal-new-project', ModalNewProject)
