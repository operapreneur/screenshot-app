class AppHeader extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
      <header id="app-header" class="has-text-white is-uppercase has-text-weight-bold">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              LOGO
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div id="scanWebsite" class="is-hover is-unselectable has-text-centered">
                <div class="fab fa-inverse fa-lg fa-searchengin"></div>
                <p>Scan</p>
              </div>
            </div>
            <div class="level-item">
              <div id="saveProject" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-save"></div>
                <p>Save</p>
              </div>
            </div>
            <div class="level-item">
              <div id="renderScreenshots" class="is-hover is-unselectable has-text-centered">
                <div class="fas fa-inverse fa-lg fa-camera"></div>
                <p>Capture</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader)
