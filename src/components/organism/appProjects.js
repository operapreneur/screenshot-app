class AppProjects extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
      <section id="app-projects">
        <ul>
          <li class="active">Demo Project</li>
          <li>Title 2</li>
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
  }
}

customElements.define('app-projects', AppProjects)
