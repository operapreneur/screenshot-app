
const {addNewProject} = require('./../../processRender/manageProjects')
const projects = require('./../../services/projects')

class AppProjects extends HTMLElement {
  constructor() {
    super()

  }
  connectedCallback() {
    this.innerHTML = `
      <section id="app-projects">
        <ul id="project-list">
          <li id="no-projects"><em>No Projects</em></li>
        </ul>
        <header>
          <div class="level">
            <div class="level-item">
              <div id="newProject" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-plus-circle"></div>
                <p>New</p>
              </div>
            </div>
            <div class="level-item">
              <div id="importProject" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-file-import"></div>
                <p>Import</p>
              </div>
            </div>
            <div class="level-item">
              <div id="exportProject" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-file-export"></div>
                <p>Export</p>
              </div>
            </div>
          </div>
        </header>
      </section>
    `;

    //Add Listener
    const newProject = document.getElementById('newProject')
    newProject.addEventListener('click', () => {
      addNewProject();
    })

    // Add projects when app loads
    if(projects.getProjectList.length)
      projects.getProjectList.forEach(projects.addProject)

  }
}

customElements.define('app-projects', AppProjects)
